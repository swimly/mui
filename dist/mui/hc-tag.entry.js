import { r as registerInstance, h, H as Host, c as getElement } from './core-3c51ccf2.js';
import { c as colorRgba } from './utils-4b86c34e.js';

const Tag = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        this.renderCss();
    }
    async renderCss() {
        const { el, color, shape } = this;
        let style;
        if (color) {
            if (shape == 'plain') {
                style = `background-color:${colorRgba(color, 0.1)};color:${color};border:1px solid ${color}`;
            }
            else if (shape == 'outline') {
                style = `background-color:#fff;color:${color};border:1px solid ${color}`;
            }
            else if (shape == 'light') {
                style = `color:${color}`;
            }
            else {
                style = `background-color:${colorRgba(color, 1)};color:#fff;border:1px solid ${color}`;
            }
        }
        el.setAttribute('style', style);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-size: 0.7rem;\n  position: relative;\n  height: 1.4rem;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 0 0.8rem;\n  border-radius: 0.2rem;\n  background-color: #fff;\n  color: #262626;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n:host::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0.5rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid #e6e6e6;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n\n:host([color]) {\n  position: relative;\n}\n:host([color])::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0.5rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid transparent;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n\n:host([type]) {\n  color: #fff;\n  position: relative;\n}\n:host([type])::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0.5rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid transparent;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n\n:host([type=primary]) {\n  background-color: #2170D9;\n}\n\n:host([type=primary][shape=plain]) {\n  background-color: rgba(33, 112, 217, 0.1);\n  position: relative;\n  color: #2170D9;\n}\n:host([type=primary][shape=plain])::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0.5rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid #2170D9;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n\n:host([type=primary][shape=outline]) {\n  position: relative;\n  color: #2170D9;\n  background-color: #fff;\n}\n:host([type=primary][shape=outline])::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0.5rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid #2170D9;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n\n:host([type=primary][shape=light]) {\n  position: relative;\n  color: #2170D9;\n  background-color: #fff;\n}\n:host([type=primary][shape=light])::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0.5rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid #e6e6e6;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n\n:host([type=danger]) {\n  background-color: #e90000;\n}\n\n:host([type=danger][shape=plain]) {\n  background-color: rgba(233, 0, 0, 0.1);\n  position: relative;\n  color: #e90000;\n}\n:host([type=danger][shape=plain])::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0.5rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid #e90000;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n\n:host([type=danger][shape=outline]) {\n  position: relative;\n  color: #e90000;\n  background-color: #fff;\n}\n:host([type=danger][shape=outline])::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0.5rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid #e90000;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n\n:host([type=danger][shape=light]) {\n  position: relative;\n  color: #e90000;\n  background-color: #fff;\n}\n:host([type=danger][shape=light])::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0.5rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid #e6e6e6;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n\n:host([shape=rounder]) {\n  position: relative;\n  border-radius: 1.5rem;\n}\n:host([shape=rounder])::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 3rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid transparent;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}"; }
};

export { Tag as hc_tag };
