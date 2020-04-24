import { Host, h } from "@stencil/core";
export class Toast {
    constructor() {
        this.visible = false;
        this.text = '提交成功！';
        this.duration = 3000;
        this.position = 'center';
        this.background = 'rgba(0,0,0,0.8)';
    }
    /** (optional) 初始化toast */
    async showToast() {
        setTimeout(() => {
            this.visible = true;
            this.el.style.transition = '0.3s';
        }, 50);
        setTimeout(() => {
            this.destoryToast();
        }, this.duration);
    }
    /** (optional) 销毁toast */
    async destoryToast() {
        this.visible = false;
        // 如果是以指令的形式调用，需要销毁dom
        var toasts = document.querySelectorAll('hc-toast');
        setTimeout(() => {
            toasts.forEach(toast => {
                if (toast.getAttribute('service')) {
                    document.body.removeChild(toast);
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
    componentDidLoad() {
    }
    render() {
        return (h(Host, { style: { backgroundColor: this.background } }, this.text));
    }
    static get is() { return "hc-toast"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["toast.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["toast.css"]
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
        }
    }; }
    static get methods() { return {
        "showToast": {
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
                "text": "(optional) \u521D\u59CB\u5316toast",
                "tags": []
            }
        },
        "destoryToast": {
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
                "text": "(optional) \u9500\u6BC1toast",
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
