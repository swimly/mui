import { Component, Host, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'hc-list',
  styleUrl: 'list.scss',
  shadow: true
})
export class List {
  @Element() el: HTMLElement
  @Prop() type: string;
  @Prop() ellipsis: string = `2`;
  @Prop() prefixSize: string;
  @Prop() vertical: string;
  @Prop() filter: string;
  componentDidLoad () {
    var slots = this.el.shadowRoot.querySelector('slot')
    var children = slots.assignedElements()
    children.forEach((child, index) => {
      child.setAttribute('type', this.type)
      child.setAttribute('keys', `${index + 1}`)
      child.setAttribute('prefix-size', this.prefixSize)
      child.setAttribute('ellipsis', `${this.ellipsis}`)
      child.setAttribute('vertical', this.vertical)
      child.setAttribute('filter', this.filter)
    })
  }
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
