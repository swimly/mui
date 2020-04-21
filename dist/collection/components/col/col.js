import { Host, h } from "@stencil/core";
export class Col {
    constructor() {
        this.span = 24;
        this.align = 'center';
    }
    render() {
        return (h(Host, { style: this.flex ? { flex: `${this.flex}`, textAlign: this.align } : { width: `${this.span / 24 * 100}%`, textAlign: this.align } },
            h("slot", null)));
    }
    static get is() { return "hc-col"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["col.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["col.css"]
    }; }
    static get properties() { return {
        "span": {
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
            "attribute": "span",
            "reflect": false,
            "defaultValue": "24"
        },
        "flex": {
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
            "attribute": "flex",
            "reflect": false
        },
        "align": {
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
            "attribute": "align",
            "reflect": false,
            "defaultValue": "'center'"
        }
    }; }
    static get elementRef() { return "el"; }
}
