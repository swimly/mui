import { Host, h } from "@stencil/core";
export class Tabbar {
    render() {
        return (h(Host, null,
            h("stencil-router", null,
                h("stencil-route-switch", { scrollTopOffset: 0 },
                    h("stencil-route", { url: "/", component: "landing-page", exact: true }),
                    h("stencil-route", { url: "/demos", component: "demos-page" }),
                    h("stencil-route", { url: "/other", component: "other-page" }),
                    h("stencil-route", { component: "page-not-found" })))));
    }
    static get is() { return "hc-tabbar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["tabbar.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["tabbar.css"]
    }; }
}
