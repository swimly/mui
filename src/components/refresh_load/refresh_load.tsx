import { Component, Host, h, Element } from '@stencil/core';
import MeScroll from 'mescroll.js'
@Component({
  tag: 'hc-refresh_load',
  styleUrl: 'refresh_load.scss',
  shadow: true
})
export class Refresh_load {
  @Element() el: HTMLElement;
  componentDidLoad() {
    var mescroll = new MeScroll(this.el.shadowRoot.querySelector('#mescroll'), { //第一个参数"mescroll"对应上面布局结构div的id (1.3.5版本支持传入dom对象)
      down: {
        callback: () => {
          setTimeout(() => {
            mescroll.endSuccess()
          }, 3000)
        } //下拉刷新的回调,别写成downCallback(),多了括号就自动执行方法了
      },
      up: {
        callback: () => {
          setTimeout(() => {
            mescroll.endErr()
          }, 3000)
        }
      }
    });
  }
  render() {
    return (
      <Host>
        <div id="mescroll" class="mescroll">
          <div>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
