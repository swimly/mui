import { Host, h } from "@stencil/core";
export class FormItem {
    constructor() {
        this.suffixSize = 28;
        this.prefixSize = 28;
    }
    labelWidthHandle(value) {
        const $label = this.el.shadowRoot.querySelector('.label');
        $label.style.width = value;
    }
    labelPositionHandle(value) {
        this.el.setAttribute('label-position', value);
    }
    render() {
        return (h(Host, null,
            h("hc-icon", { size: this.suffixSize, color: this.suffixColor, class: "icon", name: this.prefixIcon }),
            h("h2", { class: "label" },
                h("slot", { name: "label" }, this.label),
                h("slot", { name: "tip" }, this.tip)),
            h("p", { class: "value" },
                h("slot", null, this.value)),
            h("hc-icon", { size: this.suffixSize, color: this.suffixColor, class: "icon", name: this.suffixIcon })));
    }
    static get is() { return "hc-form-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["form-item.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["form-item.css"]
    }; }
    static get properties() { return {
        "label": {
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
            "attribute": "label",
            "reflect": false
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
            "reflect": false
        },
        "tip": {
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
            "attribute": "tip",
            "reflect": false
        },
        "suffixIcon": {
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
            "attribute": "suffix-icon",
            "reflect": false
        },
        "prefixIcon": {
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
            "attribute": "prefix-icon",
            "reflect": false
        },
        "labelWidth": {
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
            "attribute": "label-width",
            "reflect": false
        },
        "labelPosition": {
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
            "attribute": "label-position",
            "reflect": false
        },
        "suffixSize": {
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
            "attribute": "suffix-size",
            "reflect": false,
            "defaultValue": "28"
        },
        "prefixSize": {
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
            "attribute": "prefix-size",
            "reflect": false,
            "defaultValue": "28"
        },
        "suffixColor": {
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
            "attribute": "suffix-color",
            "reflect": false
        },
        "prefixColor": {
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
            "attribute": "prefix-color",
            "reflect": false
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "labelWidth",
            "methodName": "labelWidthHandle"
        }, {
            "propName": "labelPosition",
            "methodName": "labelPositionHandle"
        }]; }
}
