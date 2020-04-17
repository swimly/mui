import { Component, Host, h, Prop, Element, Method } from '@stencil/core';
import { colorRgba } from '../../utils/utils';

@Component({
  tag: 'hc-tag',
  styleUrl: 'tag.scss',
  shadow: true
})
export class Tag {
  @Prop() type: string;
  @Prop() shape: string;
  @Prop() color: string;
  @Element() el: HTMLElement;
  componentDidLoad() {
    this.renderCss()
  }
  @Method()
  async renderCss() {
    const { el, color, shape } = this
    let style
    if (color) {
      if (shape == 'plain') {
        style = `background-color:${colorRgba(color, 0.1)};color:${color};border:1px solid ${color}`;
      } else if (shape == 'outline') {
        style = `background-color:#fff;color:${color};border:1px solid ${color}`;
      } else if (shape == 'light') {
        style = `color:${color}`
      } else {
        style = `background-color:${colorRgba(color, 1)};color:#fff;border:1px solid ${color}`;
      }
    }
    el.setAttribute('style', style)
  }
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
