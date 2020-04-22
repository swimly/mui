import { r as registerInstance, d as createEvent, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const CheckboxGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.vichange = createEvent(this, "vichange", 7);
    }
    componentDidLoad() {
        this.$slot = this.el.shadowRoot.querySelector('slot');
        const children = this.$slot.assignedElements();
        this.result = typeof this.value == 'string' ? eval(`(${this.value})`) : this.value;
        this.vichange.emit(this.value);
        // 初始化选中
        children.forEach(item => {
            this.result.forEach(value => {
                if (item.value == value) {
                    item.checked = true;
                }
            });
            item.addEventListener('vchange', (e) => {
                if (e.detail.checked) {
                    this.result = [...this.result, e.detail.value];
                }
                else {
                    // 取消当前选中
                    let value = this.result;
                    const index = this.result.indexOf(e.detail.value);
                    if (index >= 0) {
                        value.splice(index, 1);
                        this.result = value;
                    }
                }
                this.vichange.emit(this.result);
            });
        });
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { CheckboxGroup as hc_checkbox_group };
