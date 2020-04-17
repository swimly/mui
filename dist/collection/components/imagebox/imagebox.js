import { Host, h } from "@stencil/core";
export class Imagebox {
    componentDidLoad() {
        console.log(this.data);
    }
    render() {
        return (h(Host, null));
    }
    static get is() { return "hc-imagebox"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["imagebox.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["imagebox.css"]
    }; }
    static get properties() { return {
        "data": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "object[]",
                "resolved": "object[]",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
}
