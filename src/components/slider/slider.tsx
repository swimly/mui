import { Component, Host, h, Element, Prop, EventEmitter, Event } from '@stencil/core';
import Hammer from 'hammerjs';
@Component({
  tag: 'hc-slider',
  styleUrl: 'slider.scss',
  shadow: true
})
export class Slider {
  @Prop() max: number = 100;
  @Prop() min: number = 0;
  @Prop() value: number = 0;
  @Prop() step: number;
  @Element() el:HTMLElement;
  @Event() vchange: EventEmitter
  offset=0;
  width;
  $progress;
  $handle;
  length;
  arr = [];
  componentDidLoad () {
    this.renderPos()
    this.bindTouch()
  }
  bindTouch () {
    var bar = this.el.shadowRoot.querySelector('.bar') as HTMLElement;
    const hammer = new Hammer(bar);
    hammer.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });
    hammer.on('pan', (e) => {
      var offset;
      if (this.offset + e.deltaX >= this.width) {
        offset = this.width
      } else if (this.offset + e.deltaX < 0) {
        offset = 0
      } else {
        offset = this.offset + e.deltaX;
      }
      var percent = offset / this.width < 0 ? 0 : offset / this.width > 1 ? 1 : parseFloat((offset / this.width).toFixed(2))
      this.value = Math.ceil((this.max - this.min) * percent + this.min)
      this.$progress.style.width = `${offset}px`
      this.$handle.style.transform = `translateX(${offset - this.$handle.offsetWidth / 2}px)`
    });
    hammer.on('panend', (e) => {
      this.offset += e.deltaX;
      var percent = this.offset / this.width < 0 ? 0 : this.offset / this.width > 1 ? 1 : parseFloat((this.offset / this.width).toFixed(2))
      if (this.step) {
        var idx = this.offset / (this.width / (this.length + 1))
        idx = Math.round(idx)
        percent = idx / (this.length + 1)
        percent = percent < 0 ? 0 : percent > 1 ? 1 : percent
        this.offset = percent * this.width
        this.$progress.style.width = `${percent * this.width}px`
        this.$handle.style.transform = `translateX(${percent * this.width - this.$handle.offsetWidth / 2}px)`
      }
      this.value = Math.ceil((this.max - this.min) * percent + this.min)
      this.vchange.emit({
        percent: percent,
        value: this.value
      })
    });
  }
  renderPos () {
    this.arr.unshift(0)
    this.arr.push(this.width)
    this.$progress = this.el.shadowRoot.querySelector('.progress') as HTMLElement;
    this.$handle = this.el.shadowRoot.querySelector('.handle') as HTMLElement;
    if (this.value >= this.min) {
      this.offset = Math.abs((this.value - this.min) / (this.max - this.min)) * this.width
    } else {
      this.offset = Math.abs((this.value) / (this.max - this.min)) * this.width
    }
    this.$progress.style.width = `${this.offset}px`
    this.$handle.style.transform = `translateX(${this.offset - this.$handle.offsetWidth / 2}px)`
  }
  render() {
    this.width = this.el.offsetWidth
    this.length = this.step ? (this.max - this.min) / this.step - 1 : 0
    this.arr = []
    this.arr.sort()
    var arr = new Array(this.length)
    arr.fill('line')
    return (
      <Host>
        <div class="bar">
          {
            arr.map((item, index) => {
              this.arr.push(Math.round((this.width / (this.length + 1)) * (index + 1)))
              return (
                <span class="line" style={{left: `${Math.round((this.width / (this.length + 1)) * (index + 1))}px`}}>{item}</span>
              )
            })
          }
          <div class="progress"></div>
          <div class="handle">
            <p class="label">{this.value < this.min ? this.min : this.value}</p>
          </div>
        </div>
      </Host>
    );
  }

}
