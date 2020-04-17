import { Host, h } from "@stencil/core";
import { hc_swiper } from '../../../www/build/hc-swiper.entry.js';
const swiper = new hc_swiper({});
export class ImagePreview {
    constructor() {
        this.column = 3;
        this.space = 5;
        this.visible = false;
    }
    componentDidLoad() {
        this.renderLayout();
    }
    renderLayout() {
        var slot = this.el.shadowRoot.querySelector('slot');
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
        });
    }
    renderSwiper(item, index) {
        swiper.init({
            dom: this.el.shadowRoot.querySelector('.pop'),
            data: this.data,
            width: document.body.offsetWidth,
            height: document.querySelector('hc-page').offsetHeight,
            current: index,
            fit: 'contain'
        });
    }
    bindClick(item, index) {
        var pos = item.getBoundingClientRect();
        console.log(pos);
        var pop = this.el.shadowRoot.querySelector('.pop');
        pop.style.top = `${pos.y}px`;
        pop.style.left = `${pos.x}px`;
        pop.style.width = `${pos.width}px`;
        pop.style.height = `${pos.height}px`;
        pop.style.transition = '0.3s';
        this.renderSwiper(item, index);
        setTimeout(() => {
            this.visible = true;
        }, 80);
    }
    getCssClassMap() {
        return {
            'pop': true,
            'show': this.visible
        };
    }
    render() {
        this.data = [];
        this.children = Array.from(this.el.children);
        this.children.forEach((item, index) => {
            item.addEventListener('click', this.bindClick.bind(this, item, index));
            this.data.push(item.getAttribute('src'));
        });
        return (h(Host, null,
            h("slot", null),
            h("div", { onClick: () => { this.visible = false; }, class: this.getCssClassMap() })));
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
