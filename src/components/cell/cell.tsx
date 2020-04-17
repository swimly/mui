import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hc-cell',
  styleUrl: 'cell.scss',
  shadow: true
})
export class Cell {
  @Prop() label: string;
  @Prop() value: string;
  @Prop() subject: string;
  @Prop() iconUrl: string;
  @Prop() iconSize: number = 42;
  @Prop() middle: boolean = false;
  @Prop() arrowDirection: string;
  render() {
    return (
      <Host>
        {(() => {
          if (this.iconUrl) {
            return (
              <hc-image style={{marginRight: `0.5rem`}} width={this.iconSize} height={this.iconSize} src={this.iconUrl}></hc-image>
            )
          }
        })()}
        <div class="label">
          <h2>{this.label}</h2>
          <p>{this.subject}</p>
        </div>
        <div class="value"><slot>{this.value}</slot></div>
        {
          (() => {
            if (this.arrowDirection) {
              return (
                <hc-icon name={`arrow-${this.arrowDirection}`}></hc-icon>
              )
            }
          })()
        }
      </Host>
    );
  }

}
