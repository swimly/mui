import { Host, h } from "@stencil/core";
export class Button {
    constructor() {
        /**
         * 按钮类型
         */
        this.type = 'default';
        /**
         * 按钮形状
         */
        this.shape = 'default';
        /**
         * 自定义按钮颜色
         */
        this.color = '';
        this.disabled = false;
    }
    renderClassName() {
        return `hc-button`;
    }
    componentDidLoad() {
        // console.log(this.onclick())
        if (!this.disabled) {
            this.el.addEventListener('click', (e) => {
                this.el.setAttribute('active', 'true');
                this.vclick.emit(e);
                setTimeout(() => {
                    this.el.removeAttribute('active');
                }, 200);
            });
        }
        if (this.color) {
            this.el.style.backgroundColor = this.color;
        }
    }
    async loading() {
        const loading = this.el.shadowRoot.querySelector('#loading');
        this.el.setAttribute('disabled', 'true');
        loading.setAttribute('spin', 'true');
        loading.style.display = 'inline-flex';
    }
    async finishloading() {
        const loading = this.el.shadowRoot.querySelector('#loading');
        this.el.removeAttribute('disabled');
        loading.removeAttribute('spin');
        loading.style.display = 'none';
    }
    render() {
        const classMap = this.getCssClassMap();
        return (h(Host, { class: classMap },
            h("hc-icon", { name: "loading", id: "loading", style: { display: 'none' } }),
            this.icon ? h("hc-icon", { name: this.icon }) : h("span", null),
            h("span", { class: "hc-button__label" },
                h("slot", null))));
    }
    getCssClassMap() {
        return {
            'hc-button': true,
            [this.type]: true,
            [this.shape]: true
        };
    }
    static get is() { return "hc-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["button.css"]
    }; }
    static get properties() { return {
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'primary' | 'danger' | 'default'",
                "resolved": "\"danger\" | \"default\" | \"primary\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "\u6309\u94AE\u7C7B\u578B"
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "'default'"
        },
        "shape": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'default' | 'conner' | 'rounder'",
                "resolved": "\"conner\" | \"default\" | \"rounder\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "\u6309\u94AE\u5F62\u72B6"
            },
            "attribute": "shape",
            "reflect": false,
            "defaultValue": "'default'"
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
                "text": "\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272"
            },
            "attribute": "color",
            "reflect": false,
            "defaultValue": "''"
        },
        "icon": {
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
                "text": "\u6309\u94AE\u7C7B\u578B"
            },
            "attribute": "icon",
            "reflect": false
        },
        "disabled": {
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
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get events() { return [{
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
        "loading": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "HTMLElement": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "finishloading": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "HTMLElement": {
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
}
