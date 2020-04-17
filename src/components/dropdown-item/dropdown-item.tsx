import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hc-dropdown-item',
  styleUrl: 'dropdown-item.scss',
  shadow: true
})
export class DropdownItem {
  @Prop() label: string;
  @Prop() option;
  @Prop() value;
  render() {
    console.log(this.option)
    var option = typeof this.option == 'string' ? eval(`(${this.option})`) : this.option
    return (
      <Host>
        <div class="head">
          <h2 class="label">{this.label}</h2>
          <hc-icon name="arrow-down"></hc-icon>
        </div>
        <div class="content">
          {
            option.map((item, index) => {
              return (
                <p class="item" id={index}>{item.label}</p>
              )
            })
          }
        </div>
      </Host>
    );
  }

}
