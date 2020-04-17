import { Host, h } from "@stencil/core";
export class Row {
    constructor() {
        this.justify = 'flex-start';
    }
    render() {
        return (h(Host, { style: { justifyContent: this.justify } },
            h("slot", null)));
    }
    static get is() { return "hc-row"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["row.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["row.css"]
    }; }
    static get properties() { return {
        "justify": {
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
            "attribute": "justify",
            "reflect": false,
            "defaultValue": "'flex-start'"
        }
    }; }
}
