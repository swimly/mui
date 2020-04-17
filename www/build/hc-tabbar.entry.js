import { r as registerInstance, h, H as Host } from './core-3c51ccf2.js';

const Tabbar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: "/", component: "landing-page", exact: true }), h("stencil-route", { url: "/demos", component: "demos-page" }), h("stencil-route", { url: "/other", component: "other-page" }), h("stencil-route", { component: "page-not-found" })))));
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Tabbar as hc_tabbar };
