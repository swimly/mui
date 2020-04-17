import { Component, Host, h, Prop, Element, Method } from '@stencil/core';
import { hc_swiper } from '../../../www/build/hc-swiper.entry.js'
import { CssClassMap } from '../../utils/interfaces.js';
const swiper = new hc_swiper({})
@Component({
  tag: 'hc-image-preview',
  styleUrl: 'image-preview.scss',
  shadow: true
})
export class ImagePreview {
  @Prop() column: number = 3;
  @Prop() space: number = 5;
  @Prop() data;
  @Prop() visible: boolean = false;
  @Element() el: HTMLElement;
  children: Element[];
  componentDidLoad() {
    this.renderLayout()
  }
  renderLayout() {
    var slot = this.el.shadowRoot.querySelector('slot');
    var width = this.el.offsetWidth - this.space * (this.column - 1);
    var children = slot.assignedElements()
    children.forEach((item, index) => {
      item.setAttribute('width', `${width / this.column}`)
      item.setAttribute('height', `${width / this.column}`)
      if ((index + 1) % this.column) {
        (item as HTMLElement).style.marginRight = `${this.space}px`
      }
      if ((index + 1) / this.column > 1) {
        (item as HTMLElement).style.marginTop = `${this.space}px`
      }
    })
  }
  renderSwiper (item, index) {
    swiper.init({
      dom: this.el.shadowRoot.querySelector('.pop'),
      data: this.data,
      width: document.body.offsetWidth,
      height: document.querySelector('hc-page').offsetHeight,
      current: index,
      fit: 'contain'
    })
  }
  bindClick (item, index) {
    var pos = (item as HTMLElement).getBoundingClientRect()
    console.log(pos)
    var pop = this.el.shadowRoot.querySelector('.pop') as HTMLElement
    pop.style.top = `${pos.y}px`
    pop.style.left = `${pos.x}px`
    pop.style.width = `${pos.width}px`
    pop.style.height = `${pos.height}px`
    pop.style.transition = '0.3s'
    this.renderSwiper(item, index)
    setTimeout(() => {
      this.visible = true;
    }, 80)
  }
  private getCssClassMap(): CssClassMap {
    return {
      'pop': true,
      'show': this.visible
    }
  }
  render() {
    this.data = []
    this.children = Array.from(this.el.children)
    this.children.forEach((item, index) => {
      item.addEventListener('click', this.bindClick.bind(this, item, index))
      this.data.push(item.getAttribute('src'))
    })
    return (
      <Host>
        <slot></slot>
        <div onClick={() => {this.visible = false}} class={this.getCssClassMap()}>
          
        </div>
      </Host>
    );
  }
  /**
 * 已服务的形式调用
 */
  @Method()
  async init() {
    
  }
}
