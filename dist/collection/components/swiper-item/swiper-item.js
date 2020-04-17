import { Host, h } from "@stencil/core";
export class SwiperItem {
    render() {
        return (h(Host, { style: { width: `${this.width}px`, height: `${this.height}px` } },
            h("slot", null)));
    }
    static get is() { return "hc-swiper-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["swiper-item.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["swiper-item.css"]
    }; }
    static get properties() { return {
        "width": {
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
            "attribute": "width",
            "reflect": false
        },
        "height": {
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
            "attribute": "height",
            "reflect": false
        }
    }; }
}
