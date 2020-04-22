import { r as registerInstance, h, H as Host } from './core-3c51ccf2.js';

const Stepper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.value = 0;
        this.min = 0;
        this.max = 10;
        this.step = 1;
    }
    onClick(v) {
        this.value = this.value + v <= this.min ? this.min : this.value + v > this.max ? this.max : this.value + v;
        console.log(v, this.value);
    }
    render() {
        return (h(Host, null, h("button", { class: "btn", onClick: this.onClick.bind(this, -this.step) }, h("hc-icon", { name: "sami-select" })), h("input", { type: "text", value: this.value, style: { width: `${this.max.toString().length}em` } }), h("button", { class: "btn", onClick: this.onClick.bind(this, this.step) }, h("hc-icon", { name: "add-select" }))));
    }
    static get style() { return ":host {\n  display: flex;\n}\n:host .btn {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 1.8rem;\n  height: 1.8rem;\n  background-color: #e6e6e6;\n  border: none;\n  border-radius: 50%;\n  outline: none;\n}\n:host input {\n  border: 1px solid #e6e6e6;\n  text-align: center;\n  font-size: 0.8rem;\n  color: #262626;\n  display: block;\n  width: auto;\n  min-width: 0;\n  max-width: 4em;\n  margin: 0 0.5rem;\n  outline: none;\n}"; }
};

export { Stepper as hc_stepper };
