import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hc-row',
  styleUrl: 'row.scss',
  shadow: true
})
export class Row {
  @Prop() justify: string = 'flex-start'
  @Prop() align: string = 'flex-start'
  render() {
    return (
      <Host style = {{justifyContent: this.justify, alignItems: this.align}}>
        <slot></slot>
      </Host>
    );
  }

}
