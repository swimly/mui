import { r as registerInstance, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const Qrcode = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Qrcode as hc_qrcode };
