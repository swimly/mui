import { Host, h } from "@stencil/core";
export class List {
    constructor() {
        this.ellipsis = `2`;
    }
    componentDidLoad() {
        var slots = this.el.shadowRoot.querySelector('slot');
        var children = slots.assignedElements();
        children.forEach((child, index) => {
            child.setAttribute('type', this.type);
            child.setAttribute('key', `${index + 1}`);
            child.setAttribute('prefix-size', this.prefixSize);
            child.setAttribute('ellipsis', `${this.ellipsis}`);
            child.setAttribute('vertical', this.vertical);
            child.setAttribute('filter', this.filter);
        });
    }
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "hc-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["list.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["list.css"]
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
            "reflect": false
        },
        "ellipsis": {
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
            "attribute": "ellipsis",
            "reflect": false,
            "defaultValue": "`2`"
        },
        "prefixSize": {
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
            "attribute": "prefix-size",
            "reflect": false
        },
        "vertical": {
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
            "attribute": "vertical",
            "reflect": false
        },
        "filter": {
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
            "attribute": "filter",
            "reflect": false
        }
    }; }
    static get elementRef() { return "el"; }
}
