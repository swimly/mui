import { Host, h } from "@stencil/core";
export class Dialog {
    constructor() {
        /**
         * 底部按钮
         */
        this.footer = "['知道了']";
        /**
         * 显示隐藏
         */
        this.visible = false;
        /**
         * 样式
         */
        this.effect = 'zoom';
    }
    async display() {
        this.$el.setAttribute('effect', this.effect);
        this.$el.style.zIndex = '100';
        setTimeout(() => {
            this.visible = true;
        }, 30);
    }
    async destory(item) {
        this.vdestory.emit(item);
        this.visible = false;
        setTimeout(() => {
            this.$el.style.zIndex = '-1';
        }, 300);
        // 如果是以指令的形式调用，需要销毁dom
        var dialogs = document.querySelectorAll('hc-dialog');
        setTimeout(() => {
            dialogs.forEach(dialog => {
                if (dialog.getAttribute('service')) {
                    document.body.removeChild(dialog);
                }
            });
        }, 300);
    }
    watchHandler(newValue) {
        if (newValue) {
            this.$el.setAttribute('visible', `${newValue}`);
            this.$el.style.zIndex = '100';
        }
        else {
            this.$el.removeAttribute('visible');
        }
    }
    componentWillLoad() {
        this.bindDuration();
    }
    bindDuration() {
        let { duration } = this;
        if (duration) {
            var timer = setInterval(() => {
                duration = duration > 0 ? duration - 1000 : 0;
                if (duration == 0) {
                    clearInterval(timer);
                    this.destory(null);
                }
                this.$el.shadowRoot.querySelector('#count').innerHTML = `${duration / 1000}S`;
            }, 1000);
        }
    }
    renderContent() {
        if (!this.type) {
            return (this.content);
        }
        if (this.type == 'prompt') {
            return (h("hc-input", { id: "prompt", placeholder: this.placeholder }));
        }
    }
    render() {
        const footer = eval(`(${this.footer})`);
        return (h(Host, null,
            h("div", { class: "hc-dialog" },
                h("p", { id: "count", class: "hc-dialog__countdown" }, this.duration ? `${this.duration / 1000}S` : ''),
                h("h2", { class: "hc-dialog__title" },
                    this.titles,
                    this.visible),
                h("div", { class: "hc-dialog__content" },
                    h("slot", null, this.renderContent())),
                h("div", { class: "hc-dialog__footer" },
                    h("slot", { name: "footer" }, footer.map((item) => {
                        return h("p", { onClick: this.destory.bind(this, item), class: "hc-dialog__footer_item" }, item);
                    })))),
            h("div", { class: "hc-mask" })));
    }
    /**
     * 已服务的形式调用
     */
    async init(option) {
        const dialog = document.createElement('hc-dialog');
        Object.keys(option).forEach(key => {
            dialog.setAttribute(key, option[key]);
        });
        dialog.setAttribute('service', 'true');
        document.body.appendChild(dialog);
        setTimeout(() => {
            dialog.setAttribute('visible', 'true');
        }, 30);
        return dialog;
    }
    static get is() { return "hc-dialog"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["dialog.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["dialog.css"]
    }; }
    static get properties() { return {
        "titles": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "\u6807\u9898"
            },
            "attribute": "titles",
            "reflect": false
        },
        "content": {
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
                "text": "\u5185\u5BB9"
            },
            "attribute": "content",
            "reflect": false
        },
        "footer": {
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
                "text": "\u5E95\u90E8\u6309\u94AE"
            },
            "attribute": "footer",
            "reflect": false,
            "defaultValue": "\"['\u77E5\u9053\u4E86']\""
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
                "text": "\u663E\u793A\u9690\u85CF"
            },
            "attribute": "visible",
            "reflect": false,
            "defaultValue": "false"
        },
        "effect": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'zoom' | 'fadeIn'",
                "resolved": "\"fadeIn\" | \"zoom\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "\u6837\u5F0F"
            },
            "attribute": "effect",
            "reflect": false,
            "defaultValue": "'zoom'"
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
                "text": "\u5B9A\u65F6\u5173\u95ED"
            },
            "attribute": "duration",
            "reflect": false
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
                "text": "\u7C7B\u578B"
            },
            "attribute": "type",
            "reflect": false
        },
        "placeholder": {
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
            "attribute": "placeholder",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "vdestory",
            "name": "vdestory",
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
        "display": {
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
                "signature": "(item: any) => Promise<void>",
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
        },
        "init": {
            "complexType": {
                "signature": "(option: any) => Promise<HTMLHcDialogElement>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "HTMLHcDialogElement": {
                        "location": "global"
                    }
                },
                "return": "Promise<HTMLHcDialogElement>"
            },
            "docs": {
                "text": "\u5DF2\u670D\u52A1\u7684\u5F62\u5F0F\u8C03\u7528",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "$el"; }
    static get watchers() { return [{
            "propName": "visible",
            "methodName": "watchHandler"
        }]; }
}
