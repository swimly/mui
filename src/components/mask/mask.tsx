import { Component, Host, h, Method, Prop, Element } from '@stencil/core';

@Component({
  tag: 'hc-mask',
  styleUrl: 'mask.scss',
  shadow: true
})
export class Mask {
  @Prop() background: string = 'rgba(0,0,0,0.5)'
  @Prop() source;
  @Prop() maskClosable: boolean = true;
  @Prop() visible: boolean = false;
  @Element() el: HTMLElement;
  componentDidLoad () {
    if (this.background && !this.source) {
      this.el.style.background = this.background
    }
  }
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
  @Method()
  async init(option) {
    const mask = document.createElement('hc-mask')
    var background = option.background ? option.background : 'rgba(0,0,0,0.5)'
    Object.keys(option).forEach(key => {
      mask.setAttribute(key, option[key])
    })
    if (option.dom) {
      option.dom.appendChild(mask)
    } else {
      document.body.appendChild(mask)
    }
    if (option.source) {
      var pos = option.source.getBoundingClientRect()
      var height = document.querySelector('hc-page').clientHeight;
      var scale = Math.round((pos.y + pos.height) / height * 100)
      mask.style.background = `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0) ${scale}%, ${background} ${scale}%, ${background} 100%)`
    }
    if (option.maskClosable) {
      mask.addEventListener('click', () => {
        var dom = option.dom ? option.dom : document.body
        dom.removeChild(mask)
      })
    }
    return mask
  }
}
