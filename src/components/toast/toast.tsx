import { Component, Host, h, Prop, Method, Watch, Element } from '@stencil/core';

@Component({
  tag: 'hc-toast',
  styleUrl: 'toast.scss',
  shadow: true
})
export class Toast {
  @Prop() visible: boolean = false;
  @Prop() text: string = '提交成功！';
  @Prop() duration: number = 3000;
  @Prop() position: string = 'center';
  @Prop() background: string = 'rgba(0,0,0,0.8)'
  /** (optional) The toast to display */
  // Toast显示
  @Element() el: HTMLElement;
  /** (optional) 初始化toast */
  @Method()
  async showToast () {
    setTimeout(() => {
      this.visible = true
      this.el.style.transition = '0.3s'
    }, 50)
    setTimeout(() => {
      this.destoryToast()
    }, this.duration)
  }
  /** (optional) 销毁toast */
  @Method()
  async destoryToast () {
    this.visible = false
    // 如果是以指令的形式调用，需要销毁dom
    var toasts = document.querySelectorAll('hc-toast')
    setTimeout(() => {
      toasts.forEach(toast => {
        if (toast.getAttribute('service')) {
          document.body.removeChild(toast)
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
  componentDidLoad () {
  }
  render() {
    return (
      <Host style={{backgroundColor: this.background}}>
        {this.text}
      </Host>
    );
  }
  /**
   * 已服务的形式调用
   */
  // @Method()
  // async init(option) {
  //   const exist = document.querySelector('hc-toast')
  //   const toast = exist ? exist : document.createElement('hc-toast')
  //   Object.keys(option).forEach(key => {
  //     toast.setAttribute(key, option[key])
  //   })
  //   toast.setAttribute('service', 'true')
  //   document.body.appendChild(toast)
  //   toast.showToast()
  //   return toast
  // }
}
