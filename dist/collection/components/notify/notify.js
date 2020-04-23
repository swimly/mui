import { Host, h } from "@stencil/core";
export class Notify {
    constructor() {
        this.visible = false;
        this.text = '提交成功！';
        this.duration = 3000;
        this.position = 'center';
        this.background = 'rgba(0,0,0,0.8)';
        this.iconsize = 36;
        this.spin = false;
    }
    /** (optional) 初始化notify */
    async showNotify() {
        setTimeout(() => {
            this.visible = true;
            this.el.style.transition = '0.3s';
        }, 50);
        setTimeout(() => {
            this.destoryNotify();
        }, this.duration);
    }
    /** (optional) 销毁notify */
    async destoryNotify() {
        this.visible = false;
        // 如果是以指令的形式调用，需要销毁dom
        var notifys = document.querySelectorAll('hc-notify');
        console.log(notifys);
        setTimeout(() => {
            notifys.forEach(notify => {
                if (notify.getAttribute('service')) {
                    document.body.removeChild(notify);
                }
            });
        }, 300);
    }
    watchHandler(newValue) {
        if (newValue) {
            this.el.setAttribute('visible', `${newValue}`);
        }
        else {
            this.el.removeAttribute('visible');
        }
    }
    componentWillLoad() {
        this.renderBackground();
    }
    componentDidLoad() {
    }
    renderBackground() {
        if (this.type == 'success') {
            this.background = '#07c160';
        }
        if (this.type == 'warning') {
            this.background = '#ff976a';
        }
        if (this.type == 'error') {
            this.background = '#e90000';
        }
    }
    render() {
        return (h(Host, { style: { backgroundColor: this.background } },
            h("hc-icon", { spin: this.spin, size: this.iconsize, name: this.icon }),
            h("span", null, this.text)));
    }
    static get is() { return "hc-notify"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["notify.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["notify.css"]
    }; }
    static get properties() { return {
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
        "text": {
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
            "attribute": "text",
            "reflect": false,
            "defaultValue": "'\u63D0\u4EA4\u6210\u529F\uFF01'"
        },
        "duration": {
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
            "attribute": "duration",
            "reflect": false,
            "defaultValue": "3000"
        },
        "position": {
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
            "attribute": "position",
            "reflect": false,
            "defaultValue": "'center'"
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
            "defaultValue": "'rgba(0,0,0,0.8)'"
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
                "text": ""
            },
            "attribute": "icon",
            "reflect": false
        },
        "iconsize": {
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
            "attribute": "iconsize",
            "reflect": false,
            "defaultValue": "36"
        },
        "type": {
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
            "attribute": "type",
            "reflect": false
        },
        "spin": {
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
            "attribute": "spin",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get methods() { return {
        "showNotify": {
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
                "text": "(optional) \u521D\u59CB\u5316notify",
                "tags": []
            }
        },
        "destoryNotify": {
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
                "text": "(optional) \u9500\u6BC1notify",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "visible",
            "methodName": "watchHandler"
        }]; }
}
