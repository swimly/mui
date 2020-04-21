import { Component, Host, h, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'hc-tabbar-item',
  styleUrl: 'tabbar-item.scss',
  shadow: true
})
export class TabbarItem {
  @Prop() label: string;
  @Prop() defaultIcon: string;
  @Prop() activeIcon: string;
  @Prop() iconSize: number;
  @Prop() index: string;
  @Prop() active: boolean = false;
  @Prop() activeColor: string;
  @Prop() defaultColor: string;
  @Prop() background: string;
  @Prop() shape: string;
  @Prop() badge: number;
  @Prop() isDot: boolean;
  @Event() vclick: EventEmitter;
  bindClick () {
    this.vclick.emit({
      index: this.index
    })
  }
  render() {
    return (
      <Host style={{color: this.active ? this.activeColor : this.defaultColor, backgroundColor: this.background}} onClick={this.bindClick.bind(this)}>
        {
          (() => {
            if (this.badge) {
              return (
                <p class="badge">{this.badge}</p>
              )
            }
          })()
        }
        <div class="icon" style={{width: `${this.iconSize}px`, height: `${this.iconSize}px`}}>
          <hc-image src={this.defaultIcon} width={this.iconSize} height={this.iconSize}></hc-image>
          <hc-image src={this.activeIcon} width={this.iconSize} height={this.iconSize}></hc-image>
        </div>
        <p class="label">{this.label}</p>
      </Host>
    );
  }

}
