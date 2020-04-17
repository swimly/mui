import { Host, h } from "@stencil/core";
export class Textfield {
    render() {
        return (h(Host, null,
            h("div", { class: "hc-textfield" })));
    }
    static get is() { return "hc-textfield"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["textfield.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["textfield.css"]
    }; }
}
