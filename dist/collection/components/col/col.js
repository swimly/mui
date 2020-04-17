import { Host, h } from "@stencil/core";
export class Col {
    constructor() {
        this.span = 24;
    }
    render() {
        return (h(Host, { style: this.flex ? { flex: `${this.flex}` } : { width: `${this.span / 24 * 100}%` } },
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
        }
    }; }
    static get elementRef() { return "el"; }
}
