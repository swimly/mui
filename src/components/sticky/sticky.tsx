import { Component, Host, h, Element, Prop} from '@stencil/core';

@Component({
  tag: 'hc-sticky',
  styleUrl: 'sticky.scss',
  shadow: true
})
export class Sticky {
  @Element() el: HTMLElement;
  /**
   * 设置吸顶距离（组件在吸顶时与顶部的距离）
   */
  @Prop() offset: number = 0;

  componentDidLoad () {
    let wrapper = this.el.shadowRoot.querySelector('.wrapper') as HTMLElement
    let wrapperInner = this.el.shadowRoot.querySelector('.wrapper-inner') as HTMLElement
    let top
    let left
    let right
    setTimeout(() => {
      Array.from(this.el.children).map((child) => {
        top = wrapper.offsetTop
        left = wrapper.offsetLeft
        right = document.body.clientWidth - wrapper.offsetWidth - left
        wrapper.style.height = child.clientHeight + 'px'
        var page = document.querySelector('hc-page')
        page.addEventListener('vscroll', (e) => {
          let scrollTop = (e as CustomEvent).detail.scrollTop
          let offsetTop = (e as CustomEvent).detail.offsetTop
          if (scrollTop >= top - this.offset) {
            wrapperInner.classList.add('fixed')
            wrapperInner.style.top =  `${this.offset + offsetTop}px`
            wrapperInner.style.left =  `${left}px`
            wrapperInner.style.right =  `${right}px`
          } else {
            wrapperInner.classList.remove('fixed')
            wrapperInner.style.top = '0px'
          }
        })
      })
    }, 40)
    
  }

  render() {
    return (
      <Host>
        <div class="wrapper">
          <div class="wrapper-inner">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
