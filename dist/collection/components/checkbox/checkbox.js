import { Host, h } from "@stencil/core";
export class Checkbox {
    constructor() {
        this.icon = 'seleted';
        this.checked = false;
    }
    checkedHandle(newValue) {
        if (newValue) {
            this.$core.setAttribute('checked', 'true');
        }
        else {
            this.$core.removeAttribute('checked');
        }
    }
    componentDidLoad() {
        this.$core = this.el.shadowRoot.querySelector('input');
        this.$frame = this.el.shadowRoot.querySelector('.frame');
        this.$slot = this.el.shadowRoot.querySelector('slot');
        if (this.checked) {
            this.$core.setAttribute('checked', 'true');
        }
        this.$core.addEventListener('change', () => {
            if (this.$core.checked) {
                if (this.type) {
                    if (this.type == 'outline') {
                        this.$slot.style.color = this.color;
                        this.$slot.style.borderColor = this.color;
                    }
                    else if (this.type = 'fill') {
                        this.$slot.style.borderColor = this.color;
                        this.$slot.style.backgroundColor = this.color;
                    }
                }
                else {
                    this.$frame.style.backgroundColor = this.color;
                    this.$frame.style.borderColor = this.color;
                }
            }
            else {
                this.$frame.removeAttribute('style');
                this.$slot.removeAttribute('style');
            }
            this.vchange.emit({
                checked: this.$core.checked,
                value: this.value
            });
        });
    }
    render() {
        return (h(Host, null,
            h("input", { type: "checkbox" }),
            h("span", { class: "frame" },
                h("hc-icon", { name: this.icon })),
            h("slot", null)));
    }
    static get is() { return "hc-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["checkbox.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["checkbox.css"]
    }; }
    static get properties() { return {
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
            "reflect": false,
            "defaultValue": "'seleted'"
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
                "text": ""
            },
            "attribute": "color",
            "reflect": false
        },
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
        },
        "shape": {
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
            "attribute": "shape",
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
                "text": ""
            },
            "attribute": "type",
            "reflect": false
        },
        "checked": {
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
            "attribute": "checked",
            "reflect": false,
            "defaultValue": "false"
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
        }]; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "checked",
            "methodName": "checkedHandle"
        }]; }
}
