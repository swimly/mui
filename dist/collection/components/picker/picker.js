import { Host, h } from "@stencil/core";
import Hammer from 'hammerjs';
export class Picker {
    constructor() {
        this.itemHeight = 44;
        this.vis = 5;
        this.cancelLabel = '取消';
        this.confirmLabel = '确定';
        this.separate = ',';
        this.label = [];
    }
    componentWillLoad() {
        this.parseData(this.value.split(','));
    }
    componentDidLoad() {
        this.bindTouch();
    }
    bindTouch() {
        var items = this.el.shadowRoot.querySelectorAll('.column');
        items.forEach((item, index) => {
            const hammer = new Hammer(item);
            var wrap = item.querySelector('.wrap');
            hammer.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });
            hammer.on('pan', (e) => {
                wrap.style.transition = '0s';
                wrap.style.transform = `translateY(${this.offset[index] + e.deltaY}px)`;
            });
            hammer.on('panend', (e) => {
                this.offset[index] = this.offset[index] + e.deltaY;
                var idx = this.parseYToIndex(this.offset[index]);
                if (idx <= 0) {
                    idx = 0;
                }
                if (idx >= this.formatData[index].length - 1) {
                    idx = this.formatData[index].length - 1;
                }
                this.key[index] = idx;
                wrap.style.transition = '0.3s';
                wrap.style.transform = `translateY(${this.parseIndexToY(this.key[index])}px)`;
                this.key.forEach((key, i) => {
                    if (i > index) {
                        this.key[index] = 0;
                        this.label[i] = '';
                    }
                    else {
                        this.label[i] = this.formatData[i][key].label;
                    }
                });
                this.parseData(this.label);
                this.value = this.label.join(this.separate);
                this.render();
                this.vchange.emit({
                    label: this.value,
                    value: this.selected
                });
            });
        });
    }
    parseIndexToY(index) {
        var pos = (this.vis - 1) / 2 - index;
        return pos * this.itemHeight;
    }
    parseYToIndex(y) {
        var half = (this.vis - 1) / 2 * this.itemHeight;
        var index = Math.round((half - y) / this.itemHeight);
        return index;
    }
    parseData(label) {
        this.selected = [];
        this.formatData = [];
        this.key = [];
        this.offset = [];
        var index = 0;
        var _this = this;
        this.data = typeof this.data == 'string' ? eval(`(${this.data})`) : this.data;
        var current = this.isCascade(this.data) ? this.data : this.data[index];
        while (current && Array.isArray(current) && current.length) {
            _this.formatData.push(current);
            if (label && label[index] !== undefined) {
                current.some(function (item, i) {
                    if (item.label === label[index]) {
                        _this.selected[index] = item;
                        _this.key[index] = i;
                        label[index] = item.label;
                        _this.offset[index] = _this.parseIndexToY(i);
                        return true;
                    }
                });
            }
            if (!_this.selected[index]) {
                _this.selected[index] = current[0];
                _this.key[index] = 0;
                label[index] = current[0].label;
                _this.offset[index] = _this.parseIndexToY(0);
            }
            index++;
            current = _this.isCascade(_this.data) ? _this.selected[_this.selected.length - 1].children : _this.originData[index];
        }
        this.label = label;
        this.value = label.join(this.separate);
    }
    isCascade(data) {
        return data[0] && this.isPlainObject(data[0]);
    }
    _typeof(obj) {
        return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
    }
    isPlainObject(obj) {
        return this._typeof(obj) === 'object';
    }
    onClick(type) {
        this.vclick.emit({
            type: type,
            label: this.value,
            value: this.selected
        });
    }
    render() {
        var { formatData } = this;
        return (h(Host, null,
            h("div", { class: "head", style: { height: `${this.itemHeight}px` } },
                h("p", { class: "cancel", onClick: this.onClick.bind(this, 'cancel') }, this.cancelLabel),
                h("h2", null, this.value),
                h("p", { class: "confirm", onClick: this.onClick.bind(this, 'confirm') }, this.confirmLabel)),
            h("div", { class: "content", style: { height: `${this.itemHeight * this.vis}px` } }, formatData.map((row, index) => {
                return (h("div", { class: "column" },
                    h("div", { class: "indicate", style: { height: `${this.itemHeight}px` } }),
                    h("div", { class: "wrap", style: { transform: `translateY(${this.offset[index]}px)` } }, row.map((item) => {
                        return (h("div", { class: "item", style: { height: `${this.itemHeight}px` } },
                            h("p", null, item.label)));
                    }))));
            }))));
    }
    async init(option) {
        const picker = document.createElement('hc-picker');
        const drawer = document.createElement('hc-drawer');
        drawer.setAttribute('direction', 'btt');
        drawer.setAttribute('round', 'true');
        Object.keys(option).forEach(key => {
            picker.setAttribute(key, option[key]);
        });
        picker.setAttribute('service', 'true');
        drawer.setAttribute('role', 'picker');
        drawer.appendChild(picker);
        document.body.appendChild(drawer);
        picker.addEventListener('vclick', () => {
            drawer.destory();
        });
        setTimeout(() => {
            drawer.init();
        }, 30);
        return picker;
    }
    static get is() { return "hc-picker"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["picker.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["picker.css"]
    }; }
    static get properties() { return {
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
            "reflect": false
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
        "itemHeight": {
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
            "attribute": "item-height",
            "reflect": false,
            "defaultValue": "44"
        },
        "vis": {
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
            "attribute": "vis",
            "reflect": false,
            "defaultValue": "5"
        },
        "cancelLabel": {
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
            "attribute": "cancel-label",
            "reflect": false,
            "defaultValue": "'\u53D6\u6D88'"
        },
        "confirmLabel": {
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
            "attribute": "confirm-label",
            "reflect": false,
            "defaultValue": "'\u786E\u5B9A'"
        },
        "separate": {
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
            "attribute": "separate",
            "reflect": false,
            "defaultValue": "','"
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
        "init": {
            "complexType": {
                "signature": "(option: any) => Promise<HTMLHcPickerElement>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "HTMLHcPickerElement": {
                        "location": "global"
                    }
                },
                "return": "Promise<HTMLHcPickerElement>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
}
