import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-tabbar',
  styleUrl: 'tabbar.scss',
  shadow: true
})
export class Tabbar {

  render() {
    return (
      <Host>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="landing-page" exact={true} />
            <stencil-route url="/demos" component="demos-page" />
            <stencil-route url="/other" component="other-page" />
            <stencil-route component="page-not-found" />
          </stencil-route-switch>
        </stencil-router>
      </Host>
    );
  }

}
