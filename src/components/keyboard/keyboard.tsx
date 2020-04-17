import { Component, Host, h, Prop, Watch, Element, Event, Method, EventEmitter } from '@stencil/core';
import keyCode from './../../utils/keycode';
@Component({
  tag: 'hc-keyboard',
  styleUrl: 'keyboard.scss',
  shadow: true
})
export class Keyboard {
  @Prop() type: string = 'password'
  @Prop() value: string = '';
  @Prop() vibrate: number = 0;
  @Prop() tooltip: boolean;
  @Element() el: HTMLElement;
  @Event() vchange: EventEmitter;
  @Event() vfinish: EventEmitter;
  @Event() vhide: EventEmitter;
  componentDidLoad() {
  }
  renderStyle (item) {
    if (item.width) {
      if (item.width == 'auto') {
        return {
          flex: '1'
        }
      } else {
        return {
          width: item.width
        }
      }
    }
  }
  @Watch('type')
  typeHandle (value: string) {
    this.el.setAttribute('type', value)
  }
  @Watch('value')
  valueHandle (value: string) {
    this.vchange.emit(value)
  }
  bindClick (item) {
    this.touchVibrate(item.keyCode)
    console.log(this)
    if (item.id) {
      if (item.id == 'number' || item.id == 'symbol') {
        this.type = item.id
        this.render()
      }
      if (item.id == 'case') {
        if (this.type == 'password') {
          this.type = 'uppercase'
          this.el.shadowRoot.querySelector('#case').classList.add('active')
        } else {
          this.type = 'password'
          this.el.shadowRoot.querySelector('#case').classList.remove('active')
        }
      }
      if (item.id == 'back') {
        this.type = 'password'
      }
    } else {
      if (item.keyCode == 8) {
        this.value = this.value.substring(0, this.value.length - 1)
      } else if (item.keyCode == 13) {
        this.vfinish.emit(this.value)
      } else {
        this.value += item.key
      }
    }
  }
  touchVibrate(time) {
    var timer = time
    console.log(window)
    if (this.vibrate !== null) {
      if (this.vibrate >= 0) {
        timer = this.vibrate;
      }
      if (navigator.vibrate) {
        navigator.vibrate(timer);
      }
    }
  }
  render() {
    const data = keyCode[this.type]
    return (
      <Host>
        {
          data.map(row => {
            return (
              <div class="row">
                {
                  row.map(item => {
                    return <p id={item.id} onClick={this.bindClick.bind(this, item)} 
                    style={this.renderStyle(item)}
                     class={'key '+ item.type}>
                      <span innerHTML={item.key}></span>
                      <span class="tool" innerHTML={item.key}></span>
                     </p>
                  })
                }
              </div>
            )
          })
        }
      </Host>
    );
  }
  @Method()
  async init(option) {
    const keyboard = document.createElement('hc-keyboard')
    const drawer = document.createElement('hc-drawer')
    const header = document.createElement('div')
    header.setAttribute('style', `display:flex;flex-direction:row;align-items:center;padding:0 1rem;background:#f5f5f5;`)
    header.innerHTML = `<h2 style="font-size:0.7rem;font-weight:normal;flex:1;color:#2170D9;">安全键盘</h2><hc-icon name="arrow-down"></hc-icon>`
    drawer.setAttribute('direction', 'btt')
    drawer.setAttribute('mask', 'false')
    Object.keys(option).forEach(key => {
      keyboard.setAttribute(key, option[key])
    })
    keyboard.setAttribute('service', 'true')
    drawer.setAttribute('role', 'keyboard')
    drawer.appendChild(header)
    drawer.appendChild(keyboard)
    document.body.appendChild(drawer)
    const down = drawer.querySelector('hc-icon')
    down.addEventListener('click', () => {
      drawer.destory()
    })
    setTimeout(() => {
      drawer.init()
    }, 30)
    drawer.addEventListener('vfinish', () => {
      drawer.destory()
      // this.vhide.emit()
    })
    return keyboard
  }
}
