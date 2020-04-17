import { Host, h } from "@stencil/core";
export class Dropdown {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "hc-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["dropdown.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["dropdown.css"]
    }; }
}
