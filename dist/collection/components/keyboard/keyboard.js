import { Host, h } from "@stencil/core";
import keyCode from './../../utils/keycode';
export class Keyboard {
    constructor() {
        this.type = 'password';
        this.value = '';
        this.vibrate = 0;
    }
    componentDidLoad() {
    }
    renderStyle(item) {
        if (item.width) {
            if (item.width == 'auto') {
                return {
                    flex: '1'
                };
            }
            else {
                return {
                    width: item.width
                };
            }
        }
    }
    typeHandle(value) {
        this.el.setAttribute('type', value);
    }
    valueHandle(value) {
        this.vchange.emit(value);
    }
    bindClick(item) {
        this.touchVibrate(item.keyCode);
        console.log(this);
        if (item.id) {
            if (item.id == 'number' || item.id == 'symbol') {
                this.type = item.id;
                this.render();
            }
            if (item.id == 'case') {
                if (this.type == 'password') {
                    this.type = 'uppercase';
                    this.el.shadowRoot.querySelector('#case').classList.add('active');
                }
                else {
                    this.type = 'password';
                    this.el.shadowRoot.querySelector('#case').classList.remove('active');
                }
            }
            if (item.id == 'back') {
                this.type = 'password';
            }
        }
        else {
            if (item.keyCode == 8) {
                this.value = this.value.substring(0, this.value.length - 1);
            }
            else if (item.keyCode == 13) {
                this.vfinish.emit(this.value);
            }
            else {
                this.value += item.key;
            }
        }
    }
    touchVibrate(time) {
        var timer = time;
        console.log(window);
        if (this.vibrate !== null) {
            if (this.vibrate >= 0) {
                timer = this.vibrate;
            }
            if (navigator.vibrate) {
                navigator.vibrate(timer);
            }
        }
    }
    render() {
        const data = keyCode[this.type];
        return (h(Host, null, data.map(row => {
            return (h("div", { class: "row" }, row.map(item => {
                return h("p", { id: item.id, onClick: this.bindClick.bind(this, item), style: this.renderStyle(item), class: 'key ' + item.type },
                    h("span", { innerHTML: item.key }),
                    h("span", { class: "tool", innerHTML: item.key }));
            })));
        })));
    }
    async init(option) {
        const keyboard = document.createElement('hc-keyboard');
        const drawer = document.createElement('hc-drawer');
        const header = document.createElement('div');
        header.setAttribute('style', `display:flex;flex-direction:row;align-items:center;padding:0 1rem;background:#f5f5f5;`);
        header.innerHTML = `<h2 style="font-size:0.7rem;font-weight:normal;flex:1;color:#2170D9;">安全键盘</h2><hc-icon name="arrow-down"></hc-icon>`;
        drawer.setAttribute('direction', 'btt');
        drawer.setAttribute('mask', 'false');
        Object.keys(option).forEach(key => {
            keyboard.setAttribute(key, option[key]);
        });
        keyboard.setAttribute('service', 'true');
        drawer.setAttribute('role', 'keyboard');
        drawer.appendChild(header);
        drawer.appendChild(keyboard);
        document.body.appendChild(drawer);
        const down = drawer.querySelector('hc-icon');
        down.addEventListener('click', () => {
            drawer.destory();
        });
        setTimeout(() => {
            drawer.init();
        }, 30);
        drawer.addEventListener('vfinish', () => {
            drawer.destory();
            // this.vhide.emit()
        });
        return keyboard;
    }
    static get is() { return "hc-keyboard"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["keyboard.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["keyboard.css"]
    }; }
    static get properties() { return {
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
            "reflect": false,
            "defaultValue": "'password'"
        },
        "value": {
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
            "attribute": "value",
            "reflect": false,
            "defaultValue": "''"
        },
        "vibrate": {
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
            "attribute": "vibrate",
            "reflect": false,
            "defaultValue": "0"
        },
        "tooltip": {
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
            "attribute": "tooltip",
            "reflect": false
        }
    }; }
    static get events() { return [{
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
        }, {
            "method": "vfinish",
            "name": "vfinish",
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
            "method": "vhide",
            "name": "vhide",
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
                "signature": "(option: any) => Promise<HTMLHcKeyboardElement>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "HTMLHcKeyboardElement": {
                        "location": "global"
                    }
                },
                "return": "Promise<HTMLHcKeyboardElement>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "type",
            "methodName": "typeHandle"
        }, {
            "propName": "value",
            "methodName": "valueHandle"
        }]; }
}
