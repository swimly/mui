import { Host, h } from "@stencil/core";
export class Page {
    constructor() {
        this.leftButtons = '[{icon: "arrow-lift", label: "返回", id: "back"}]';
        this.rightButtons = '[]';
        this.padding = '0';
        this.color = '#262626';
        this.headBackground = '#fff';
        this.background = '#f5f5f5';
        this.scrolldistance = 0;
        this.hideHeader = false;
    }
    componentDidLoad() {
        this.renderStyle();
        this.el.shadowRoot.querySelector('section').addEventListener('scroll', (e) => {
            this.scrolldistance = Math.round(this.el.shadowRoot.querySelector('section').scrollTop);
            this.el.setAttribute('scrolldistance', `${this.scrolldistance}`);
            this.vscroll.emit(e);
        });
    }
    // 初始化样式
    renderStyle() {
        let leftButtons = eval(`(${this.leftButtons})`);
        let rightButtons = eval(`(${this.rightButtons})`);
        if (leftButtons.length) {
            if (!leftButtons[0].hasOwnProperty('icon')) {
                this.$header.style.paddingLeft = '1rem';
            }
        }
        if (rightButtons.length) {
            if (!rightButtons[rightButtons.length - 1].hasOwnProperty('icon')) {
                this.$header.style.paddingRight = '1rem';
            }
        }
    }
    leftButtonsHandle(newValue) {
        console.log(newValue);
    }
    async scrollGo(pos) {
        this.scrollAnimation(this.scrolldistance, pos);
    }
    scrollAnimation(currentY, targetY) {
        let needScrollTop = targetY - currentY;
        let _currentY = currentY;
        setTimeout(() => {
            // 一次调用滑动帧数，每次调用会不一样
            const dist = Math.ceil(needScrollTop / 10);
            _currentY += dist;
            this.$slot.scrollTo(_currentY, currentY);
            // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
            if (needScrollTop > 10 || needScrollTop < -10) {
                this.scrollAnimation(_currentY, targetY);
            }
            else {
                this.$slot.scrollTo(_currentY, targetY);
            }
        }, 1);
    }
    buttonClick(item) {
        this.vclick.emit(item);
        if (item.id == 'back') {
            window.history.go(-1);
        }
    }
    render() {
        let leftButtons = eval(`(${this.leftButtons})`);
        let rightButtons = eval(`(${this.rightButtons})`);
        return (h(Host, null,
            h("div", { class: "hc-header", style: !this.hideHeader ? { backgroundColor: this.headBackground, color: this.color } : { display: 'none' } },
                h("div", { class: "hc-header__buttons" }, leftButtons ? leftButtons.map((item, index) => (h("p", { class: "hc-header__buttons_item", key: index, style: { color: item.color }, onClick: this.buttonClick.bind(this, item) },
                    h("hc-icon", { size: 28, name: item.icon }),
                    h("span", null, item.label)))) : h("span", null)),
                h("h1", { class: "hc-header__title" }, this.titles),
                h("div", { class: "hc-header__buttons" }, rightButtons ? rightButtons.map((item, index) => (h("p", { class: "hc-header__buttons_item", key: index, style: { color: item.color } },
                    h("hc-icon", { size: 28, name: item.icon }),
                    h("span", null, item.label)))) : h("span", null))),
            h("section", null,
                h("slot", null))));
    }
    static get is() { return "hc-page"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["page.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["page.css"]
    }; }
    static get properties() { return {
        "titles": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "titles",
            "reflect": false
        },
        "leftButtons": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "left-buttons",
            "reflect": false,
            "defaultValue": "'[{icon: \"arrow-lift\", label: \"\u8FD4\u56DE\", id: \"back\"}]'"
        },
        "rightButtons": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "right-buttons",
            "reflect": false,
            "defaultValue": "'[]'"
        },
        "padding": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "padding",
            "reflect": false,
            "defaultValue": "'0'"
        },
        "color": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "color",
            "reflect": false,
            "defaultValue": "'#262626'"
        },
        "headBackground": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "head-background",
            "reflect": false,
            "defaultValue": "'#fff'"
        },
        "background": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "background",
            "reflect": false,
            "defaultValue": "'#f5f5f5'"
        },
        "scrolldistance": {
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
            "attribute": "scrolldistance",
            "reflect": false,
            "defaultValue": "0"
        },
        "hideHeader": {
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
            "attribute": "hide-header",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get events() { return [{
            "method": "vscroll",
            "name": "vscroll",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "vclick",
            "name": "vclick",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "scrollGo": {
            "complexType": {
                "signature": "(pos: number) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "leftButtons",
            "methodName": "leftButtonsHandle"
        }]; }
}
