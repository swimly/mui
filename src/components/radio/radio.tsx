import { Component, Host, h, Prop, Element, Event, Watch, EventEmitter } from '@stencil/core';

@Component({
  tag: 'hc-radio',
  styleUrl: 'radio.scss',
  shadow: true
})
export class Radio {
  @Prop() icon: string = 'seleted'
  @Prop() color: string;
  @Prop() value;
  @Prop() shape: string;
  @Prop() type: string;
  @Prop() checked: boolean = false;
  @Prop() name: string;
  @Element() el: HTMLElement;
  $core
  $frame
  $slot
  @Event() vchange: EventEmitter;
  @Watch('checked')
  checkedHandle(newValue: boolean) {
    console.log(newValue, this.el)
    if (newValue) {
      this.$core.checked = true
    } else {
      this.$core.checked = false
    }
  }
  @Watch('name')
  nameHandle (newValue) {
    this.$core.setAttribute('name', newValue)
  }
  componentDidLoad() {
    this.$core = this.el.shadowRoot.querySelector('input') as HTMLElement;
    this.$frame = this.el.shadowRoot.querySelector('.frame') as HTMLElement;
    this.$slot = this.el.shadowRoot.querySelector('slot') as HTMLElement;
    if (this.checked) {
      this.$core.setAttribute('checked', 'true')
    }
    this.$core.addEventListener('change', () => {
      if (this.$core.checked) {
        if (this.type) {
          if (this.type == 'outline') {
            this.$slot.style.color = this.color
            this.$slot.style.borderColor = this.color;
          } else if (this.type = 'fill') {
            this.$slot.style.borderColor = this.color
            this.$slot.style.backgroundColor = this.color;
          }
        } else {
          this.$frame.style.backgroundColor = this.color;
          this.$frame.style.borderColor = this.color;
        }
      } else {
        this.$frame.removeAttribute('style')
        this.$slot.removeAttribute('style')
      }
      this.vchange.emit({
        checked: this.$core.checked,
        value: this.value
      })
    })
  }
  render() {
    return (
      <Host>
        <input type="radio" />
        <span class="frame">
          <hc-icon name={this.icon}></hc-icon>
        </span>
        <slot></slot>
        {this.checked}
      </Host>
    );
  }

}
