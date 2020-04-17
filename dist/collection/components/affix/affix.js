import { Host, h } from "@stencil/core";
export class Affix {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "hc-affix"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["affix.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["affix.css"]
    }; }
}
