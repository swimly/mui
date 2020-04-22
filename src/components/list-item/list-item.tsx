import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hc-list-item',
  styleUrl: 'list-item.scss',
  shadow: true
})
export class ListItem {
  @Prop() keys: string;
  @Prop() titles: string;
  @Prop() date: string;
  @Prop() suffixIcon: string;
  @Prop() prefixUrl: string;
  @Prop() prefixSize: string = '36';
  @Prop() type: string;
  @Prop() iconColor: string = '#2170D9';
  @Prop() ellipsis: string;
  @Prop() vertical: string;
  @Prop() filter: string;
  @Prop() reverse: boolean = false;
  render() {
    var prefixSize = this.prefixSize.split(',')
    if (prefixSize.length == 1) {
      prefixSize.push(prefixSize[0])
    }
    var title = this.titles.replace(this.filter, `<span class="filter">${this.filter}</span>`)
    return (
      <Host style={{alignItems: this.vertical, flexDirection: this.reverse ? 'row-reverse' : 'row'}}>
        <div class="prefix" style={this.reverse ? {marginLeft: '0.4rem'} : {marginRight: '0.4rem'}}>
          <slot name="prefix">
            {
              (() => {
                if (this.type == 'sort') {
                  return (
                    <span class="sort">{this.keys}</span>
                  )
                }
                if (this.prefixUrl) {
                  return (
                    <hc-image width={parseInt(prefixSize[0])} height={parseInt(prefixSize[1])} src={this.prefixUrl}></hc-image>
                  )
                }
              })()
            }
          </slot>
        </div>
        <div class="content">
          <hc-row>
            <hc-col flex={1} align="left">
              <h2 class="title" style={{overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', webkitLineClamp: this.ellipsis, webkitBoxOrient: 'vertical'}} innerHTML={title}></h2>
            </hc-col>
            <hc-col span={this.suffixIcon ? 2 : 0} align="right">
              <span class="suffix">
                <slot name="suffix">
                  <hc-icon color={this.iconColor} size={24} name={this.suffixIcon}></hc-icon>
                </slot>
              </span>
            </hc-col>
          </hc-row>
          <slot>
            <hc-row class="date">
              <hc-col align="left">{this.date}</hc-col>
            </hc-row>
          </slot>
        </div>
      </Host>
    );
  }

}
