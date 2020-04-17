import { r as registerInstance, h, H as Host } from './core-3c51ccf2.js';

const Affix = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Affix as hc_affix };
