import { Host, h } from "@stencil/core";
export class Drawer {
    constructor() {
        this.direction = 'btt';
        this.visible = false;
        this.transparent = false;
        this.maskClosable = true;
        this.mask = true;
        this.round = false;
        this.full = false;
        this.scroller = true;
    }
    visibleHandle(newValue) {
        if (newValue) {
            this.el.setAttribute('visible', 'true');
        }
        else {
            this.el.removeAttribute('visible');
        }
    }
    directionHandle(newValue) {
        console.log(newValue, 9999);
        if (newValue) {
            console.log(newValue);
            this.el.setAttribute('direction', newValue);
        }
    }
    async init() {
        setTimeout(() => {
            this.$drawer.style.transition = '0.3s';
            this.visible = true;
        }, 50);
    }
    async destory() {
        this.visible = false;
        setTimeout(() => {
            this.$drawer.style.transition = '0s';
        }, 300);
    }
    roundHandle(value) {
        if (value) {
            this.el.setAttribute('round', `${value}`);
        }
        else {
            this.el.removeAttribute('round');
        }
    }
    componentDidLoad() {
        this.$drawer = this.el.shadowRoot.querySelector('.hc-drawer');
        this.$mask = this.el.shadowRoot.querySelector('.hc-mask');
        if (this.maskClosable && this.mask) {
            this.$mask.addEventListener('click', () => {
                this.destory();
            });
        }
    }
    render() {
        console.log(this.scroller);
        return (h(Host, null,
            this.mask ? h("div", { class: "hc-mask" }) : h("span", null),
            h("div", { class: "hc-drawer", style: this.full ? { width: `100%`, height: `100%` } : {} },
                h("div", { class: "hc-drawer__content", style: { padding: `${this.padding}px`, height: this.scroller ? 'auto' : '100%' } },
                    h("slot", null)))));
    }
    static get is() { return "hc-drawer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["drawer.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["drawer.css"]
    }; }
    static get properties() { return {
        "direction": {
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
            "attribute": "direction",
            "reflect": false,
            "defaultValue": "'btt'"
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
        "transparent": {
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
            "attribute": "transparent",
            "reflect": false,
            "defaultValue": "false"
        },
        "maskClosable": {
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
            "attribute": "mask-closable",
            "reflect": false,
            "defaultValue": "true"
        },
        "mask": {
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
            "attribute": "mask",
            "reflect": false,
            "defaultValue": "true"
        },
        "round": {
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
            "attribute": "round",
            "reflect": false,
            "defaultValue": "false"
        },
        "padding": {
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
            "attribute": "padding",
            "reflect": false
        },
        "full": {
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
            "attribute": "full",
            "reflect": false,
            "defaultValue": "false"
        },
        "scroller": {
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
            "attribute": "scroller",
            "reflect": false,
            "defaultValue": "true"
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
                "text": "",
                "tags": []
            }
        },
        "destory": {
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
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "visible",
            "methodName": "visibleHandle"
        }, {
            "propName": "direction",
            "methodName": "directionHandle"
        }, {
            "propName": "round",
            "methodName": "roundHandle"
        }]; }
}
