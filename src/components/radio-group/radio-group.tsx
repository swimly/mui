import { Component, Host, h, Element, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'hc-radio-group',
  styleUrl: 'radio-group.scss',
  shadow: true
})
export class RadioGroup {
  @Element() el: HTMLElement;
  @Prop() value: string;
  @Prop() name: string;
  $slot
  @Event() vichange: EventEmitter
  componentDidLoad() {
    this.$slot = this.el.shadowRoot.querySelector('slot');
    const children = this.$slot.assignedElements()
    this.vichange.emit(this.value)
    // 初始化选中
    children.forEach(item => {
      if (item.value == this.value) {
        item.checked = true
      }
      item.addEventListener('vchange', e => {
        children.forEach(radio => {
          if (radio.value == e.detail.value) {
            radio.checked = true
            this.vichange.emit(e.detail.value)
          } else {
            radio.checked = false
          }
        })
      })
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
