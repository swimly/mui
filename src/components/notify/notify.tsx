import { Component, Host, h, Prop, Method, Watch, Element } from '@stencil/core';

@Component({
  tag: 'hc-notify',
  styleUrl: 'notify.scss',
  shadow: true
})
export class Notify {

  @Prop() visible: boolean = false;
  @Prop() text: string = '提交成功！';
  @Prop() duration: number = 3000;
  @Prop() position: string = 'center';
  @Prop() background: string = 'rgba(0,0,0,0.8)';
  @Prop() icon: string;
  @Prop() iconsize: number = 36;
  @Prop() type: string;
  @Prop() spin: boolean = false;
  /** (optional) The notify to display */
  // Notify显示
  @Element() el: HTMLElement;
  /** (optional) 初始化notify */
  @Method()
  async showNotify () {
    setTimeout(() => {
      this.visible = true
      this.el.style.transition = '0.3s'
    }, 50)
    setTimeout(() => {
      this.destoryNotify()
    }, this.duration)
  }
  /** (optional) 销毁notify */
  @Method()
  async destoryNotify () {
    this.visible = false
    // 如果是以指令的形式调用，需要销毁dom
    var notifys = document.querySelectorAll('hc-notify')
    console.log(notifys)
    setTimeout(() => {
      notifys.forEach(notify => {
        if (notify.getAttribute('service')) {
          document.body.removeChild(notify)
        }
      })
    }, 300)
  }
  @Watch('visible')
  watchHandler(newValue: boolean) {
    if (newValue) {
      this.el.setAttribute('visible', `${newValue}`)
    } else {
      this.el.removeAttribute('visible')
    }
  }
  componentWillLoad () {
    this.renderBackground()
  }
  componentDidLoad () {
  }
  renderBackground () {
    if (this.type == 'success') {
      this.background = '#07c160'
    }
    if (this.type == 'warning') {
      this.background = '#ff976a'
    }
    if (this.type == 'error') {
      this.background = '#e90000'
    }
  }
  render() {
    return (
      <Host style={{backgroundColor: this.background}}>
        <hc-icon spin={this.spin} size={this.iconsize} name={this.icon}></hc-icon>
        <span>{this.text}</span>
      </Host>
    );
  }
  /**
   * 已服务的形式调用
   */
  @Method()
  async init(option) {
    const exist = document.querySelector('hc-notify')
    const notify = exist ? exist : document.createElement('hc-notify')
    Object.keys(option).forEach(key => {
      notify.setAttribute(key, option[key])
    })
    notify.setAttribute('service', 'true')
    document.body.appendChild(notify)
    notify.showNotify()
    return notify
  }

}
