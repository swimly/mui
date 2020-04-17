import { Component, Host, h, Element, Method } from '@stencil/core';

@Component({
  tag: 'hc-progress',
  styleUrl: 'progress.scss',
  shadow: true
})
export class Progress {
  @Element() el:HTMLElement
  @Method()
  async percent (percent: number) {
    var circle = this.el.shadowRoot.querySelectorAll('circle')[1];
    //圆的周长
    var perimeter = Math.PI * 2 * 50;
    //stroke-dasharray属性的两个参数和必须为周长
    circle.setAttribute('stroke-dasharray', perimeter * percent + ' ' + perimeter * (1 - percent));
  }
  render() {
    return (
      <Host>

        <div id="svgContainer">
          <svg width="220" height="220" viewBox="0 0 220 220">
            <circle cx="110" cy="110" r="50" stroke-width="8" stroke="#D1D3D7" fill="none"></circle>
            <circle cx="110" cy="110" r="50" stroke-width="8" stroke="#00A5E0" fill="none" transform="matrix(0,-1,1,0,0,220)" stroke-dasharray="1069 0"></circle>
          </svg>
          <span id="leftTime">10</span>
        </div>
      </Host>
    );
  }

}
