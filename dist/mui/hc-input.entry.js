import { r as registerInstance, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const Input = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = 'text';
        this.placeholder = '请输入';
        this.clearable = false;
    }
    onFocusHandle(e) {
        console.log(e);
    }
    clearHandle() {
        this.$core.value = '';
        this.$clear.style.display = 'none';
    }
    errorHandle(value) {
        this.el.setAttribute('error', value);
    }
    warningHandle(value) {
        this.el.setAttribute('warning', value);
    }
    componentDidLoad() {
        this.$core = this.el.shadowRoot.querySelector('.hc-input__core');
        this.$clear = this.el.shadowRoot.querySelector('#clear');
        if (this.clearable) {
            this.$core.addEventListener('keyup', (e) => {
                if (e.target.value) {
                    this.$clear.style.display = 'flex';
                }
                else {
                    this.$clear.style.display = 'none';
                }
            });
        }
        this.$core.addEventListener('keyup', (e) => {
            const count = this.el.shadowRoot.querySelector('#total');
            count.innerHTML = e.target.value.length;
        });
        this.$core.addEventListener('keydown', (e) => {
            const count = this.el.shadowRoot.querySelector('#total');
            count.innerHTML = e.target.value.length;
        });
    }
    render() {
        return (h(Host, null, h("div", { class: this.getCssClassMap() }, h("div", { class: "hc-input__prefix", style: { color: this.prefixColor, marginRight: this.prefixIcon ? null : '0px' } }, h("slot", { name: "prefix" }, h("hc-icon", { size: 28, name: this.prefixIcon }))), this.type == 'textarea' ? h("textarea", { value: this.value, maxlength: this.maxlength, minlength: this.minlength, rows: 4, class: "hc-input__core" }) : h("input", { value: this.value, maxlength: this.maxlength, minlength: this.minlength, onFocus: this.onFocusHandle.bind(this), placeholder: this.placeholder, class: "hc-input__core", type: this.type }), h("div", { class: "hc-input__notice" }, this.maxlength ? h("span", { class: "hc-input__count" }, h("span", { id: "total" }, "0"), "/", this.maxlength) : '', this.clearable ? h("hc-icon", { onClick: this.clearHandle.bind(this), size: 28, class: "hc-input__clear", id: "clear", name: "reeor-fill" }) : h("span", null)), h("div", { class: "hc-input__suffix", style: { color: this.suffixColor, marginLeft: this.suffixIcon ? null : '0px' } }, h("slot", { name: "suffix" }, h("hc-icon", { size: 28, name: this.suffixIcon }))))));
    }
    getCssClassMap() {
        return {
            'hc-input': true,
            [this.type]: true
        };
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "error": ["errorHandle"],
        "warning": ["warningHandle"]
    }; }
    static get style() { return ":host {\n  display: block;\n  color: inherit;\n}\n:host .hc-input {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n  position: relative;\n  padding: 0 0.5rem;\n  height: 2.2rem;\n}\n:host .hc-input::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid #e6e6e6;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n:host .hc-input.textarea {\n  height: auto;\n  padding-bottom: 1rem;\n  position: relative;\n}\n:host .hc-input.textarea textarea {\n  height: auto !important;\n  border: none;\n  margin: 0.5rem 0;\n}\n:host .hc-input.textarea .hc-input__notice {\n  position: absolute;\n  bottom: 0;\n  height: 1.7rem;\n  padding: 0 0.5rem;\n  right: 0;\n}\n:host .hc-input__count {\n  font-size: 0.7rem;\n  color: #e6e6e6;\n}\n:host .hc-input__notice {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n}\n:host .hc-input__clear {\n  color: #e6e6e6;\n  position: relative;\n  z-index: 100;\n  display: none;\n}\n:host .hc-input__prefix {\n  margin-right: 0.5rem;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n  color: #8c8c8c;\n}\n:host .hc-input__suffix {\n  margin-left: 0.5rem;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n  color: #8c8c8c;\n}\n:host .hc-input__core {\n  -ms-flex: 1;\n  flex: 1;\n  outline: none;\n  font-size: 0.8rem;\n  height: 1rem;\n  border: none;\n  outline: none;\n  -webkit-tap-highlight-color: transparent;\n  position: relative;\n  background: none;\n  margin: 0;\n  color: inherit;\n  z-index: 99;\n  caret-color: #2170D9;\n  font-family: inherit;\n}\n:host .hc-input__core::-webkit-input-placeholder {\n  color: #666;\n  line-height: normal;\n}\n\n:host([shape=conner]) .hc-input {\n  position: relative;\n}\n:host([shape=conner]) .hc-input::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0.6rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid #e6e6e6;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n\n:host([shape=rounder]) .hc-input {\n  position: relative;\n}\n:host([shape=rounder]) .hc-input::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 2.4rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid #e6e6e6;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n\n:host([shape=light]) .hc-input {\n  position: relative;\n  padding: 0;\n  height: auto;\n}\n:host([shape=light]) .hc-input::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid #fff;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n\n:host([shape=fill]) .hc-input {\n  position: relative;\n  background: #fafafb;\n}\n:host([shape=fill]) .hc-input::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid #fff;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n\n:host([shape=fill][error]) .hc-input {\n  position: relative;\n  background: rgba(233, 0, 0, 0.03);\n}\n:host([shape=fill][error]) .hc-input::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid rgba(233, 0, 0, 0.3);\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n:host([shape=fill][error]) .hc-input__core {\n  caret-color: #e90000;\n}\n:host([shape=fill][error]) .hc-input__core::-webkit-input-placeholder {\n  color: rgba(233, 0, 0, 0.3);\n}\n\n:host([shape=line]) .hc-input {\n  position: relative;\n}\n:host([shape=line]) .hc-input::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 200%;\n  height: 1px;\n  background: #e6e6e6;\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n\n:host([error]) .hc-input {\n  position: relative;\n}\n:host([error]) .hc-input::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid #e90000;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n:host([error]) .hc-input__core {\n  caret-color: #e90000;\n}\n:host([error]):after {\n  content: attr(error);\n  font-size: 0.7rem;\n  color: #e90000;\n}\n\n:host([warning]) .hc-input {\n  position: relative;\n}\n:host([warning]) .hc-input::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid #E6A23C;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n:host([warning]) .hc-input__core {\n  caret-color: #E6A23C;\n}\n:host([warning]):after {\n  content: attr(warning);\n  font-size: 0.7rem;\n  color: #E6A23C;\n}\n\n:host([align=right]) .hc-input__core {\n  text-align: right;\n}"; }
};

export { Input as hc_input };
