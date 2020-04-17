import { Host, h } from "@stencil/core";
export class RadioGroup {
    componentDidLoad() {
        this.$slot = this.el.shadowRoot.querySelector('slot');
        const children = this.$slot.assignedElements();
        this.vichange.emit(this.value);
        // 初始化选中
        children.forEach(item => {
            if (item.value == this.value) {
                item.checked = true;
            }
            item.addEventListener('vchange', e => {
                children.forEach(radio => {
                    if (radio.value == e.detail.value) {
                        radio.checked = true;
                        this.vichange.emit(e.detail.value);
                    }
                    else {
                        radio.checked = false;
                    }
                });
            });
        });
    }
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "hc-radio-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["radio-group.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["radio-group.css"]
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
        "name": {
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
            "attribute": "name",
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
