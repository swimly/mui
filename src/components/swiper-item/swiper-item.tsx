import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hc-swiper-item',
  styleUrl: 'swiper-item.scss',
  shadow: true
})
export class SwiperItem {
  @Prop() width: number;
  @Prop() height: number;
  render() {
    return (
      <Host style={{width: `${this.width}px`, height: `${this.height}px`}}>
        <slot></slot>
      </Host>
    );
  }

}
