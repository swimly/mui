import { r as registerInstance, h, H as Host } from './core-3c51ccf2.js';

const Textfield = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("div", { class: "hc-textfield" })));
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Textfield as hc_textfield };
