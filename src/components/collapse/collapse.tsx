import { Component, Host, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'hc-collapse',
  styleUrl: 'collapse.scss',
  shadow: true
})
export class Collapse {
  @Prop() open;
  @Prop() accordion: boolean = false;
  @Element() el:HTMLElement;
  componentDidLoad () {
    var open = this.open ? this.open.split(',') : []
    var slots = this.el.shadowRoot.querySelector('slot')
    var children = slots.assignedElements()
    children.forEach((item, index) => {
      if (!(item as HTMLElement).getAttribute('name')) {
        item.setAttribute('name', `${index}`)
      }
      if (open.indexOf((item as HTMLElement).getAttribute('name')) >= 0) {
        (item as HTMLElement).setAttribute('open', `true`)
      }
      item.addEventListener('vchange', (e) => {
        var detail = (e as CustomEvent).detail
        var i = open.indexOf(detail.name)
        if (i >= 0) {
          open.splice(i, 1)
        } else {
          if (this.accordion) {
            open = [detail.name]
          } else {
            open.push(detail.name)
          }
        }
        this.open = open.join(',')
        children.forEach((son) => {
          if (open.indexOf((son as HTMLElement).getAttribute('name')) >= 0) {
            (son as HTMLElement).setAttribute('open', `true`)
          } else {
            (son as HTMLElement).removeAttribute('open')
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
