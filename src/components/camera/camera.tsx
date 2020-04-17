import { Component, Host, h, Element } from '@stencil/core';

@Component({
  tag: 'hc-camera',
  styleUrl: 'camera.css',
  shadow: true
})
export class Camera {
  @Element() el: HTMLElement;
  componentDidLoad() {
  }
  render() {
    return (
      <Host>
        <slot>
          <video id="video" width="640" height="480" autoplay></video>
          <button id="snap">Snap Photo</button>
          <canvas id="canvas" width="640" height="480"></canvas>
        </slot>
      </Host>
    );
  }

}
