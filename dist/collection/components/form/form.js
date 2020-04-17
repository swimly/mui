import { Host, h } from "@stencil/core";
export class Form {
    componentDidLoad() {
        const slot = this.el.shadowRoot.querySelector('slot');
        const children = slot.assignedElements();
        children.forEach((child) => {
            child.setAttribute('label-width', this.labelWidth);
            child.setAttribute('label-position', this.labelPosition);
        });
    }
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "hc-form"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["form.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["form.css"]
    }; }
    static get properties() { return {
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
        }
    }; }
    static get elementRef() { return "el"; }
}
