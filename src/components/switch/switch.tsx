import { Component, Host, h, Prop, Element, Watch } from '@stencil/core';

@Component({
  tag: 'hc-switch',
  styleUrl: 'switch.scss',
  shadow: true
})
export class Switch {
  @Prop() value: boolean;
  @Element() el:HTMLElement;
  @Watch('value')
  valueHandle (value: boolean) {
    this.el.setAttribute('value', `${value}`)
  }
  componentDidLoad () {
    const core = this.el.shadowRoot.querySelector('input');
    core.addEventListener('change', () => {
      this.value = core.checked
    })
  }
  render() {
    return (
      <Host>
        <label>
          <input checked={this.value} class="hc-switch hc-switch-anim" type="checkbox"/>
        </label>
        <slot></slot>
      </Host>
    );
  }

}
