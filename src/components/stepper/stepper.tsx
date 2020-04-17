import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hc-stepper',
  styleUrl: 'stepper.scss',
  shadow: true
})
export class Stepper {
  @Prop() value: number = 0;
  @Prop() min: number = 0;
  @Prop() max: number = 10;
  @Prop() step: number = 1;
  onClick (v) {
    this.value = this.value + v <= this.min ? this.min : this.value + v > this.max ? this.max : this.value + v
    console.log(v, this.value)
  }
  render() {
    return (
      <Host>
        <button class="btn" onClick={this.onClick.bind(this, -this.step)}>
          <hc-icon name="sami-select"></hc-icon>
        </button>
        <input type="text" value={this.value} style={{width: `${this.max.toString().length}em`}}/>
        <button class="btn" onClick={this.onClick.bind(this, this.step)}>
          <hc-icon name="add-select"></hc-icon>
        </button>
      </Host>
    );
  }

}
