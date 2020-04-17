import { r as registerInstance, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const Form = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        const slot = this.el.shadowRoot.querySelector('slot');
        const children = slot.assignedElements();
        children.forEach((child) => {
            child.setAttribute('label-width', this.labelWidth);
            child.setAttribute('label-position', this.labelPosition);
        });
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Form as hc_form };
