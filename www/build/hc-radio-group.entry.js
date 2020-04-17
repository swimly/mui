import { r as registerInstance, d as createEvent, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const RadioGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.vichange = createEvent(this, "vichange", 7);
    }
    componentDidLoad() {
        this.$slot = this.el.shadowRoot.querySelector('slot');
        const children = this.$slot.assignedElements();
        this.vichange.emit(this.value);
        // 初始化选中
        children.forEach(item => {
            if (item.value == this.value) {
                item.checked = true;
            }
            item.addEventListener('vchange', e => {
                children.forEach(radio => {
                    if (radio.value == e.detail.value) {
                        radio.checked = true;
                        this.vichange.emit(e.detail.value);
                    }
                    else {
                        radio.checked = false;
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

export { RadioGroup as hc_radio_group };
