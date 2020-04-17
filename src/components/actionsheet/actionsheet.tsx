import { Component, Host, h, Prop, Watch, Element, Method, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'hc-actionsheet',
  styleUrl: 'actionsheet.scss',
  shadow: true
})
export class Actionsheet {
  @Prop() content: string;
  @Prop() current: string;
  @Prop() titles: string;
  @Prop() buttons: string = `['取消']`;
  @Element() el:HTMLElement
  @Event() vclick: EventEmitter;
  @Event() vchange: EventEmitter;
  $button;
  componentDidLoad () {
    this.$button = this.el.shadowRoot.querySelectorAll('.button')
    this.$button.forEach(button => {
      button.addEventListener('click', () => {
        this.vclick.emit({
          type: button.innerHTML,
          value: this.current
        })
      })
    })
  }
  bindClick (item) {
    this.current = item
  }
  @Watch('current')
  currentHandle (value: string) {
    const arr = eval(`(${this.content})`)
    const index = arr.indexOf(value)
    const $items = this.el.shadowRoot.querySelectorAll('.item')
    $items.forEach(item => {
      item.classList.remove('active')
    })
    $items[index].classList.add('active')
    this.vchange.emit(value)
  }
  render() {
    const arr = eval(`(${this.content})`)
    const footer = eval(`(${this.buttons})`)
    console.log(arr)
    return (
      <Host>
        <h2 class="title">{this.titles}</h2>
        <div class="content">
          {
            arr.map(item => {
              return <p onClick={this.bindClick.bind(this, item)} class="item">
                <hc-icon name="arrow-right"></hc-icon>
                <span>{item}</span>
              </p>
            })
          }
        </div>
        <div class="footer">
          {
            footer.map(item => {
              return <p class="button">{item}</p>
            })
          }
        </div>
      </Host>
    );
  }
  @Method()
  async init(option) {
    const actionsheet = document.createElement('hc-actionsheet')
    const drawer = document.createElement('hc-drawer')
    drawer.setAttribute('direction', 'btt')
    drawer.setAttribute('round', 'true')
    Object.keys(option).forEach(key => {
      actionsheet.setAttribute(key, option[key])
    })
    actionsheet.setAttribute('service', 'true')
    drawer.setAttribute('role', 'actionsheet')
    drawer.appendChild(actionsheet)
    document.body.appendChild(drawer)
    actionsheet.addEventListener('vclick', () => {
      drawer.destory()
    })
    actionsheet.addEventListener('vchange', () => {
      if (eval(`(${option.buttons})`).length < 2) {
        drawer.destory()
      }
    })
    setTimeout(() => {
      drawer.init()
    }, 30)
    return actionsheet
  }
}
