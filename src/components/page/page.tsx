import { Component, Host, h, Prop, Element, Watch, Event, Method, EventEmitter } from '@stencil/core';

@Component({
  tag: 'hc-page',
  styleUrl: 'page.scss',
  shadow: true
})
export class Page {
  @Prop() titles: string;
  @Prop() leftButtons: string = '[{icon: "arrow-lift", label: "返回", id: "back"}]';
  @Prop() rightButtons: string = '[]';
  @Prop() padding: string = '0'
  @Prop() color: string = '#262626';
  @Prop() headBackground = '#fff'
  @Prop() background: string = '#f5f5f5';
  @Prop() scrolldistance: number = 0;
  @Prop() hideHeader: boolean = false;
  @Element() el: HTMLElement;
  $slot
  $header
  @Event() vscroll: EventEmitter;
  @Event() vclick: EventEmitter;
  componentDidLoad() {
    this.renderStyle()
    var section = this.el.shadowRoot.querySelector('section')
    section.addEventListener('scroll', () => {
      this.scrolldistance = Math.round(this.el.shadowRoot.querySelector('section').scrollTop)
      this.el.setAttribute('scrolldistance', `${this.scrolldistance}`)
      this.vscroll.emit({
        scrollTop: this.scrolldistance,
        offsetTop: section.offsetTop
      })
    })
  }
  // 初始化样式
  renderStyle() {
    let leftButtons = eval(`(${this.leftButtons})`)
    let rightButtons = eval(`(${this.rightButtons})`)
    if (leftButtons.length) {
      if (!leftButtons[0].hasOwnProperty('icon')) {
        this.$header.style.paddingLeft = '1rem'
      }
    }
    if (rightButtons.length) {
      if (!rightButtons[rightButtons.length - 1].hasOwnProperty('icon')) {
        this.$header.style.paddingRight = '1rem'
      }
    }
  }
  @Watch('leftButtons')
  leftButtonsHandle (newValue) {
    console.log(newValue)
  }
  @Method()
  async scrollGo (pos: number) {
    this.scrollAnimation(this.scrolldistance, pos)
  }
  scrollAnimation(currentY, targetY) {
    let needScrollTop = targetY - currentY
    let _currentY = currentY
    setTimeout(() => {
      // 一次调用滑动帧数，每次调用会不一样
      const dist = Math.ceil(needScrollTop / 10)
      _currentY += dist
      this.$slot.scrollTo(_currentY, currentY)
      // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
      if (needScrollTop > 10 || needScrollTop < -10) {
        this.scrollAnimation(_currentY, targetY)
      } else {
        this.$slot.scrollTo(_currentY, targetY)
      }
    }, 1)
  }
  buttonClick (item) {
    this.vclick.emit(item)
    if (item.id == 'back') {
      window.history.go(-1)
    }
  }
  render() {
    let leftButtons = eval(`(${this.leftButtons})`)
    let rightButtons = eval(`(${this.rightButtons})`)
    return (
      <Host>
        <div class="hc-header" style={!this.hideHeader ? {backgroundColor: this.headBackground, color: this.color} : {display: 'none'}}>
          <div class="hc-header__buttons">
            {
              leftButtons ? leftButtons.map((item, index) => (
                <p class="hc-header__buttons_item" key={index} style={{ color: item.color }} onClick={this.buttonClick.bind(this, item)}>
                  <hc-icon size={28} name={item.icon}></hc-icon>
                  <span>{item.label}</span>
                </p>
              )): <span></span>
            }
          </div>
          <h1 class="hc-header__title">{this.titles}</h1>
          <div class="hc-header__buttons">
            {
              rightButtons ? rightButtons.map((item, index) => (
                <p class="hc-header__buttons_item" key={index} style={{ color: item.color }}>
                  <hc-icon size={28} name={item.icon}></hc-icon>
                  <span>{item.label}</span>
                </p>
              )): <span></span>
            }
          </div>
        </div>
        <section>
          <slot></slot>
        </section>
        <slot name="footer"></slot>
      </Host>
    );
  }

}
