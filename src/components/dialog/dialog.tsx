import { Component, Host, h, Method, Prop, Element, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'hc-dialog',
  styleUrl: 'dialog.scss',
  shadow: true
})
export class Dialog {
  /**
   * 标题
   */
  @Prop({ mutable: true }) titles: string;
  /**
   * 内容
   */
  @Prop() content: string;
  /**
   * 底部按钮
   */
  @Prop() footer: string = "['知道了']";
  /**
   * 显示隐藏
   */
  @Prop() visible: boolean = false
  /**
   * 样式
   */
  @Prop() effect: 'zoom' | 'fadeIn' = 'zoom'
  /**
   * 定时关闭
   */
  @Prop() duration: number;
  /**
   * 类型
   */
  @Prop() type: string;
  @Prop() placeholder: string;
  $buttons
  @Element() $el: HTMLElement;
  @Event() vdestory:EventEmitter;
  @Method()
  async display () {
    this.$el.setAttribute('effect', this.effect)
    this.$el.style.zIndex = '100'
    setTimeout(() => {
      this.visible = true
    }, 30)
  }
  @Method()
  async destory (item) {
    this.vdestory.emit(item)
    this.visible = false;
    setTimeout(() => {
      this.$el.style.zIndex = '-1'
    }, 300)
    // 如果是以指令的形式调用，需要销毁dom
    var dialogs = document.querySelectorAll('hc-dialog')
    setTimeout(() => {
      dialogs.forEach(dialog => {
        if (dialog.getAttribute('service')) {
          document.body.removeChild(dialog)
        }
      })
    }, 300)
  }
  @Watch('visible')
  watchHandler(newValue: boolean) {
    if (newValue) {
      this.$el.setAttribute('visible', `${newValue}`)
      this.$el.style.zIndex = '100'
    } else {
      this.$el.removeAttribute('visible')
    }
  }
  componentWillLoad () {
    this.bindDuration()
  }
  bindDuration () {
    let {duration} = this
    if (duration) {
      var timer = setInterval(() => {
        duration = duration > 0 ? duration - 1000 : 0
        if (duration == 0) {
          clearInterval(timer)
          this.destory(null)
        }
        this.$el.shadowRoot.querySelector('#count').innerHTML = `${duration / 1000}S`
      }, 1000)
    }
  }
  renderContent () {
    if (!this.type) {
      return (this.content)
    }
    if (this.type == 'prompt') {
      return (<hc-input id="prompt" placeholder={this.placeholder}></hc-input>)
    }
  }
  render() {
    const footer = eval(`(${this.footer})`)
    return (
      <Host>
        <div class="hc-dialog">
    <p id="count" class="hc-dialog__countdown">{this.duration ? `${this.duration / 1000}S` : ''}</p>
          <h2 class="hc-dialog__title">{this.titles}{this.visible}</h2>
          <div class="hc-dialog__content">
            <slot>{this.renderContent()}</slot>
          </div>
          <div class="hc-dialog__footer">
            <slot name="footer">
              {
                footer.map((item) => {
                  return <p onClick={this.destory.bind(this, item)} class="hc-dialog__footer_item">{item}</p>
                })
              }
            </slot>
          </div>
        </div>
        <div class="hc-mask"></div>
      </Host>
    );
  }
  /**
   * 已服务的形式调用
   */
  @Method()
  async init (option) {
    const dialog = document.createElement('hc-dialog')
    Object.keys(option).forEach(key => {
      dialog.setAttribute(key, option[key])
    })
    dialog.setAttribute('service', 'true')
    document.body.appendChild(dialog)
    setTimeout(() => {
      dialog.setAttribute('visible', 'true')
    }, 30)
    return dialog
  }
}
