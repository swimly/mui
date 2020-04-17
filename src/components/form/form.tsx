import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'hc-form',
  styleUrl: 'form.scss',
  shadow: true
})
export class Form {
  @Prop() labelWidth: string;
  @Prop() labelPosition: string;
  @Element() el: HTMLElement;
  componentDidLoad () {
    const slot = this.el.shadowRoot.querySelector('slot')
    const children = slot.assignedElements()
    children.forEach((child) => {
      child.setAttribute('label-width', this.labelWidth)
      child.setAttribute('label-position', this.labelPosition)
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
