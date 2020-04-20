import { Host, h } from "@stencil/core";
import Hammer from 'hammerjs';
export class ImagePreview {
    constructor() {
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
        this.current = index;
        this.pos = item.getBoundingClientRect();
        this.initCover();
        this.moveMax();
    }
    // 最大化
    moveMax() {
        setTimeout(() => {
            this.$mask.classList.add('show');
            this.$preview.style.transition = '0.3s';
            this.$preview.style.webkitTransition = '0.3s';
            this.$preview.style.transform = `translate(0px, 0px)`;
            this.$preview.style.webkitTransform = `translate(0px, 0px)`;
            this.$preview.style.width = `${this.width}px`;
            this.$preview.style.height = `${this.height}px`;
            this.$preview.style.objectFit = 'contain';
            this.$preview.style.opacity = '1';
        }, 30);
    }
    // 最小化
    moveMin() {
        const { pos } = this;
        this.$mask.classList.remove('show');
        this.$preview.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
        this.$preview.style.webkitTransform = `translate(${pos.x}px, ${pos.y}px)`;
        this.$preview.style.width = `${pos.width}px`;
        this.$preview.style.height = `${pos.height}px`;
        // this.$preview.removeAttribute('src')
        this.$preview.style.zIndex = `102`;
        this.$preview.style.opacity = '0';
        setTimeout(() => {
            this.$preview.style.objectFit = 'cover';
            this.$preview.removeAttribute('style');
            this.$preview.style.display = 'none';
        }, 300);
    }
    // 初始图片的位置
    initCover() {
        const { pos } = this;
        this.$preview.style.display = 'block';
        this.$preview.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
        this.$preview.style.webkitTransform = `translate(${pos.x}px, ${pos.y}px)`;
        this.$preview.style.width = `${pos.width}px`;
        this.$preview.style.height = `${pos.height}px`;
        this.$preview.setAttribute('src', this.urlArray[this.current]);
        this.$preview.style.zIndex = `102`;
        this.$preview.style.objectFit = 'cover';
        this.$preview.style.opacity = '0';
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
            console.log(this.$active);
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
        });
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
        return (h(Host, null,
            h("div", { class: this.getCssClassMap() }),
            h("slot", null),
            h("img", { src: "", alt: "", class: "preview", onClick: this.moveMin.bind(this) }),
            h("div", { class: "pop" },
                h("div", { class: "wrap" }),
                h("div", { class: "indicate" }))));
    }
    /**
   * 已服务的形式调用
   */
    async init() {
    }
    static get is() { return "hc-image-preview"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["image-preview.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["image-preview.css"]
    }; }
    static get properties() { return {
        "column": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "column",
            "reflect": false,
            "defaultValue": "3"
        },
        "space": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "space",
            "reflect": false,
            "defaultValue": "5"
        },
        "data": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "data",
            "reflect": false
        },
        "visible": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "visible",
            "reflect": false,
            "defaultValue": "false"
        },
        "current": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "current",
            "reflect": false,
            "defaultValue": "0"
        },
        "width": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "width",
            "reflect": false
        },
        "height": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "height",
            "reflect": false
        }
    }; }
    static get methods() { return {
        "init": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "\u5DF2\u670D\u52A1\u7684\u5F62\u5F0F\u8C03\u7528",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
}
