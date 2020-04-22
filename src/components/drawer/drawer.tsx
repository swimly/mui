import { Component, Host, h, Prop, Watch, Element, Method } from '@stencil/core';

@Component({
  tag: 'hc-drawer',
  styleUrl: 'drawer.scss',
  shadow: true
})
export class Drawer {
  @Prop() direction: string = 'btt';
  @Prop() visible: boolean = false;
  @Prop() transparent: boolean = false;
  @Prop() maskClosable:boolean = true;
  @Prop() mask:boolean = true;
  @Prop() round: boolean = false;
  @Prop() padding: number;
  @Prop() full: boolean = false;
  @Prop() scroller: boolean = true;
  @Element() el: HTMLElement;
  $drawer;
  $mask;
  @Watch('visible')
  visibleHandle (newValue: boolean) {
    if (newValue) {
      this.el.setAttribute('visible', 'true')
    } else {
      this.el.removeAttribute('visible')
    }
  }
  @Watch('direction')
  directionHandle(newValue: string) {
    console.log(newValue, 9999)
    if (newValue) {
      console.log(newValue)
      this.el.setAttribute('direction', newValue)
    }
  }
  @Method()
  async init() {
    setTimeout(() => {
      this.$drawer.style.transition = '0.3s'
      this.visible = true
    }, 50)
  }
  @Method()
  async destory() {
    this.visible = false
    setTimeout(() => {
      this.$drawer.style.transition = '0s'
    }, 300)
  }
  @Watch('round')
  roundHandle (value: boolean) {
    if (value) {
      this.el.setAttribute('round', `${value}`)
    } else {
      this.el.removeAttribute('round')
    }
  }
  componentDidLoad () {
    this.$drawer = this.el.shadowRoot.querySelector('.hc-drawer') as HTMLElement;
    this.$mask = this.el.shadowRoot.querySelector('.hc-mask') as HTMLElement;
    if (this.maskClosable && this.mask) {
      this.$mask.addEventListener('click', () => {
        this.destory()
      })
    }
  }
  render() {
    console.log(this.scroller)
    return (
      <Host>
        {
          this.mask ? <div class="hc-mask"></div> : <span></span>
        }
        <div class="hc-drawer" style={this.full ? {width: `100%`, height: `100%`} : {}}>
          <div class="hc-drawer__content" style={{padding: `${this.padding}px`, height: this.scroller ? 'auto' : '100%'}}>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }

}
