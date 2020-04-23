import { r as registerInstance, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const FormItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.suffixSize = 28;
        this.prefixSize = 28;
    }
    labelWidthHandle(value) {
        const $label = this.el.shadowRoot.querySelector('.label');
        $label.style.width = value;
    }
    labelPositionHandle(value) {
        this.el.setAttribute('label-position', value);
    }
    render() {
        return (h(Host, null, h("hc-icon", { size: this.suffixSize, color: this.suffixColor, class: "icon", name: this.prefixIcon }), h("h2", { class: "label" }, h("slot", { name: "label" }, this.label), h("slot", { name: "tip" }, this.tip)), h("p", { class: "value" }, h("slot", null, this.value)), h("hc-icon", { size: this.suffixSize, color: this.suffixColor, class: "icon", name: this.suffixIcon })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "labelWidth": ["labelWidthHandle"],
        "labelPosition": ["labelPositionHandle"]
    }; }
    static get style() { return ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n  font-size: 0.8rem;\n  color: #262626;\n  padding: 0.8rem 0;\n  position: relative;\n}\n:host::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 200%;\n  height: 1px;\n  background: #e6e6e6;\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n:host .label {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  font-weight: normal;\n  font-size: inherit;\n  margin: 0;\n}\n:host .value {\n  -ms-flex: 1;\n  flex: 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  color: #8c8c8c;\n  margin: 0;\n}\n:host .icon {\n  color: #e6e6e6;\n}\n\n:host([label-position=top]) {\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  padding: 0.5rem 0;\n}\n:host([label-position=top]) .value {\n  margin-top: 0.3rem;\n}"; }
};

export { FormItem as hc_form_item };
