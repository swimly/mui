import { Host, h } from "@stencil/core";
export class CheckboxGroup {
    componentDidLoad() {
        this.$slot = this.el.shadowRoot.querySelector('slot');
        const children = this.$slot.assignedElements();
        this.result = typeof this.value == 'string' ? eval(`(${this.value})`) : this.value;
        this.vichange.emit(this.value);
        // 初始化选中
        children.forEach(item => {
            this.result.forEach(value => {
                if (item.value == value) {
                    item.checked = true;
                }
            });
            item.addEventListener('vchange', (e) => {
                if (e.detail.checked) {
                    this.result = [...this.result, e.detail.value];
                }
                else {
                    // 取消当前选中
                    let value = this.result;
                    const index = this.result.indexOf(e.detail.value);
                    if (index >= 0) {
                        value.splice(index, 1);
                        this.result = value;
                    }
                }
                this.vichange.emit(this.result);
            });
        });
    }
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "hc-checkbox-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["checkbox-group.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["checkbox-group.css"]
    }; }
    static get properties() { return {
        "value": {
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
            "attribute": "value",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "vichange",
            "name": "vichange",
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
    static get elementRef() { return "el"; }
}
