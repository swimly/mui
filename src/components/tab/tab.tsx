import { Component, Host, h, Prop, Element } from '@stencil/core';
import { CssClassMap } from '../../utils/interfaces';

@Component({
  tag: 'hc-tab',
  styleUrl: 'tab.scss',
  shadow: true
})
export class Tab {
  @Prop() data: string;
  @Prop() current: number = 0;
  @Prop() indicateWidth: number = 10;
  @Prop() align: string = 'flex-start';
  @Prop() showMore: boolean = false;
  @Prop() show: boolean = false;
  @Element() el:HTMLElement;
  $items;
  $indicate;
  $more;
  $wrap;
  width;
  offset = 0;
  diff;
  componentDidLoad () {
    this.$items= this.el.shadowRoot.querySelectorAll('.tab-item');
    this.$indicate = this.el.shadowRoot.querySelector('.indicate') as HTMLElement;
    this.$more = this.el.shadowRoot.querySelector('.more') as HTMLElement;
    this.$wrap = this.el.shadowRoot.querySelector('.tab-wrap')
    this.width = this.el.clientWidth;
    this.diff = this.el.offsetLeft;
    this.renderIndicate()
  }
  private tabItemCssMap(index): CssClassMap {
    return {
      'tab-item': true,
      'active': index == this.current
    }
  }
  private moreItemCssMap(index): CssClassMap {
    return {
      'item': true,
      'active': index == this.current
    }
  }
  private moreCssMap(): CssClassMap {
    return {
      'more': true,
      'show': this.show
    }
  }
  renderWrap () {
    var item = this.$items[this.current]
    var last = this.$items[this.$items.length - 1]
    var lastleft = last.offsetLeft
    var itemleft = item.offsetLeft
    var max = lastleft - this.width + last.offsetWidth
    // 如果点击的是屏幕右侧的item
    if (item.offsetLeft > this.width / 2) {
      this.offset = itemleft - this.width / 2 + item.offsetWidth / 2
      // 当前点击的下一个item
      var next = this.current < this.$items.length - 1 ? this.$items[this.current + 1] : this.$items[this.$items.length - 1]
      // 如果当前点击的左距离加上下一个的宽度超过了允许滚动的最大值
      if (this.offset + next.offsetWidth >= max) {
        var more = this.showMore ? this.$more.offsetWidth : 0
        this.offset = max + more
      }
    } else {
      // 这时候应该归零
      this.offset = 0
    }
    this.$wrap.style.transition = '0.3s'
    this.$wrap.style.transform = `translateX(-${this.offset}px)`
  }
  renderIndicate () {
    var current = this.current;
    var left = this.$items[current].offsetLeft;
    console.log(left)
    var width = this.$items[current].offsetWidth;
    this.$indicate.style.left = `${left+(width - this.indicateWidth)/2-this.diff}px`
  }
  itemClick (index) {
    this.current = index
    this.render()
    this.renderWrap()
    this.renderIndicate()
  }
  onToggle () {
    this.show = !this.show
  }
  render() {
    const data = eval(`(${this.data})`)
    return (
      <Host>
        <div class="tab">
          <div class="tab-wrap" style={{justifyContent: this.align}}>
            {
              data.map((item, index) => {
                return (
                  <span onClick={this.itemClick.bind(this, index)} key={index} class={this.tabItemCssMap(index)}>
                    {item.label}
                  </span>
                )
              })
            }
            <span class="indicate" style={{width: `${this.indicateWidth}px`}}></span>
          </div>
        </div>
        {
          (() => {
            if (this.showMore) {
              return (
                <div class={this.moreCssMap()} onClick={this.onToggle.bind(this)}>
                  <slot>
                    <hc-icon name="Rightbutton-fill" size={26} color="#8c8c8c"></hc-icon>
                  </slot>
                  <ul class="more-content">
                    {
                      data.map((item, index) => {
                        return (
                          <li>
                            <span onClick={this.itemClick.bind(this, index)} class={this.moreItemCssMap(index)}>{item.label}</span>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            }
          })()
        }
      </Host>
    );
  }

}
