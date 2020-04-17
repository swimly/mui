import { Component, Host, h, Prop, Element, Event, EventEmitter, Method } from '@stencil/core';
import Hammer from 'hammerjs';
@Component({
  tag: 'hc-picker',
  styleUrl: 'picker.scss',
  shadow: true
})
export class Picker {

  @Prop() value: string;
  @Prop() data;
  @Prop() itemHeight: number = 44;
  @Prop() vis: number = 5;
  @Prop() cancelLabel: string = '取消'
  @Prop() confirmLabel: string = '确定'
  @Prop() separate: string = ','
  @Element() el: HTMLElement;
  selected;
  formatData;
  key;
  offset;
  label = [];
  originData;
  @Event() vchange: EventEmitter
  @Event() vclick: EventEmitter
  componentWillLoad() {
    this.parseData(this.value.split(','))
  }
  componentDidLoad() {
    this.bindTouch()
  }
  bindTouch() {
    var items = this.el.shadowRoot.querySelectorAll('.column')
    items.forEach((item, index) => {
      const hammer = new Hammer(item);
      var wrap = item.querySelector('.wrap') as HTMLElement
      hammer.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });
      hammer.on('pan', (e) => {
        wrap.style.transition = '0s'
        wrap.style.transform = `translateY(${this.offset[index] + e.deltaY}px)`
      });
      hammer.on('panend', (e) => {
        this.offset[index] = this.offset[index] + e.deltaY
        var idx = this.parseYToIndex(this.offset[index])
        if (idx <= 0) {
          idx = 0
        }
        if (idx >= this.formatData[index].length - 1) {
          idx = this.formatData[index].length - 1
        }
        this.key[index] = idx
        wrap.style.transition = '0.3s'
        wrap.style.transform = `translateY(${this.parseIndexToY(this.key[index])}px)`
        this.key.forEach((key, i) => {
          if (i > index) {
            this.key[index] = 0
            this.label[i] = ''
          } else {
            this.label[i] = this.formatData[i][key].label
          }
        })
        this.parseData(this.label)
        this.value = this.label.join(this.separate)
        this.render()
        this.vchange.emit({
          label: this.value,
          value: this.selected
        })
      });
    })
  }
  parseIndexToY(index) {
    var pos = (this.vis - 1) / 2 - index
    return pos * this.itemHeight
  }
  parseYToIndex(y) {
    var half = (this.vis - 1) / 2 * this.itemHeight
    var index = Math.round((half - y) / this.itemHeight)
    return index
  }
  parseData(label) {
    this.selected = []
    this.formatData = []
    this.key = []
    this.offset = []
    var index = 0
    var _this = this
    this.data = typeof this.data == 'string' ? eval(`(${this.data})`) : this.data
    var current = this.isCascade(this.data) ? this.data : this.data[index]
    while (current && Array.isArray(current) && current.length) {
      _this.formatData.push(current)
      if (label && label[index] !== undefined) {
        current.some(function (item, i) {
          if (item.label === label[index]) {
            _this.selected[index] = item
            _this.key[index] = i
            label[index] = item.label
            _this.offset[index] = _this.parseIndexToY(i)
            return true
          }
        })
      }
      if (!_this.selected[index]) {
        _this.selected[index] = current[0]
        _this.key[index] = 0
        label[index] = current[0].label
        _this.offset[index] = _this.parseIndexToY(0)
      }
      index++
      current = _this.isCascade(_this.data) ? _this.selected[_this.selected.length - 1].children : _this.originData[index]
    }
    this.label = label
    this.value = label.join(this.separate)
  }
  isCascade(data) {
    return data[0] && this.isPlainObject(data[0])
  }
  _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  }
  isPlainObject(obj) {
    return this._typeof(obj) === 'object'
  }
  onClick (type) {
    this.vclick.emit({
      type: type,
      label: this.value,
      value: this.selected
    })
  }
  render() {
    var { formatData } = this
    return (
      <Host>
        <div class="head" style={{ height: `${this.itemHeight}px` }}>
          <p class="cancel" onClick={this.onClick.bind(this, 'cancel')}>{this.cancelLabel}</p>
          <h2>{this.value}</h2>
          <p class="confirm" onClick={this.onClick.bind(this, 'confirm')}>{this.confirmLabel}</p>
        </div>
        <div class="content" style={{ height: `${this.itemHeight * this.vis}px` }}>
          {
            formatData.map((row, index) => {
              return (
                <div class="column">
                  <div class="indicate" style={{ height: `${this.itemHeight}px` }}></div>
                  <div class="wrap" style={{ transform: `translateY(${this.offset[index]}px)` }}>
                    {
                      row.map((item) => {
                        return (
                          <div class="item" style={{ height: `${this.itemHeight}px` }}>
                            <p>{item.label}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </Host >
    );
  }
  @Method()
  async init(option) {
    const picker = document.createElement('hc-picker')
    const drawer = document.createElement('hc-drawer')
    drawer.setAttribute('direction', 'btt')
    drawer.setAttribute('round', 'true')
    Object.keys(option).forEach(key => {
      picker.setAttribute(key, option[key])
    })
    picker.setAttribute('service', 'true')
    drawer.setAttribute('role', 'picker')
    drawer.appendChild(picker)
    document.body.appendChild(drawer)
    picker.addEventListener('vclick', () => {
      drawer.destory()
    })
    setTimeout(() => {
      drawer.init()
    }, 30)
    return picker
  }
}
