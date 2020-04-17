import { Component, Host, h, Prop, Element, Method, Watch } from '@stencil/core';
import { CssClassMap } from '../../utils/interfaces.js';
import Hammer from 'hammerjs'
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
  @Prop() current: number = 0;
  @Prop() width: number;
  @Prop() height: number;
  @Element() el: HTMLElement;
  children: Element[];
  urlArray: string[] = [];
  size: number = 0;
  pos;
  offset: number = 0;
  y: number = 0;
  scale: number = 1;
  hide: boolean = false;
  hammer;
  $pop: HTMLElement;
  $wrap: HTMLElement;
  $preview: HTMLElement;
  $mask: HTMLElement;
  $active: HTMLElement;
  $indicate: HTMLElement;
  componentWillLoad () {
    if (!this.width) {
      this.width = document.body.offsetWidth
    }
    if (!this.height) {
      this.height = document.querySelector('hc-page').offsetHeight
    }
  }
  componentDidLoad() {
    this.renderLayout()
    this.computedUrl()
  }
  @Watch('visible')
  visibaleHandle (v: boolean) {
    if (v) {
      this.moveMax()
    } else {
      this.moveMin()
    }
  }
  renderLayout() {
    var slot = this.el.shadowRoot.querySelector('slot');
    this.$pop = this.el.shadowRoot.querySelector('.pop')
    this.$wrap = this.$pop.querySelector('.wrap')
    this.$indicate = this.el.shadowRoot.querySelector('.indicate')
    this.$mask = this.el.shadowRoot.querySelector('.mask')
    this.$preview = this.el.shadowRoot.querySelector('.preview')
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
      // 添加点击事件
      item.addEventListener('click', () => {
        this.bindClick(item, index)
      })
    })
  }
  bindClick (item, index) {
    this.hide = false;
    this.pos = item.getBoundingClientRect()
    this.current = index
    this.offset = - index * this.width;
    // 渲染第一张
    this.$preview.setAttribute('src', this.urlArray[this.current])
    this.$preview.style.zIndex = `101`
    this.$preview.style.objectFit = 'contain'
    this.visible = !this.visible
    this.moveMin()
    this.renderSwiper()
  }
  moveMax () {
    // 改变外层
    setTimeout(() => {
      this.$preview.style.width = `${this.width}px`
      this.$preview.style.height = `${this.height}px`
      this.$preview.style.top = `0px`
      this.$preview.style.left = '0px'
    }, 30)
  }
  moveMin () {
    this.$preview.style.width = `${this.pos.width}px`
    this.$preview.style.height = `${this.pos.height}px`
    this.$preview.style.left = `${this.pos.x}px`
    this.$preview.style.top = `${this.pos.y}px`
  }
  renderSwiper () {
    this.$wrap.style.width = `${this.width * this.urlArray.length}px`
    this.$wrap.style.transform = `translateX(${-this.width * this.current}px)`
    this.urlArray.forEach((item) => {
      var image = document.createElement('img')
      var items = document.createElement('div')
      items.classList.add('item')
      image.src = item
      items.style.width = `${this.width}px`
      items.style.height = `${this.height}px`
      image.style.objectFit = 'contain'
      items.appendChild(image)
      this.$wrap.appendChild(items)
      var indicate = document.createElement('span')
      this.$indicate.appendChild(indicate)
    })
    setTimeout(() => {
      this.$pop.style.zIndex = `102`
      this.$preview.style.display = 'none'
      if (!this.hammer) {
        this.bindTouch()
      }
    }, 300)
  }
  bindTouch () {
    this.$active = this.$wrap.querySelectorAll('.item')[this.current].querySelector('img')
    this.hammer = new Hammer(this.el);
    this.hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL })
    this.hammer.on('panstart', () => {
      this.$wrap.style.transition = '0s'
    })
    this.hammer.on('pan', (e) => {
      this.$wrap.style.transform = `translateX(${this.offset + e.deltaX}px)`;
    })
    this.hammer.on('pandown', (e) => {
      this.scale = (this.height / 2 - e.deltaY) / (this.height / 2)
      this.$active.style.width = `${this.width * this.scale}px`
      this.$active.style.height = `${this.height * this.scale}px`
      this.$active.style.top = `${e.deltaY * 2}px`
      this.$active.style.left = `${(1-this.scale) * this.width / 2}px`
      this.$mask.style.transition = '0s'
      this.$mask.style.opacity = `${this.scale}`
      if (e.deltaY > 20) {
        this.hide = true
      }
    })
    this.hammer.on('panend', (e) => {
      // 左右滑动
      if (!this.hide) {
        if (e.deltaX > 100) {
          this.current = this.current <= 0 ? 0 : this.current - 1;
        }
        if (e.deltaX < -100) {
          this.current = this.current < this.urlArray.length - 1 ? this.current + 1 : this.urlArray.length - 1;
        }
        this.$active = this.$wrap.querySelectorAll('.item')[this.current].querySelector('img')
        this.$wrap.style.transition = '0.3s';
        this.offset = - this.width * this.current
        this.$wrap.style.transform = `translateX(${this.offset}px)`
      }
      // 向下滑动
      console.log(this.current, this.offset)
      if (this.hide) {
        this.moveHide(e)
      }
    })
  }
  moveHide (e) {
    if (this.scale > 0.5) {
      this.$active.style.transition = '0.3s'
      this.$mask.style.transition = '0.3s'
      this.$mask.style.opacity = `1`
      this.$active.style.width = `100%`;
      this.$active.style.height = `100%`;
      this.$active.style.top = `0px`;
      this.$active.style.left = `0px`;
      setTimeout(() => {
        this.$active.style.transition = '0s'
      }, 300)
    } else {
      var pos = this.children[this.current].getBoundingClientRect()
      this.$preview.setAttribute('src', this.urlArray[this.current])
      this.$preview.style.display = 'block'
      this.$preview.style.width = `${this.width * this.scale}px`
      this.$preview.style.height = `${this.height * this.scale}px`
      this.$preview.style.top = `${e.deltaY * 2}px`
      this.$preview.style.left = `${(1-this.scale) * this.width / 2}px`
      this.$wrap.style.display = 'none'
      this.$preview.style.transition = 'width top left 0.3s'
      this.$preview.style.height = `${pos.height}px`
        this.$preview.style.objectFit = 'cover'
      setTimeout(() => {
        this.$preview.style.top = `${pos.y}px`;
        this.$preview.style.left = `${pos.x}px`;
        this.$preview.style.width = `${pos.width}px`
        this.$mask.style.opacity = `0`
      }, 30)
      setTimeout(() => {
        // 重置所有样式
        this.$pop.style.display = 'none'
        this.visible = false
        this.$wrap.innerHTML = ''
        this.$wrap.removeAttribute('style')
        this.$pop.removeAttribute('style')
        this.$mask.removeAttribute('style')
        this.$preview.removeAttribute('style')
        this.$preview.removeAttribute('src')
      }, 300)
    }
  }
  computedUrl () {
    if (this.data) {
      this.urlArray = this.data
    } else {
      this.children.forEach((item) => {
        this.urlArray.push(item.getAttribute('src'))
      })
    }
  }
  private getCssClassMap(): CssClassMap {
    return {
      'mask': true,
      'show': this.visible
    }
  }
  render() {
    this.children = Array.from(this.el.children)
    return (
      <Host>
        <div class={this.getCssClassMap()}></div>
        <slot></slot>
        <img src="" alt="" class="preview"/>
        <div class="pop">
          <div class="wrap"></div>
          <div class="indicate"></div>
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
