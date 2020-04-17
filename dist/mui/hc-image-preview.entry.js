import { r as registerInstance, h, H as Host, c as getElement } from './core-3c51ccf2.js';
import './_commonjsHelpers-a89313bc.js';
import { H as Hammer } from './hammer-96a2b7b2.js';

const ImagePreview = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.column = 3;
        this.space = 5;
        this.visible = false;
        this.current = 0;
        this.urlArray = [];
        this.size = 0;
        this.offset = 0;
        this.y = 0;
        this.scale = 1;
        this.hide = false;
    }
    componentWillLoad() {
        if (!this.width) {
            this.width = document.body.offsetWidth;
        }
        if (!this.height) {
            this.height = document.querySelector('hc-page').offsetHeight;
        }
    }
    componentDidLoad() {
        this.renderLayout();
        this.computedUrl();
    }
    visibaleHandle(v) {
        if (v) {
            this.moveMax();
        }
        else {
            this.moveMin();
        }
    }
    renderLayout() {
        var slot = this.el.shadowRoot.querySelector('slot');
        this.$pop = this.el.shadowRoot.querySelector('.pop');
        this.$wrap = this.$pop.querySelector('.wrap');
        this.$indicate = this.el.shadowRoot.querySelector('.indicate');
        this.$mask = this.el.shadowRoot.querySelector('.mask');
        this.$preview = this.el.shadowRoot.querySelector('.preview');
        var width = this.el.offsetWidth - this.space * (this.column - 1);
        var children = slot.assignedElements();
        children.forEach((item, index) => {
            item.setAttribute('width', `${width / this.column}`);
            item.setAttribute('height', `${width / this.column}`);
            if ((index + 1) % this.column) {
                item.style.marginRight = `${this.space}px`;
            }
            if ((index + 1) / this.column > 1) {
                item.style.marginTop = `${this.space}px`;
            }
            // 添加点击事件
            item.addEventListener('click', () => {
                this.bindClick(item, index);
            });
        });
    }
    bindClick(item, index) {
        this.hide = false;
        this.pos = item.getBoundingClientRect();
        this.current = index;
        this.offset = -index * this.width;
        // 渲染第一张
        this.$preview.setAttribute('src', this.urlArray[this.current]);
        this.$preview.style.zIndex = `101`;
        this.$preview.style.objectFit = 'contain';
        this.visible = !this.visible;
        this.moveMin();
        this.renderSwiper();
    }
    moveMax() {
        // 改变外层
        setTimeout(() => {
            this.$preview.style.width = `${this.width}px`;
            this.$preview.style.height = `${this.height}px`;
            this.$preview.style.top = `0px`;
            this.$preview.style.left = '0px';
        }, 30);
    }
    moveMin() {
        this.$preview.style.width = `${this.pos.width}px`;
        this.$preview.style.height = `${this.pos.height}px`;
        this.$preview.style.left = `${this.pos.x}px`;
        this.$preview.style.top = `${this.pos.y}px`;
    }
    renderSwiper() {
        this.$wrap.style.width = `${this.width * this.urlArray.length}px`;
        this.$wrap.style.transform = `translateX(${-this.width * this.current}px)`;
        this.urlArray.forEach((item) => {
            var image = document.createElement('img');
            var items = document.createElement('div');
            items.classList.add('item');
            image.src = item;
            items.style.width = `${this.width}px`;
            items.style.height = `${this.height}px`;
            image.style.objectFit = 'contain';
            items.appendChild(image);
            this.$wrap.appendChild(items);
            var indicate = document.createElement('span');
            this.$indicate.appendChild(indicate);
        });
        setTimeout(() => {
            this.$pop.style.zIndex = `102`;
            this.$preview.style.display = 'none';
            if (!this.hammer) {
                this.bindTouch();
            }
        }, 300);
    }
    bindTouch() {
        this.$active = this.$wrap.querySelectorAll('.item')[this.current].querySelector('img');
        this.hammer = new Hammer(this.el);
        this.hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });
        this.hammer.on('panstart', () => {
            this.$wrap.style.transition = '0s';
        });
        this.hammer.on('pan', (e) => {
            this.$wrap.style.transform = `translateX(${this.offset + e.deltaX}px)`;
        });
        this.hammer.on('pandown', (e) => {
            this.scale = (this.height / 2 - e.deltaY) / (this.height / 2);
            this.$active.style.width = `${this.width * this.scale}px`;
            this.$active.style.height = `${this.height * this.scale}px`;
            this.$active.style.top = `${e.deltaY * 2}px`;
            this.$active.style.left = `${(1 - this.scale) * this.width / 2}px`;
            this.$mask.style.transition = '0s';
            this.$mask.style.opacity = `${this.scale}`;
            if (e.deltaY > 20) {
                this.hide = true;
            }
        });
        this.hammer.on('panend', (e) => {
            // 左右滑动
            if (!this.hide) {
                if (e.deltaX > 100) {
                    this.current = this.current <= 0 ? 0 : this.current - 1;
                }
                if (e.deltaX < -100) {
                    this.current = this.current < this.urlArray.length - 1 ? this.current + 1 : this.urlArray.length - 1;
                }
                this.$active = this.$wrap.querySelectorAll('.item')[this.current].querySelector('img');
                this.$wrap.style.transition = '0.3s';
                this.offset = -this.width * this.current;
                this.$wrap.style.transform = `translateX(${this.offset}px)`;
            }
            // 向下滑动
            console.log(this.current, this.offset);
            if (this.hide) {
                this.moveHide(e);
            }
        });
    }
    moveHide(e) {
        if (this.scale > 0.5) {
            this.$active.style.transition = '0.3s';
            this.$mask.style.transition = '0.3s';
            this.$mask.style.opacity = `1`;
            this.$active.style.width = `100%`;
            this.$active.style.height = `100%`;
            this.$active.style.top = `0px`;
            this.$active.style.left = `0px`;
            setTimeout(() => {
                this.$active.style.transition = '0s';
            }, 300);
        }
        else {
            var pos = this.children[this.current].getBoundingClientRect();
            this.$preview.setAttribute('src', this.urlArray[this.current]);
            this.$preview.style.display = 'block';
            this.$preview.style.width = `${this.width * this.scale}px`;
            this.$preview.style.height = `${this.height * this.scale}px`;
            this.$preview.style.top = `${e.deltaY * 2}px`;
            this.$preview.style.left = `${(1 - this.scale) * this.width / 2}px`;
            this.$wrap.style.display = 'none';
            this.$preview.style.transition = 'width top left 0.3s';
            this.$preview.style.height = `${pos.height}px`;
            this.$preview.style.objectFit = 'cover';
            setTimeout(() => {
                this.$preview.style.top = `${pos.y}px`;
                this.$preview.style.left = `${pos.x}px`;
                this.$preview.style.width = `${pos.width}px`;
                this.$mask.style.opacity = `0`;
            }, 30);
            setTimeout(() => {
                // 重置所有样式
                this.$pop.style.display = 'none';
                this.visible = false;
                this.$wrap.innerHTML = '';
                this.$wrap.removeAttribute('style');
                this.$pop.removeAttribute('style');
                this.$mask.removeAttribute('style');
                this.$preview.removeAttribute('style');
                this.$preview.removeAttribute('src');
            }, 300);
        }
    }
    computedUrl() {
        if (this.data) {
            this.urlArray = this.data;
        }
        else {
            this.children.forEach((item) => {
                this.urlArray.push(item.getAttribute('src'));
            });
        }
    }
    getCssClassMap() {
        return {
            'mask': true,
            'show': this.visible
        };
    }
    render() {
        this.children = Array.from(this.el.children);
        return (h(Host, null, h("div", { class: this.getCssClassMap() }), h("slot", null), h("img", { src: "", alt: "", class: "preview" }), h("div", { class: "pop" }, h("div", { class: "wrap" }), h("div", { class: "indicate" }))));
    }
    /**
   * 已服务的形式调用
   */
    async init() {
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "visible": ["visibaleHandle"]
    }; }
    static get style() { return ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n:host .mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: -1;\n  opacity: 0;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n:host .mask.show {\n  opacity: 1;\n  z-index: 100;\n}\n:host .preview {\n  position: fixed;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  -webkit-transform-origin: center center;\n  transform-origin: center center;\n}\n:host .pop {\n  position: fixed;\n  z-index: 100;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n:host .pop .indicate {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem;\n  text-align: center;\n}\n:host .pop .indicate span {\n  display: inline-block;\n  width: 0.4rem;\n  height: 0.4rem;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.4);\n  margin: 0 0.4rem;\n}\n:host .pop .indicate span.active {\n  background: #fff;\n}\n:host .pop .wrap {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 101;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  height: 100%;\n}\n:host .pop .wrap .item {\n  position: relative;\n}\n:host .pop .wrap .item img {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n:host .pop.show {\n  opacity: 1;\n  z-index: 100;\n  top: 0 !important;\n  left: 0 !important;\n  width: 100% !important;\n  height: 100% !important;\n}"; }
};

export { ImagePreview as hc_image_preview };
