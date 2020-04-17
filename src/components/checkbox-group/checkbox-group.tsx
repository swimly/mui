import { Component, Host, h, Element, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'hc-checkbox-group',
  styleUrl: 'checkbox-group.scss',
  shadow: true
})
export class CheckboxGroup {
  @Element() el:HTMLElement;
  @Prop() value: string[];
  $slot
  @Event() vichange:EventEmitter;
  componentDidLoad () {
    this.$slot = this.el.shadowRoot.querySelector('slot');
    const children = this.$slot.assignedElements()
    this.vichange.emit(this.value)
    // 初始化选中
    children.forEach(item => {
      this.value.forEach(value => {
        if (item.value == value) {
          item.checked = true
        }
      })
      item.addEventListener('vchange', (e) => {
        if (e.detail.checked) {
          this.value = [...this.value, e.detail.value]
        } else {
          // 取消当前选中
          let value = this.value
          const index = this.value.indexOf(e.detail.value)
          if (index >= 0) {
            value.splice(index, 1)
            this.value = value;
          }
        }
        this.vichange.emit(this.value)
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
