import { Host, h } from "@stencil/core";
export class Qrcode {
    componentDidLoad() {
    }
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "hc-qrcode"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["qrcode.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["qrcode.css"]
    }; }
    static get elementRef() { return "el"; }
}
