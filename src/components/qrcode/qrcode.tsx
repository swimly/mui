import { Component, Host, h, Element } from '@stencil/core';
@Component({
  tag: 'hc-qrcode',
  styleUrl: 'qrcode.scss',
  shadow: true
})
export class Qrcode {
  @Element() el:HTMLElement;
  componentDidLoad () {
    
  }
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
