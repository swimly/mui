import { r as registerInstance, d as createEvent, h, H as Host } from './core-3c51ccf2.js';

const TabbarItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.active = false;
        this.vclick = createEvent(this, "vclick", 7);
    }
    bindClick() {
        this.vclick.emit({
            index: this.index
        });
    }
    render() {
        return (h(Host, { style: { color: this.active ? this.activeColor : this.defaultColor, backgroundColor: this.background }, onClick: this.bindClick.bind(this) }, (() => {
            if (this.badge) {
                return (h("p", { class: "badge" }, this.badge));
            }
        })(), h("div", { class: "icon", style: { width: `${this.iconSize}px`, height: `${this.iconSize}px` } }, h("hc-image", { src: this.defaultIcon, width: this.iconSize, height: this.iconSize }), h("hc-image", { src: this.activeIcon, width: this.iconSize, height: this.iconSize })), h("p", { class: "label" }, this.label)));
    }
    static get style() { return ":host {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 0.5rem;\n  color: #8c8c8c;\n  height: 2.4rem;\n  justify-content: center;\n  flex: 1;\n  position: relative;\n}\n:host .badge {\n  background: #e90000;\n  position: absolute;\n  font-size: 0.5rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  color: #fff;\n  padding: 0 0.25rem;\n  border-radius: 0.4rem;\n  height: 0.8rem;\n  min-width: 0.8rem;\n  box-sizing: border-box;\n  justify-content: center;\n  top: 0;\n  left: 50%;\n  z-index: 20;\n  transform: translate(50%, -10%);\n  margin: 0;\n}\n:host .icon {\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n}\n:host .icon hc-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: 0.3s;\n}\n:host .icon hc-image:last-child {\n  opacity: 0;\n}\n:host .label {\n  margin: 0;\n  margin-top: 0.1rem;\n  transition: 0.3s;\n}\n\n:host([active]) {\n  color: #2170D9;\n}\n:host([active]) .icon hc-image:first-child {\n  opacity: 0;\n}\n:host([active]) .icon hc-image:last-child {\n  opacity: 1;\n}\n\n:host([shape=circle]) {\n  flex: 0 auto;\n  width: 2.4rem;\n  border-radius: 50%;\n  background: #fff;\n  transform: translateY(-30%);\n}\n\n:host([is-dot=true]) .badge {\n  font-size: 0;\n  min-width: 0;\n  padding: 0;\n  height: 0.3rem;\n  width: 0.3rem;\n  transform: translate(100%, 0);\n}"; }
};

export { TabbarItem as hc_tabbar_item };
