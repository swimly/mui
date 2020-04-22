import { r as registerInstance, d as createEvent, h, H as Host, c as getElement } from './core-3c51ccf2.js';
import './_commonjsHelpers-a89313bc.js';
import { H as Hammer } from './hammer-96a2b7b2.js';

const Swiper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.direction = 'horizontal';
        this.height = 200;
        this.loop = false;
        this.current = 0;
        this.autoplay = false;
        this.duration = 3000;
        this.fit = 'cover';
        this.offset = 0;
        this.length = 0;
        this.index = 0;
        this.vchange = createEvent(this, "vchange", 7);
    }
    componentWillLoad() {
        console.log(this.fit);
    }
    componentDidLoad() {
        this.bindTouch();
        this.renderIndicate();
        this.autoPlay();
    }
    autoPlay() {
        if (this.autoplay) {
            clearInterval(this.timer);
            this.timer = setInterval(() => {
                this.$wrap.style.transition = '0.3s';
                if (this.direction == 'horizontal') {
                    this.offset -= this.el.offsetWidth;
                    this.$wrap.style.transform = `translateX(${this.offset}px)`;
                    if (Math.abs(this.offset) == this.el.offsetWidth * this.length * 2 && this.loop) {
                        this.offset = -this.el.offsetWidth * this.length;
                        setTimeout(() => {
                            this.$wrap.style.transition = '0s';
                            this.$wrap.style.transform = `translateX(${this.offset}px)`;
                        }, 300);
                    }
                    if (Math.abs(this.offset) == 0 && this.loop) {
                        setTimeout(() => {
                            this.$wrap.style.transition = '0s';
                            this.$wrap.style.transform = `translateX(${-this.length * this.el.offsetWidth}px)`;
                            this.current = this.length;
                            this.offset = -this.length * this.el.offsetWidth;
                        }, 300);
                    }
                    if (!this.loop && Math.abs(this.offset) == (this.length) * this.el.offsetWidth) {
                        this.offset = 0;
                        this.$wrap.style.transform = `translateX(${this.offset}px)`;
                    }
                }
                else {
                    this.offset -= this.height;
                    this.$wrap.style.transform = `translateY(${this.offset}px)`;
                    if (Math.abs(this.offset) == this.height * this.length * 2 && this.loop) {
                        this.offset = -this.height * this.length;
                        setTimeout(() => {
                            this.$wrap.style.transition = '0s';
                            this.$wrap.style.transform = `translateY(${this.offset}px)`;
                        }, 300);
                    }
                    if (!this.loop && Math.abs(this.offset) == (this.length) * this.height) {
                        this.offset = 0;
                        this.$wrap.style.transform = `translateY(${this.offset}px)`;
                    }
                }
                this.renderIndicate();
            }, this.duration);
        }
    }
    bindTouch() {
        this.$wrap = this.el.shadowRoot.querySelector('.wrap');
        const hammer = new Hammer(this.el);
        this.direction == 'horizontal' ? hammer.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL }) : hammer.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });
        hammer.on('panstart', () => {
            this.$wrap.style.transition = '0s';
            clearInterval(this.timer);
        });
        hammer.on('pan', (e) => {
            if (this.direction == 'horizontal') {
                this.$wrap.style.transform = `translateX(${e.deltaX + this.offset}px)`;
            }
            else {
                this.$wrap.style.transform = `translateY(${e.deltaY + this.offset}px)`;
            }
        });
        hammer.on('panend', (e) => {
            this.$wrap.style.transition = '0.3s';
            var dis = this.direction == 'horizontal' ? e.deltaX : e.deltaY;
            if (dis < -100) {
                this.current = this.loop ? this.current + 1 : this.current < this.length - 1 ? this.current + 1 : this.length - 1;
                this.renderMove();
            }
            else if (dis > 100) {
                this.current = this.loop ? this.current - 1 : this.current > 0 ? this.current - 1 : 0;
                this.renderMove();
            }
            else {
                this.current = this.current;
                this.renderMove();
            }
            this.renderIndicate();
            if (this.autoplay) {
                this.autoPlay();
            }
        });
    }
    renderIndicate() {
        var index = this.direction == 'horizontal' ? this.offset / this.el.offsetWidth : this.offset / this.height;
        this.index = Math.abs(index) % this.length;
        var indicates = this.el.shadowRoot.querySelector('.indicate').querySelectorAll('span');
        this.vchange.emit({
            current: this.index
        });
        indicates.forEach((item, index) => {
            if (index == this.index) {
                item.classList.add('active');
            }
            else {
                item.classList.remove('active');
            }
        });
    }
    renderMove() {
        if (this.direction == 'horizontal') {
            this.offset = this.loop ? -(this.current + this.length) * this.el.offsetWidth : -this.current * this.el.offsetWidth;
            this.$wrap.style.transform = `translateX(${this.offset}px)`;
            // 到达最后一个
            if (Math.abs(this.offset) == Math.abs(this.length * this.el.offsetWidth * 2) && this.loop) {
                setTimeout(() => {
                    this.$wrap.style.transition = '0s';
                    this.$wrap.style.transform = `translateX(${-this.length * this.el.offsetWidth}px)`;
                    this.current = 0;
                    this.offset = -this.length * this.el.offsetWidth;
                }, 300);
            }
            if (Math.abs(this.offset) == 0 && this.loop) {
                setTimeout(() => {
                    this.$wrap.style.transition = '0s';
                    this.$wrap.style.transform = `translateX(${-this.length * this.el.offsetWidth}px)`;
                    this.current = this.length;
                    this.offset = -this.length * this.el.offsetWidth;
                }, 300);
            }
        }
        else {
            this.offset = this.loop ? -(this.current + this.length) * this.height : -this.current * this.height;
            this.$wrap.style.transform = `translateY(${this.offset}px)`;
            if (Math.abs(this.offset) == Math.abs(this.length * this.height * 2) && this.loop) {
                setTimeout(() => {
                    this.$wrap.style.transition = '0s';
                    this.$wrap.style.transform = `translateX(${-this.length * this.height}px)`;
                    this.current = 0;
                    this.offset = -this.length * this.height;
                }, 300);
            }
            if (Math.abs(this.offset) == 0 && this.loop) {
                setTimeout(() => {
                    this.$wrap.style.transition = '0s';
                    this.$wrap.style.transform = `translateX(${-this.length * this.height}px)`;
                    this.current = this.length;
                    this.offset = -this.length * this.height;
                }, 300);
            }
        }
    }
    renderOffset() {
        var current = this.loop ? this.current + this.length : this.current;
        this.offset = this.direction == 'horizontal' ? -this.el.offsetWidth * current : -this.height * current;
        if (this.direction == 'horizontal') {
            return {
                transform: `translateX(${-current * this.el.offsetWidth}px)`
            };
        }
        else {
            return {
                transform: `translateY(${-current * this.height}px)`
            };
        }
    }
    render() {
        this.children = Array.from(this.el.children);
        this.length = this.children.length;
        if (this.loop) {
            var c = this.children;
            this.children = this.children.concat(this.children);
            this.children = [...this.children, ...c];
        }
        var arr = new Array(this.length);
        arr.fill('line');
        return (h(Host, { style: { height: `${this.height}px` } }, h("div", { class: "wrap", style: this.renderOffset() }, this.children.map(item => {
            item.setAttribute('width', `${this.width}`);
            item.setAttribute('height', `${this.height}`);
            item.setAttribute('fit', this.fit);
            return (h("div", { style: { width: this.width ? `${this.width}px` : `${this.el.offsetWidth}px`, height: `${this.height}px`, flexShrink: `0` }, innerHTML: item.outerHTML }));
        })), h("div", { class: "indicate" }, arr.map(() => {
            return (h("span", null));
        }))));
    }
    /**
   * 已服务的形式调用
   */
    async init(option) {
        const swiper = document.createElement('hc-swiper');
        console.log(option);
        option.data.forEach(item => {
            var image = document.createElement('hc-image');
            image.setAttribute('src', item);
            image.width = option.width;
            image.height = option.height;
            image.fit = option.fit;
            swiper.appendChild(image);
        });
        swiper.width = option.width;
        swiper.height = option.height;
        swiper.fit = option.fit;
        swiper.current = option.current;
        swiper.setAttribute('service', 'true');
        option.dom.appendChild(swiper);
        return swiper;
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  display: block;\n  overflow: hidden;\n  position: relative;\n}\n:host .wrap {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n:host .wrap slot {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: nowrap;\n}\n:host .indicate {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  bottom: 0;\n  z-index: 10;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n}\n:host .indicate span {\n  display: inline-block;\n  width: 0.3rem;\n  height: 0.3rem;\n  background: rgba(255, 255, 255, 0.4);\n  border-radius: 50%;\n  margin: 0 0.3rem;\n  font-size: 0;\n}\n:host .indicate span.active {\n  background: #fff;\n}\n\n:host([direction=vertical]) .wrap {\n  flex-direction: column;\n}\n:host([direction=vertical]) .indicate {\n  width: auto;\n  top: 0;\n  left: auto;\n  right: 0;\n  flex-direction: column;\n}\n:host([direction=vertical]) .indicate span {\n  margin: 0.3rem 0;\n}"; }
};

export { Swiper as hc_swiper };
