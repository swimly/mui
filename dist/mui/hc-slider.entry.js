import { r as registerInstance, d as createEvent, h, H as Host, c as getElement } from './core-3c51ccf2.js';
import './_commonjsHelpers-a89313bc.js';
import { H as Hammer } from './hammer-96a2b7b2.js';

const Slider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.max = 100;
        this.min = 0;
        this.value = 0;
        this.offset = 0;
        this.arr = [];
        this.vchange = createEvent(this, "vchange", 7);
    }
    componentDidLoad() {
        this.renderPos();
        this.bindTouch();
    }
    bindTouch() {
        var bar = this.el.shadowRoot.querySelector('.bar');
        const hammer = new Hammer(bar);
        hammer.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });
        hammer.on('pan', (e) => {
            var offset;
            if (this.offset + e.deltaX >= this.width) {
                offset = this.width;
            }
            else if (this.offset + e.deltaX < 0) {
                offset = 0;
            }
            else {
                offset = this.offset + e.deltaX;
            }
            var percent = offset / this.width < 0 ? 0 : offset / this.width > 1 ? 1 : parseFloat((offset / this.width).toFixed(2));
            this.value = Math.ceil((this.max - this.min) * percent + this.min);
            this.$progress.style.width = `${offset}px`;
            this.$handle.style.transform = `translateX(${offset - this.$handle.offsetWidth / 2}px)`;
        });
        hammer.on('panend', (e) => {
            this.offset += e.deltaX;
            var percent = this.offset / this.width < 0 ? 0 : this.offset / this.width > 1 ? 1 : parseFloat((this.offset / this.width).toFixed(2));
            if (this.step) {
                var idx = this.offset / (this.width / (this.length + 1));
                idx = Math.round(idx);
                percent = idx / (this.length + 1);
                percent = percent < 0 ? 0 : percent > 1 ? 1 : percent;
                this.offset = percent * this.width;
                this.$progress.style.width = `${percent * this.width}px`;
                this.$handle.style.transform = `translateX(${percent * this.width - this.$handle.offsetWidth / 2}px)`;
            }
            this.value = Math.ceil((this.max - this.min) * percent + this.min);
            this.vchange.emit({
                percent: percent,
                value: this.value
            });
        });
    }
    renderPos() {
        this.arr.unshift(0);
        this.arr.push(this.width);
        this.$progress = this.el.shadowRoot.querySelector('.progress');
        this.$handle = this.el.shadowRoot.querySelector('.handle');
        if (this.value >= this.min) {
            this.offset = Math.abs((this.value - this.min) / (this.max - this.min)) * this.width;
        }
        else {
            this.offset = Math.abs((this.value) / (this.max - this.min)) * this.width;
        }
        this.$progress.style.width = `${this.offset}px`;
        this.$handle.style.transform = `translateX(${this.offset - this.$handle.offsetWidth / 2}px)`;
    }
    render() {
        this.width = this.el.offsetWidth;
        this.length = this.step ? (this.max - this.min) / this.step - 1 : 0;
        this.arr = [];
        this.arr.sort();
        var arr = new Array(this.length);
        arr.fill('line');
        return (h(Host, null, h("div", { class: "bar" }, arr.map((item, index) => {
            this.arr.push(Math.round((this.width / (this.length + 1)) * (index + 1)));
            return (h("span", { class: "line", style: { left: `${Math.round((this.width / (this.length + 1)) * (index + 1))}px` } }, item));
        }), h("div", { class: "progress" }), h("div", { class: "handle" }, h("p", { class: "label" }, this.value < this.min ? this.min : this.value)))));
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  display: block;\n}\n:host .bar {\n  height: 0.3rem;\n  background-color: #e6e6e6;\n  border-radius: 0.5rem;\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n}\n:host .bar .line {\n  display: inline-block;\n  width: 2px;\n  height: 0.3rem;\n  position: absolute;\n  bottom: 0;\n  font-size: 0;\n  background: #fff;\n}\n:host .bar .progress {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  background-color: #2170D9;\n  border-radius: 0.5rem 0 0 0.5rem;\n}\n:host .bar .handle {\n  display: -ms-flexbox;\n  display: flex;\n  width: 1rem;\n  border: 2px solid #fff;\n  height: 1rem;\n  background-color: #2170D9;\n  border-radius: 50%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  margin-top: -0.5rem;\n}\n:host .bar .handle .label {\n  position: absolute;\n  font-size: 0.5rem;\n  background: #2170D9;\n  color: #fff;\n  display: -ms-flexbox;\n  display: flex;\n  width: 1rem;\n  height: 1rem;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  border-radius: 50%;\n  top: -0.3rem;\n  margin: 0;\n  left: 50%;\n  -webkit-transform: translate(-50%, -100%);\n  transform: translate(-50%, -100%);\n}\n:host .bar .handle .label:after {\n  content: \"\";\n  display: inline-block;\n  border-width: 0.4rem;\n  border-left-width: 0.2rem;\n  border-right-width: 0.2rem;\n  border-style: solid;\n  border-color: transparent;\n  border-top-color: #2170D9;\n  position: absolute;\n  bottom: -0.6rem;\n  left: 50%;\n  margin-left: -0.2rem;\n}"; }
};

export { Slider as hc_slider };
