import { r as registerInstance, d as createEvent, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const Button = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * 按钮类型
         */
        this.type = 'default';
        /**
         * 按钮形状
         */
        this.shape = 'default';
        /**
         * 自定义按钮颜色
         */
        this.color = '';
        this.disabled = false;
        this.vclick = createEvent(this, "vclick", 7);
    }
    renderClassName() {
        return `hc-button`;
    }
    componentDidLoad() {
        if (!this.disabled) {
            this.el.addEventListener('click', (e) => {
                this.el.setAttribute('active', 'true');
                this.vclick.emit(e);
                setTimeout(() => {
                    this.el.removeAttribute('active');
                }, 200);
            });
        }
        if (this.color) {
            this.el.style.backgroundColor = this.color;
        }
    }
    async loading() {
        const loading = this.el.shadowRoot.querySelector('#loading');
        this.el.setAttribute('disabled', 'true');
        loading.setAttribute('spin', 'true');
        loading.style.display = 'inline-flex';
    }
    async finishloading() {
        const loading = this.el.shadowRoot.querySelector('#loading');
        this.el.removeAttribute('disabled');
        loading.removeAttribute('spin');
        loading.style.display = 'none';
    }
    render() {
        const classMap = this.getCssClassMap();
        return (h(Host, { class: classMap }, h("hc-icon", { name: "loading", id: "loading", style: { display: 'none' } }), this.icon ? h("hc-icon", { name: this.icon }) : h("span", null), h("span", { class: "hc-button__label" }, h("slot", null))));
    }
    getCssClassMap() {
        return {
            'hc-button': true,
            [this.type]: true,
            [this.shape]: true
        };
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 2.4rem;\n  -ms-flex-pack: center;\n  justify-content: center;\n  background-color: #fff;\n  position: relative;\n  position: relative;\n}\n:host::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid #e6e6e6;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n:host .hc-button__label {\n  font-size: 0.8rem;\n  color: inherit;\n}\n:host:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  left: 0;\n  z-index: 100;\n  background: rgba(38, 38, 38, 0.1);\n  opacity: 0;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n:host([disabled=true]):before {\n  opacity: 1;\n  background: rgba(255, 255, 255, 0.8);\n}\n\n:host([active=true]):before {\n  opacity: 1;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n:host([type]), :host([color]) {\n  color: #fff;\n}\n\n:host([type=info]) {\n  background-color: #f5f5f5;\n  position: relative;\n  color: #262626;\n}\n:host([type=info])::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid #f5f5f5;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n\n:host([type=info][plain]) {\n  background-color: rgba(245, 245, 245, 0.1);\n  color: #262626;\n}\n:host([type=info][plain]):before {\n  background-color: rgba(245, 245, 245, 0.1);\n}\n\n:host([type=primary]) {\n  background-color: #2170D9;\n  position: relative;\n}\n:host([type=primary])::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid #2170D9;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n\n:host([type=primary][plain]) {\n  background-color: rgba(33, 112, 217, 0.1);\n  color: #2170D9;\n}\n:host([type=primary][plain]):before {\n  background-color: rgba(33, 112, 217, 0.1);\n}\n\n:host([type=danger][plain]) {\n  background-color: rgba(233, 0, 0, 0.1);\n  color: #e90000;\n}\n:host([type=danger][plain]):before {\n  background-color: rgba(233, 0, 0, 0.1);\n}\n\n:host([type=primary][outline]) {\n  background-color: #fff;\n  color: #2170D9;\n}\n:host([type=primary][outline]):before {\n  background-color: rgba(33, 112, 217, 0.1);\n}\n\n:host([type=danger][outline]) {\n  background-color: #fff;\n  color: #e90000;\n}\n:host([type=danger][outline]):before {\n  background-color: rgba(233, 0, 0, 0.1);\n}\n\n:host([type=danger]) {\n  background-color: #e90000;\n  position: relative;\n}\n:host([type=danger])::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid #e90000;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n\n:host([shape=conner]) {\n  border-radius: 0.3rem;\n}\n\n:host([shape=rounder]) {\n  position: relative;\n  border-radius: 1.4rem;\n}\n:host([shape=rounder])::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 2.8rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid #e6e6e6;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n:host([shape=rounder]):before {\n  border-radius: 1.4rem;\n}\n\n:host([type=primary][shape=conner]) {\n  border-radius: 0.3rem;\n  position: relative;\n}\n:host([type=primary][shape=conner])::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0.6rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid #2170D9;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n\n:host([type=primary][shape=rounder]) {\n  border-radius: 1.2rem;\n  position: relative;\n}\n:host([type=primary][shape=rounder])::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 2.4rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid #2170D9;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n\n:host([type=danger][shape=conner]) {\n  border-radius: 0.3rem;\n  position: relative;\n}\n:host([type=danger][shape=conner])::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0.6rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid #e90000;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n\n:host([type=danger][shape=rounder]) {\n  border-radius: 1.2rem;\n  position: relative;\n}\n:host([type=danger][shape=rounder])::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 2.4rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid #e90000;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n\n:host([shape=rounder]) {\n  border-radius: 1.4rem;\n}\n\n:host([size]) {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  padding: 0 1rem;\n}\n\n:host([size=mini]) {\n  height: 1.8rem;\n}\n\n:host([size=small]) {\n  height: 1.9rem;\n}\n\n:host([size=large]) {\n  height: 2rem;\n}"; }
};

export { Button as hc_button };
