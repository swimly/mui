import { Component, Host, h, Prop, Element, Method } from '@stencil/core';
import { colorRgba } from '../../utils/utils';

@Component({
  tag: 'hc-badge',
  styleUrl: 'badge.scss',
  shadow: true
})
export class Badge {
  @Prop() type: string;
  @Prop() shape: string;
  @Prop() color: string;
  @Element() el:HTMLElement;
  componentDidLoad () {
    this.renderCss()
  }
  @Method()
  async renderCss () {
    let {color, shape} = this
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
    this.el.setAttribute('style', style)
  }
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
