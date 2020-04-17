import { Host, h } from "@stencil/core";
import SignaturePad from '../../utils/signature';
export class Signature {
    constructor() {
        this.backgroundColor = '#eee';
        this.penColor = '#333';
    }
    componentDidLoad() {
        this.$signature = this.el.shadowRoot.querySelector('#canvas');
        this.$signature.setAttribute('width', `${this.el.shadowRoot.querySelector('.hc-signature').clientWidth}px`);
        this.signature = new SignaturePad(this.$signature, {
            backgroundColor: this.backgroundColor,
            penColor: this.penColor,
            velocityFilterWeight: .7,
            minWidth: 0.5,
            maxWidth: 2.5,
            throttle: 16,
            minPointDistance: 3
        });
    }
    render() {
        return (h(Host, null,
            h("slot", null,
                h("div", { class: "hc-signature" },
                    h("canvas", { id: "canvas" })))));
    }
    static get is() { return "hc-signature"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["signature.css"]
    }; }
    static get styleUrls() { return {
        "$": ["signature.css"]
    }; }
    static get properties() { return {
        "backgroundColor": {
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
            "attribute": "background-color",
            "reflect": false,
            "defaultValue": "'#eee'"
        },
        "penColor": {
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
            "attribute": "pen-color",
            "reflect": false,
            "defaultValue": "'#333'"
        }
    }; }
    static get elementRef() { return "el"; }
}
