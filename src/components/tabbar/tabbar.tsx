import { Component, Host, h, Prop, Element, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'hc-tabbar',
  styleUrl: 'tabbar.scss',
  shadow: true
})
export class Tabbar {
  @Prop() direction: string = 'row';
  @Prop() current: string;
  @Prop() iconSize: number = 28;
  @Prop() defaultColor: string = '#8c8c8c'
  @Prop() activeColor: string = '#2873D6'
  @Prop() isDot: boolean = false;
  @Element() el:HTMLElement;
  @Event() vchange: EventEmitter;
  componentDidLoad () {
    var slots = this.el.shadowRoot.querySelector('slot')
    var children = slots.assignedElements()
    children.forEach((child, index) => {
      if (!child.getAttribute('index')) {
        child.setAttribute('index', `${index}`)
      }
      if (child.getAttribute('index') == this.current) {
        child.setAttribute('active', `true`)
      }
      if (!child.getAttribute('icon-size')) {
        child.setAttribute('icon-size', `${this.iconSize}`)
      }
      child.setAttribute('default-color', this.defaultColor)
      child.setAttribute('active-color', this.activeColor)
      child.setAttribute('is-dot', `${this.isDot}`)
      // 监听点击
      child.addEventListener('vclick', (e) => {
        this.current = (e as CustomEvent).detail.index
        this.vchange.emit({
          index: this.current
        })
        children.forEach(item => {
          if (item.getAttribute('index') == this.current) {
            item.setAttribute('active', `true`)
          } else {
            item.removeAttribute('active')
          }
        })
      })
    })
  }
  render() {
    return (
      <Host style={{flexDirection: this.direction, justifyContent: this.direction == 'row' ? 'space-around' : 'flex-start'}}>
        <slot></slot>
      </Host>
    );
  }

}
