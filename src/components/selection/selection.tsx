import { Component, Host, h, Element, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'hc-selection',
  styleUrl: 'selection.scss',
  shadow: true
})
export class Selection {
  @Element() el:HTMLElement
  @Prop() titles: string = '请选择'
  @Prop() visible: boolean = false
  @Prop() round: boolean = true
  @Prop() data: string;
  dataArr;
  componentDidLoad () {
  }
  @Watch('data')
  dataHandle (value: string) {
    this.dataArr = eval(`(${value})`)
    console.log(this.dataArr)
  }
  render() {
    return (
      <Host>
      </Host>
    );
  }
}
