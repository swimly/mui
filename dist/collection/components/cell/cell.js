import { Host, h } from "@stencil/core";
export class Cell {
    constructor() {
        this.iconSize = 42;
        this.middle = false;
    }
    render() {
        return (h(Host, null,
            (() => {
                if (this.iconUrl) {
                    return (h("hc-image", { style: { marginRight: `0.5rem` }, width: this.iconSize, height: this.iconSize, src: this.iconUrl }));
                }
            })(),
            h("div", { class: "label" },
                h("h2", null, this.label),
                h("p", null, this.subject)),
            h("div", { class: "value" },
                h("slot", null, this.value)),
            (() => {
                if (this.arrowDirection) {
                    return (h("hc-icon", { name: `arrow-${this.arrowDirection}` }));
                }
            })()));
    }
    static get is() { return "hc-cell"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["cell.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["cell.css"]
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
        "subject": {
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
            "attribute": "subject",
            "reflect": false
        },
        "iconUrl": {
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
            "attribute": "icon-url",
            "reflect": false
        },
        "iconSize": {
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
            "attribute": "icon-size",
            "reflect": false,
            "defaultValue": "42"
        },
        "middle": {
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
            "attribute": "middle",
            "reflect": false,
            "defaultValue": "false"
        },
        "arrowDirection": {
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
            "attribute": "arrow-direction",
            "reflect": false
        }
    }; }
}
