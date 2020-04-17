import { r as registerInstance, h, H as Host } from './core-3c51ccf2.js';

const Dropdown = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n  position: relative;\n}"; }
};

export { Dropdown as hc_dropdown };
