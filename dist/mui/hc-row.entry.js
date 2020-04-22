import { r as registerInstance, h, H as Host } from './core-3c51ccf2.js';

const Row = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.justify = 'flex-start';
        this.align = 'flex-start';
    }
    render() {
        return (h(Host, { style: { justifyContent: this.justify, alignItems: this.align } }, h("slot", null)));
    }
    static get style() { return ":host {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}"; }
};

export { Row as hc_row };
