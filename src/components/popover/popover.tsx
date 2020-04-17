import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'hc-popover',
  styleUrl: 'popover.scss',
  shadow: true
})
export class Popover {
  @Prop() pos: object;
  @Element() el: HTMLElement;
  bindClick() {
    this.pos = {}
    console.log(this.el.offsetTop)
    // this.hammer.on('tap', (e) => {
    //   this.pos.ot = this.offsetTop
    //   this.pos.ol = this.offsetLeft
    //   this.pos.ow = this.offsetWidth
    //   this.pos.oh = this.offsetHeight
    //   this.pos.ww = this.$content.clientWidth
    //   this.pos.wh = this.$content.clientHeight
    //   this.pos.st = document.querySelector('hc-page').scrollTop
    //   this.computedPosition()
    // })
  }
  render() {
    return (
      <Host onclick={this.bindClick.bind(this)}>
        <slot></slot>
      </Host>
    );
  }

}
