import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-affix',
  styleUrl: 'affix.scss',
  shadow: true
})
export class Affix {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
