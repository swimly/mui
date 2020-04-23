import { Component, Host, h, Prop } from '@stencil/core';
@Component({
  tag: 'hc-link',
  styleUrl: 'link.scss',
  shadow: true
})
export class Link {
  @Prop() to: string;
  @Prop() component: string;
  @Prop() titles: string;
  bindClick () {
    window.location.hash = this.to;
    var iframe = document.createElement('iframe')
    iframe.style.width = `100%`;
    iframe.style.height = `100%`;
    iframe.style.border = `none`;
    iframe.src = this.component
    var mask = document.createElement('hc-mask')
    mask.setAttribute('background', 'rgba(0,0,0,0)')
    document.body.appendChild(mask)
    var loading = document.createElement('hc-notify')
    loading.setAttribute('text', '加载中')
    loading.setAttribute('icon', 'loading')
    loading.setAttribute('icon-size', '28')
    loading.setAttribute('visible', 'true')
    loading.setAttribute('spin', 'true')
    document.body.appendChild(loading)
    var drawer = document.createElement('hc-drawer')
    drawer.setAttribute('direction', 'rtl')
    drawer.setAttribute('full', 'true')
    drawer.setAttribute('mask', 'false')
    drawer.setAttribute('scroller', 'false')
    drawer.appendChild(iframe)
    document.body.appendChild(drawer)
    iframe.onload = () => {
      iframe.contentDocument.querySelector('html').style.height = `100%`
      iframe.contentDocument.body.style.height = `100%`;
      iframe.contentDocument.body.style.margin = `0`;
      document.body.removeChild(document.querySelector('hc-mask'))
      document.body.removeChild(document.querySelector('hc-notify'))
      setTimeout(() => {
        drawer.init()
      }, 30)
    }
  }
  render() {
    return (
      <Host onClick={this.bindClick.bind(this)}>
        <slot></slot>
      </Host>
    );
  }

}
