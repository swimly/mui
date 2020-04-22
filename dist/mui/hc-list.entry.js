import { r as registerInstance, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const List = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ellipsis = `2`;
    }
    componentDidLoad() {
        var slots = this.el.shadowRoot.querySelector('slot');
        var children = slots.assignedElements();
        children.forEach((child, index) => {
            child.setAttribute('type', this.type);
            child.setAttribute('keys', `${index + 1}`);
            child.setAttribute('prefix-size', this.prefixSize);
            child.setAttribute('ellipsis', `${this.ellipsis}`);
            child.setAttribute('vertical', this.vertical);
            child.setAttribute('filter', this.filter);
        });
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { List as hc_list };
