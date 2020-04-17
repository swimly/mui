import { Component, Host, h, Prop, Element, Watch, EventEmitter, Event } from '@stencil/core';
import { CssClassMap } from '../../utils/interfaces';

@Component({
  tag: 'hc-collapse-item',
  styleUrl: 'collapse-item.scss',
  shadow: true
})
export class CollapseItem {
  @Prop() titles: string;
  @Prop() name: string;
  @Prop() open: boolean = false;
  @Prop() arrow: string = 'arrow-right'
  @Element() el:HTMLElement;
  @Event() vchange: EventEmitter
  timer;
  $content;
  $item;
  height: number;
  @Watch('open')
  openHandle (v) {
    this.$content.style.transition = '0.3s';
    if (v) {
      this.$content.style.maxHeight = `${this.height}px`
    } else {
      this.$content.style.maxHeight = `${0}px`
    }
  }
  componentDidLoad () {
    this.height = this.el.shadowRoot.querySelector('.content').getBoundingClientRect().height
    this.$item = this.el.shadowRoot.querySelector('.item') as HTMLElement;
    this.$content = this.el.shadowRoot.querySelector('.content') as HTMLElement;
    if (!this.open) {
      this.$content.style.maxHeight = `0px`;
    } else {
      this.$content.style.maxHeight = `${this.height}px`
    }
  }
  bindClick () {
    this.open = !this.open
    this.vchange.emit({
      name: this.name,
      open: this.open
    })
  }
  private getCssClassMap(): CssClassMap {
    return {
      'item': true,
      'active': this.open
    }
  }
  render() {
    return (
      <Host>
        <div class={this.getCssClassMap()}>
          <div class="handle" onClick={this.bindClick.bind(this)}>
            <h2 class="title">
              <span class="label">
                <slot name="title">{this.titles}</slot>
              </span>
              <span class="indicate">
                <slot name="indicate">
                  <hc-icon name={this.arrow}></hc-icon>
                </slot>
              </span>
            </h2>
          </div>
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }

}
