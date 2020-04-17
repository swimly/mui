import { r as registerInstance, h, H as Host } from './core-3c51ccf2.js';

const Row = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.justify = 'flex-start';
    }
    render() {
        return (h(Host, { style: { justifyContent: this.justify } }, h("slot", null)));
    }
    static get style() { return ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}"; }
};

export { Row as hc_row };
