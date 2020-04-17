import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hc-row',
  styleUrl: 'row.scss',
  shadow: true
})
export class Row {
  @Prop() justify: string = 'flex-start'
  render() {
    return (
      <Host style = {{justifyContent: this.justify}}>
        <slot></slot>
      </Host>
    );
  }

}
