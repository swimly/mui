import { Component, Host, h, Prop, Element, Event, Method, EventEmitter } from '@stencil/core';
import { CssClassMap } from '../../utils/interfaces';

@Component({
  tag: 'hc-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {
  /**
   * 按钮类型
   */
  @Prop()
  type: 'primary' | 'danger' | 'default' = 'default';
  /**
   * 按钮形状
   */
  @Prop() shape: 'default' | 'conner' | 'rounder' = 'default'
/**
 * 自定义按钮颜色
 */
  @Prop() color: string = ''
  renderClassName () {
    return `hc-button`
  }
  /**
   * 按钮类型
   */
  @Prop() icon: string;
  @Prop() disabled: boolean = false;
  // @Prop() onclick: Function;
  @Element() el:HTMLElement;
  @Event() vclick: EventEmitter;
  componentDidLoad () {
    // console.log(this.onclick())
    if (!this.disabled) {
      this.el.addEventListener('click', (e) => {
        this.el.setAttribute('active', 'true')
        this.vclick.emit(e)
        setTimeout(() => {
          this.el.removeAttribute('active')
        }, 200)
      })
    }
    if (this.color) {
      this.el.style.backgroundColor = this.color
    }
  }
  @Method()
  async loading () {
    const loading = this.el.shadowRoot.querySelector('#loading') as HTMLElement;
    this.el.setAttribute('disabled', 'true')
    loading.setAttribute('spin', 'true')
    loading.style.display = 'inline-flex'
  }
  @Method()
  async finishloading () {
    const loading = this.el.shadowRoot.querySelector('#loading') as HTMLElement;
    this.el.removeAttribute('disabled')
    loading.removeAttribute('spin')
    loading.style.display = 'none'
  }
  render() {
    const classMap = this.getCssClassMap()
    return (
      <Host class={classMap}>
        <hc-icon name="loading" id="loading" style={{display:'none'}}></hc-icon>
        {this.icon ? <hc-icon name={this.icon}></hc-icon> : <span></span>}
        <span class="hc-button__label">
          <slot></slot>
        </span>
      </Host>
    );
  }
  private getCssClassMap(): CssClassMap {
    return {
      'hc-button': true,
      [this.type]: true,
      [this.shape]: true
    }
  }
}
