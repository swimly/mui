import { Component, Host, h, Element, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'hc-checkbox-group',
  styleUrl: 'checkbox-group.scss',
  shadow: true
})
export class CheckboxGroup {
  @Element() el:HTMLElement;
  @Prop() value;
  $slot
  result;
  @Event() vichange:EventEmitter;
  componentDidLoad () {
    this.$slot = this.el.shadowRoot.querySelector('slot');
    const children = this.$slot.assignedElements();
    this.result = typeof this.value == 'string' ? eval(`(${this.value})`) : this.value
    this.vichange.emit(this.value)
    // 初始化选中
    children.forEach(item => {
      this.result.forEach(value => {
        if (item.value == value) {
          item.checked = true
        }
      })
      item.addEventListener('vchange', (e) => {
        if (e.detail.checked) {
          this.result = [...this.result, e.detail.value]
        } else {
          // 取消当前选中
          let value = this.result
          const index = this.result.indexOf(e.detail.value)
          if (index >= 0) {
            value.splice(index, 1)
            this.result = value;
          }
        }
        this.vichange.emit(this.result)
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
