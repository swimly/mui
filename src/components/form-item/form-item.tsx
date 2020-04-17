import { Component, Host, h, Prop, Watch, Element } from '@stencil/core';

@Component({
  tag: 'hc-form-item',
  styleUrl: 'form-item.scss',
  shadow: true
})
export class FormItem {
  @Prop() label: string;
  @Prop() value: string;
  @Prop() tip: string;
  @Prop() suffixIcon: string;
  @Prop() prefixIcon: string;
  @Prop() labelWidth: string;
  @Prop() labelPosition: string;
  @Prop() suffixSize: number = 28;
  @Prop() prefixSize: number = 28;
  @Prop() suffixColor: string;
  @Prop() prefixColor: string;
  @Element() el:HTMLElement;
  @Watch('labelWidth')
  labelWidthHandle (value: string) {
    const $label = this.el.shadowRoot.querySelector('.label') as HTMLElement;
    $label.style.width = value
  }
  @Watch('labelPosition')
  labelPositionHandle(value: string) {
    this.el.setAttribute('label-position', value);
  }
  render() {
    return (
      <Host>
        <hc-icon size={this.suffixSize} color={this.suffixColor} class="icon" name={this.prefixIcon}></hc-icon>
        <h2 class="label">
          <slot name="label">{this.label}</slot>
          <slot name="tip">{this.tip}</slot>
        </h2>
        <p class="value">
          <slot>{this.value}</slot>
        </p>
        <hc-icon size={this.suffixSize} color={this.suffixColor} class="icon" name={this.suffixIcon}></hc-icon>
      </Host>
    );
  }

}
