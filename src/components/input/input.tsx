import { Component, Host, h, Prop, Element, Watch } from '@stencil/core';
import { CssClassMap } from '../../utils/interfaces';
@Component({
  tag: 'hc-input',
  styleUrl: 'input.scss',
  shadow: true
})
export class Input {
  @Prop() type: string = 'text'
  @Prop() placeholder: string = '请输入'
  @Prop() prefixIcon: string;
  @Prop() suffixIcon: string;
  @Prop() prefixColor: string;
  @Prop() suffixColor: string;
  @Prop() clearable: boolean = false;
  @Prop() maxlength: number;
  @Prop() minlength: number;
  @Prop() error: string;
  @Prop() warning: string;
  @Prop() value: string;
  @Prop() align: string;
  @Element() el: HTMLElement;
  $core;
  $clear;
  onFocusHandle (e) {
    console.log(e)
  }
  clearHandle () {
    this.$core.value = ''
    this.$clear.style.display = 'none'
  }
  @Watch('error')
  errorHandle (value: string) {
    this.el.setAttribute('error', value)
  }
  @Watch('warning')
  warningHandle(value: string) {
    this.el.setAttribute('warning', value)
  }
  componentDidLoad () {
    this.$core = this.el.shadowRoot.querySelector('.hc-input__core') as HTMLElement;
    this.$clear = this.el.shadowRoot.querySelector('#clear') as HTMLElement
    if (this.clearable) {
      this.$core.addEventListener('keyup', (e) => {
        if (e.target.value) {
          this.$clear.style.display = 'flex'
        } else {
          this.$clear.style.display = 'none'
        }
      })
    }
    this.$core.addEventListener('keyup', (e) => {
      const count = this.el.shadowRoot.querySelector('#total') as HTMLElement;
      count.innerHTML = e.target.value.length;
    })
    this.$core.addEventListener('keydown', (e) => {
      const count = this.el.shadowRoot.querySelector('#total') as HTMLElement;
      count.innerHTML = e.target.value.length;
    })
  }
  render() {
    return (
      <Host>
        <div class={this.getCssClassMap()}>
          <div class="hc-input__prefix" style={{color: this.prefixColor, marginRight: this.prefixIcon ? null : '0px'}}>
            <slot name="prefix">
              <hc-icon size={28} name={this.prefixIcon}></hc-icon>
            </slot>
          </div>
          {this.type == 'textarea' ? <textarea value={this.value} maxlength={this.maxlength} minlength={this.minlength} rows={4} class="hc-input__core"></textarea> : <input value={this.value} maxlength={this.maxlength} minlength={this.minlength} onFocus={this.onFocusHandle.bind(this)} placeholder={this.placeholder} class="hc-input__core" type={this.type} />}
          <div class="hc-input__notice">
            {this.maxlength ? <span class="hc-input__count"><span id="total">0</span>/{this.maxlength}</span> : ''}
            {this.clearable ? <hc-icon onClick={this.clearHandle.bind(this)} size={28} class="hc-input__clear" id="clear" name="reeor-fill"></hc-icon> : <span></span>}
          </div>
          <div class="hc-input__suffix" style={{ color: this.suffixColor, marginLeft: this.suffixIcon ? null : '0px'}}>
            <slot name="suffix">
              <hc-icon size={28} name={this.suffixIcon}></hc-icon>
            </slot>
          </div>
        </div>
      </Host>
    );
  }
  private getCssClassMap(): CssClassMap {
    return {
      'hc-input': true,
      [this.type]: true
    }
  }
}
