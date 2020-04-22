import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'hc-panel',
  styleUrl: 'panel.scss',
  shadow: true
})
export class Panel {
  @Prop() titles: string;
  @Prop() desc: string;
  @Prop() status: string = `[]`;
  @Element() el:HTMLElement;
  componentDidLoad () {
    if (!this.titles) {
      this.el.shadowRoot.removeChild(this.el.shadowRoot.querySelector('.head'))
    }
  }
  render() {
    var status = eval(`(${this.status})`)
    return (
      <Host>
        <div class="head">
          <hc-row>
            <hc-col flex={1} align="left" class="title">{this.titles}</hc-col>
            <hc-col span={8} align="right">
              {
                status.map((item) => {
                  return (
                    <a class="btn" href="#" style={{color: item.color}}>
                      <span>{item.label}</span>
                      <hc-icon name={item.icon}></hc-icon>
                    </a>
                  )
                })
              }
            </hc-col>
          </hc-row>
          <p class="desc">{this.desc}</p>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
