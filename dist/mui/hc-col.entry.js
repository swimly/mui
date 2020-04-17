import { r as registerInstance, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const Col = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.span = 24;
    }
    render() {
        return (h(Host, { style: this.flex ? { flex: `${this.flex}` } : { width: `${this.span / 24 * 100}%` } }, h("slot", null)));
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Col as hc_col };
