import { Host, h } from "@stencil/core";
export class DropdownItem {
    render() {
        console.log(this.option);
        var option = typeof this.option == 'string' ? eval(`(${this.option})`) : this.option;
        return (h(Host, null,
            h("div", { class: "head" },
                h("h2", { class: "label" }, this.label),
                h("hc-icon", { name: "arrow-down" })),
            h("div", { class: "content" }, option.map((item, index) => {
                return (h("p", { class: "item", id: index }, item.label));
            }))));
    }
    static get is() { return "hc-dropdown-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["dropdown-item.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["dropdown-item.css"]
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
        "option": {
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
            "attribute": "option",
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
        }
    }; }
}
