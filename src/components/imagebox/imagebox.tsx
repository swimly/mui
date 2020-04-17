import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hc-imagebox',
  styleUrl: 'imagebox.scss',
  shadow: true
})
export class Imagebox {
  @Prop() data: object[];
  componentDidLoad () {
    console.log(this.data)
  }
  render() {
    return (
      <Host>
        
      </Host>
    );
  }

}
