import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'hc-col',
  styleUrl: 'col.scss',
  shadow: true
})
export class Col {
  @Prop() span: number = 24;
  @Prop() flex: number;
  @Element() el:HTMLElement;
  render() {
    return (
      <Host style={this.flex ? { flex: `${this.flex}` } : { width: `${this.span / 24 * 100}%`}}>
        <slot></slot>
      </Host>
    );
  }

}
