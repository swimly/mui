import { Host, h } from "@stencil/core";
export class Actionsheet {
    constructor() {
        this.buttons = `['取消']`;
    }
    componentDidLoad() {
        this.$button = this.el.shadowRoot.querySelectorAll('.button');
        this.$button.forEach(button => {
            button.addEventListener('click', () => {
                this.vclick.emit({
                    type: button.innerHTML,
                    value: this.current
                });
            });
        });
    }
    bindClick(item) {
        this.current = item;
    }
    currentHandle(value) {
        const arr = eval(`(${this.content})`);
        const index = arr.indexOf(value);
        const $items = this.el.shadowRoot.querySelectorAll('.item');
        $items.forEach(item => {
            item.classList.remove('active');
        });
        $items[index].classList.add('active');
        this.vchange.emit(value);
    }
    render() {
        const arr = eval(`(${this.content})`);
        const footer = eval(`(${this.buttons})`);
        console.log(arr);
        return (h(Host, null,
            h("h2", { class: "title" }, this.titles),
            h("div", { class: "content" }, arr.map(item => {
                return h("p", { onClick: this.bindClick.bind(this, item), class: "item" },
                    h("hc-icon", { name: "arrow-right" }),
                    h("span", null, item));
            })),
            h("div", { class: "footer" }, footer.map(item => {
                return h("p", { class: "button" }, item);
            }))));
    }
    async init(option) {
        const actionsheet = document.createElement('hc-actionsheet');
        const drawer = document.createElement('hc-drawer');
        drawer.setAttribute('direction', 'btt');
        drawer.setAttribute('round', 'true');
        Object.keys(option).forEach(key => {
            actionsheet.setAttribute(key, option[key]);
        });
        actionsheet.setAttribute('service', 'true');
        drawer.setAttribute('role', 'actionsheet');
        drawer.appendChild(actionsheet);
        document.body.appendChild(drawer);
        actionsheet.addEventListener('vclick', () => {
            drawer.destory();
        });
        actionsheet.addEventListener('vchange', () => {
            if (eval(`(${option.buttons})`).length < 2) {
                drawer.destory();
            }
        });
        setTimeout(() => {
            drawer.init();
        }, 30);
        return actionsheet;
    }
    static get is() { return "hc-actionsheet"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["actionsheet.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["actionsheet.css"]
    }; }
    static get properties() { return {
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
                "text": ""
            },
            "attribute": "content",
            "reflect": false
        },
        "current": {
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
            "attribute": "current",
            "reflect": false
        },
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
        "buttons": {
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
            "attribute": "buttons",
            "reflect": false,
            "defaultValue": "`['\u53D6\u6D88']`"
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
        }, {
            "method": "vchange",
            "name": "vchange",
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
        "init": {
            "complexType": {
                "signature": "(option: any) => Promise<HTMLHcActionsheetElement>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "HTMLHcActionsheetElement": {
                        "location": "global"
                    }
                },
                "return": "Promise<HTMLHcActionsheetElement>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "current",
            "methodName": "currentHandle"
        }]; }
}
