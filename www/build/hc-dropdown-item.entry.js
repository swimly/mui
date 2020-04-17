import { r as registerInstance, h, H as Host } from './core-3c51ccf2.js';

const DropdownItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        console.log(this.option);
        var option = typeof this.option == 'string' ? eval(`(${this.option})`) : this.option;
        return (h(Host, null, h("div", { class: "head" }, h("h2", { class: "label" }, this.label), h("hc-icon", { name: "arrow-down" })), h("div", { class: "content" }, option.map((item, index) => {
            return (h("p", { class: "item", id: index }, item.label));
        }))));
    }
    static get style() { return ":host {\n  display: block;\n  -ms-flex: 1;\n  flex: 1;\n}\n:host .head {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 2.4rem;\n  background: #fff;\n}\n:host .head .label {\n  font-weight: normal;\n  font-size: 0.8rem;\n  color: #262626;\n  margin: 0;\n}\n:host .content {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 2.4rem;\n  background: #fff;\n}"; }
};

export { DropdownItem as hc_dropdown_item };
