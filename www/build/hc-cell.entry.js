import { r as registerInstance, h, H as Host } from './core-3c51ccf2.js';

const Cell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.iconSize = 42;
        this.middle = false;
    }
    render() {
        return (h(Host, null, (() => {
            if (this.iconUrl) {
                return (h("hc-image", { style: { marginRight: `0.5rem` }, width: this.iconSize, height: this.iconSize, src: this.iconUrl }));
            }
        })(), h("div", { class: "label" }, h("h2", null, this.label), h("p", null, this.subject)), h("div", { class: "value" }, h("slot", null, this.value)), (() => {
            if (this.arrowDirection) {
                return (h("hc-icon", { name: `arrow-${this.arrowDirection}` }));
            }
        })()));
    }
    static get style() { return ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  font-size: 0.8rem;\n  padding: 0.7rem 0;\n  position: relative;\n}\n:host:after {\n  content: \"\";\n  display: inline-block;\n  width: 100%;\n  height: 1px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background: #e6e6e6;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\n:host * {\n  margin: 0;\n  font-weight: normal;\n  font-size: inherit;\n  color: inherit;\n}\n:host .label {\n  -ms-flex: 1;\n  flex: 1;\n  color: #262626;\n}\n:host .label p {\n  font-size: 0.7rem;\n  color: #8c8c8c;\n}\n:host .value {\n  text-align: right;\n  color: #f5f5f5;\n}\n\n:host([middle]) {\n  -ms-flex-align: center;\n  align-items: center;\n}"; }
};

export { Cell as hc_cell };
