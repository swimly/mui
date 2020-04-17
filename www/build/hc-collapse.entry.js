import { r as registerInstance, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const Collapse = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.accordion = false;
    }
    componentDidLoad() {
        var open = this.open ? this.open.split(',') : [];
        var slots = this.el.shadowRoot.querySelector('slot');
        var children = slots.assignedElements();
        children.forEach((item, index) => {
            if (!item.getAttribute('name')) {
                item.setAttribute('name', `${index}`);
            }
            if (open.indexOf(item.getAttribute('name')) >= 0) {
                item.setAttribute('open', `true`);
            }
            item.addEventListener('vchange', (e) => {
                var detail = e.detail;
                var i = open.indexOf(detail.name);
                if (i >= 0) {
                    open.splice(i, 1);
                }
                else {
                    if (this.accordion) {
                        open = [detail.name];
                    }
                    else {
                        open.push(detail.name);
                    }
                }
                this.open = open.join(',');
                children.forEach((son) => {
                    if (open.indexOf(son.getAttribute('name')) >= 0) {
                        son.setAttribute('open', `true`);
                    }
                    else {
                        son.removeAttribute('open');
                    }
                });
            });
        });
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Collapse as hc_collapse };
