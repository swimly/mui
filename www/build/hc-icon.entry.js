import { r as registerInstance, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const Icon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.spin = false;
    }
    componentDidLoad() {
        const use = this.el.shadowRoot.querySelector('#use');
        const svg = this.el.shadowRoot.querySelector('.hc-icon');
        use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `../../assets/iconfont.svg#icon-${this.name}`);
        if (this.size) {
            svg.style.fontSize = `${this.size}px`;
            svg.style.width = `${this.size}px`;
            svg.style.height = `${this.size}px`;
        }
        svg.style.color = this.color;
        if (!this.name) {
            this.el.style.display = 'none';
        }
        if (this.spin) {
            this.el.setAttribute('spin', 'true');
        }
    }
    spinHandle(newValue) {
        if (newValue) {
            this.el.setAttribute('spin', `${newValue}`);
        }
        else {
            this.el.removeAttribute('spin');
        }
    }
    render() {
        return (h(Host, null, h("svg", { class: "hc-icon", "aria-hidden": "true" }, h("use", { id: "use" }))));
    }
    static get assetsDirs() { return ["assets"]; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "spin": ["spinHandle"]
    }; }
    static get style() { return ":host {\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  transform-origin: center center;\n}\n:host .hc-resource {\n  display: none;\n}\n:host .hc-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n  fill: currentColor;\n  overflow: hidden;\n}\n:host .hc-icon svg {\n  color: inherit;\n  font-size: inherit;\n}\n\n:host([spin]) .hc-icon {\n  animation: rotate 0.8s linear infinite;\n}\n\n\@keyframes rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}"; }
};

export { Icon as hc_icon };
