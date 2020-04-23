import { r as registerInstance, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const Switch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    valueHandle(value) {
        this.el.setAttribute('value', `${value}`);
    }
    componentDidLoad() {
        const core = this.el.shadowRoot.querySelector('input');
        core.addEventListener('change', () => {
            this.value = core.checked;
        });
    }
    render() {
        return (h(Host, null, h("label", null, h("input", { checked: this.value, class: "hc-switch hc-switch-anim", type: "checkbox" })), h("slot", null)));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "value": ["valueHandle"]
    }; }
    static get style() { return ":host .hc-switch {\n  width: 2rem;\n  height: 1rem;\n  position: relative;\n  border: 1px solid #dfdfdf;\n  background-color: #fdfdfd;\n  -webkit-box-shadow: #dfdfdf 0 0 0 0 inset;\n  box-shadow: #dfdfdf 0 0 0 0 inset;\n  border-radius: 1rem;\n  background-clip: content-box;\n  display: inline-block;\n  -webkit-appearance: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  outline: none;\n}\n:host .hc-switch:before {\n  content: \"\";\n  width: 1rem;\n  height: 1rem;\n  position: absolute;\n  top: -1px;\n  left: 0;\n  border-radius: 1rem;\n  background-color: #fff;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n}\n:host .hc-switch:checked {\n  border-color: #2170D9;\n  -webkit-box-shadow: #2170D9 0 0 0 0.8rem inset;\n  box-shadow: #2170D9 0 0 0 0.8rem inset;\n  background-color: #2170D9;\n}\n:host .hc-switch:checked:before {\n  left: 1rem;\n}\n:host .hc-switch.hc-switch-animbg {\n  -webkit-transition: background-color ease 0.4s;\n  transition: background-color ease 0.4s;\n}\n:host .hc-switch.hc-switch-animbg:before {\n  -webkit-transition: left 0.3s;\n  transition: left 0.3s;\n}\n:host .hc-switch.hc-switch-animbg:checked {\n  -webkit-box-shadow: #dfdfdf 0 0 0 0 inset;\n  box-shadow: #dfdfdf 0 0 0 0 inset;\n  background-color: #2170D9;\n  -webkit-transition: border-color 0.4s, background-color ease 0.4s;\n  transition: border-color 0.4s, background-color ease 0.4s;\n}\n:host .hc-switch.hc-switch-animbg:checked:before {\n  -webkit-transition: left 0.3s;\n  transition: left 0.3s;\n}\n:host .hc-switch.hc-switch-anim {\n  -webkit-transition: border cubic-bezier(0, 0, 0, 1) 0.4s, -webkit-box-shadow cubic-bezier(0, 0, 0, 1) 0.4s;\n  transition: border cubic-bezier(0, 0, 0, 1) 0.4s, -webkit-box-shadow cubic-bezier(0, 0, 0, 1) 0.4s;\n  transition: border cubic-bezier(0, 0, 0, 1) 0.4s, box-shadow cubic-bezier(0, 0, 0, 1) 0.4s;\n  transition: border cubic-bezier(0, 0, 0, 1) 0.4s, box-shadow cubic-bezier(0, 0, 0, 1) 0.4s, -webkit-box-shadow cubic-bezier(0, 0, 0, 1) 0.4s;\n}\n:host .hc-switch.hc-switch-anim:before {\n  -webkit-transition: left 0.3s;\n  transition: left 0.3s;\n}\n:host .hc-switch.hc-switch-anim:checked {\n  -webkit-box-shadow: #2170D9 0 0 0 0.8rem inset;\n  box-shadow: #2170D9 0 0 0 0.8rem inset;\n  background-color: #2170D9;\n  -webkit-transition: border ease 0.4s, background-color ease 1.2s, -webkit-box-shadow ease 0.4s;\n  transition: border ease 0.4s, background-color ease 1.2s, -webkit-box-shadow ease 0.4s;\n  transition: border ease 0.4s, box-shadow ease 0.4s, background-color ease 1.2s;\n  transition: border ease 0.4s, box-shadow ease 0.4s, background-color ease 1.2s, -webkit-box-shadow ease 0.4s;\n}\n:host .hc-switch.hc-switch-anim:checked:before {\n  -webkit-transition: left 0.3s;\n  transition: left 0.3s;\n}"; }
};

export { Switch as hc_switch };
