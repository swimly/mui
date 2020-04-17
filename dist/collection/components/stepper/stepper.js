import { Host, h } from "@stencil/core";
export class Stepper {
    constructor() {
        this.value = 0;
        this.min = 0;
        this.max = 10;
        this.step = 1;
    }
    onClick(v) {
        this.value = this.value + v <= this.min ? this.min : this.value + v > this.max ? this.max : this.value + v;
        console.log(v, this.value);
    }
    render() {
        return (h(Host, null,
            h("button", { class: "btn", onClick: this.onClick.bind(this, -this.step) },
                h("hc-icon", { name: "sami-select" })),
            h("input", { type: "text", value: this.value, style: { width: `${this.max.toString().length}em` } }),
            h("button", { class: "btn", onClick: this.onClick.bind(this, this.step) },
                h("hc-icon", { name: "add-select" }))));
    }
    static get is() { return "hc-stepper"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["stepper.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["stepper.css"]
    }; }
    static get properties() { return {
        "value": {
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
            "attribute": "value",
            "reflect": false,
            "defaultValue": "0"
        },
        "min": {
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
            "attribute": "min",
            "reflect": false,
            "defaultValue": "0"
        },
        "max": {
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
            "attribute": "max",
            "reflect": false,
            "defaultValue": "10"
        },
        "step": {
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
            "attribute": "step",
            "reflect": false,
            "defaultValue": "1"
        }
    }; }
}
