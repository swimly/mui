import { r as registerInstance, d as createEvent, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const Radio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icon = 'seleted';
        this.checked = false;
        this.vchange = createEvent(this, "vchange", 7);
    }
    checkedHandle(newValue) {
        console.log(newValue, this.el);
        if (newValue) {
            this.$core.checked = true;
        }
        else {
            this.$core.checked = false;
        }
    }
    nameHandle(newValue) {
        this.$core.setAttribute('name', newValue);
    }
    componentDidLoad() {
        this.$core = this.el.shadowRoot.querySelector('input');
        this.$frame = this.el.shadowRoot.querySelector('.frame');
        this.$slot = this.el.shadowRoot.querySelector('slot');
        if (this.checked) {
            this.$core.setAttribute('checked', 'true');
        }
        this.$core.addEventListener('change', () => {
            if (this.$core.checked) {
                if (this.type) {
                    if (this.type == 'outline') {
                        this.$slot.style.color = this.color;
                        this.$slot.style.borderColor = this.color;
                    }
                    else if (this.type = 'fill') {
                        this.$slot.style.borderColor = this.color;
                        this.$slot.style.backgroundColor = this.color;
                    }
                }
                else {
                    this.$frame.style.backgroundColor = this.color;
                    this.$frame.style.borderColor = this.color;
                }
            }
            else {
                this.$frame.removeAttribute('style');
                this.$slot.removeAttribute('style');
            }
            this.vchange.emit({
                checked: this.$core.checked,
                value: this.value
            });
        });
    }
    render() {
        return (h(Host, null, h("input", { type: "radio" }), h("span", { class: "frame" }, h("hc-icon", { name: this.icon })), h("slot", null), this.checked));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "checked": ["checkedHandle"],
        "name": ["nameHandle"]
    }; }
    static get style() { return ":host {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n  position: relative;\n  font-size: 0.8rem;\n}\n:host .frame {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  border: 1px solid #e6e6e6;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 0.2rem;\n  font-size: 1rem;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  color: #fff;\n}\n:host .frame hc-icon {\n  -webkit-transform: scale(0) rotate(45deg);\n  transform: scale(0) rotate(45deg);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n:host input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  opacity: 0;\n}\n:host input:checked + .frame {\n  background: #2170D9;\n  border-color: #2170D9;\n}\n:host input:checked + .frame hc-icon {\n  -webkit-transform: scale(1) rotate(0deg);\n  transform: scale(1) rotate(0deg);\n}\n:host slot {\n  margin-left: 0.3rem;\n  display: inline-block;\n  line-height: 1.6;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n:host([shape=circle]) .frame {\n  border-radius: 50%;\n}\n\n:host([type=block]),\n:host([type=block-reverse]) {\n  width: 100%;\n  padding: 0.4rem 0;\n  -ms-flex-align: start;\n  align-items: flex-start;\n}\n:host([type=block]) slot,\n:host([type=block-reverse]) slot {\n  -ms-flex: 1;\n  flex: 1;\n  margin-top: -0.2rem;\n}\n\n:host([type=block-reverse]) {\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n}\n:host([type=block-reverse]) slot {\n  margin-right: 1rem;\n}\n\n:host([type=outline]) .frame,\n:host([type=fill]) .frame {\n  display: none;\n}\n:host([type=outline]) input:checked ~ slot,\n:host([type=fill]) input:checked ~ slot {\n  color: #2170D9;\n  border-color: #2170D9;\n}\n:host([type=outline]) slot,\n:host([type=fill]) slot {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 1.4rem;\n  padding: 0 0.5rem;\n  position: relative;\n  border-radius: 0.3rem;\n  margin: 0;\n  border: 1px solid #e6e6e6;\n}\n\n:host([type=fill]) input:checked ~ slot {\n  color: #fff;\n  background-color: #2170D9;\n  border-color: #2170D9;\n}"; }
};

export { Radio as hc_radio };
