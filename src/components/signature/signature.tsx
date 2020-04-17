import { Component, Host, h, Element, Prop } from '@stencil/core';
import SignaturePad from '../../utils/signature'
@Component({
  tag: 'hc-signature',
  styleUrl: 'signature.css',
  shadow: true
})
export class Signature {
  signature
  $signature
  @Prop() backgroundColor: string = '#eee';
  @Prop() penColor: string = '#333';
  @Element() el: HTMLElement;
  componentDidLoad () {
    this.$signature = this.el.shadowRoot.querySelector('#canvas') as HTMLElement;
    this.$signature.setAttribute('width', `${this.el.shadowRoot.querySelector('.hc-signature').clientWidth}px`)
    this.signature = new SignaturePad(this.$signature, {
      backgroundColor: this.backgroundColor,
      penColor: this.penColor,
      velocityFilterWeight: .7,
      minWidth: 0.5,
      maxWidth: 2.5,
      throttle: 16, // max x milli seconds on event update, OBS! this introduces lag for event update
      minPointDistance: 3
    })
  }
  render() {
    return (
      <Host>
        <slot>
          <div class="hc-signature">
            <canvas id="canvas"></canvas>
          </div>
        </slot>
      </Host>
    );
  }

}
