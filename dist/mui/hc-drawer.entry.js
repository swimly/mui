import { r as registerInstance, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const Drawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.direction = 'btt';
        this.visible = false;
        this.transparent = false;
        this.maskClosable = true;
        this.mask = true;
        this.round = false;
        this.full = false;
        this.scroller = true;
    }
    visibleHandle(newValue) {
        if (newValue) {
            this.el.setAttribute('visible', 'true');
        }
        else {
            this.el.removeAttribute('visible');
        }
    }
    directionHandle(newValue) {
        console.log(newValue, 9999);
        if (newValue) {
            console.log(newValue);
            this.el.setAttribute('direction', newValue);
        }
    }
    async init() {
        setTimeout(() => {
            this.$drawer.style.transition = '0.3s';
            this.visible = true;
        }, 50);
    }
    async destory() {
        this.visible = false;
        setTimeout(() => {
            this.$drawer.style.transition = '0s';
        }, 300);
    }
    roundHandle(value) {
        if (value) {
            this.el.setAttribute('round', `${value}`);
        }
        else {
            this.el.removeAttribute('round');
        }
    }
    componentDidLoad() {
        this.$drawer = this.el.shadowRoot.querySelector('.hc-drawer');
        this.$mask = this.el.shadowRoot.querySelector('.hc-mask');
        if (this.maskClosable && this.mask) {
            this.$mask.addEventListener('click', () => {
                this.destory();
            });
        }
    }
    render() {
        console.log(this.scroller);
        return (h(Host, null, this.mask ? h("div", { class: "hc-mask" }) : h("span", null), h("div", { class: "hc-drawer", style: this.full ? { width: `100%`, height: `100%` } : {} }, h("div", { class: "hc-drawer__content", style: { padding: `${this.padding}px`, height: this.scroller ? 'auto' : '100%' } }, h("slot", null)))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "visible": ["visibleHandle"],
        "direction": ["directionHandle"],
        "round": ["roundHandle"]
    }; }
    static get style() { return ":host {\n  display: block;\n}\n:host .hc-drawer {\n  position: fixed;\n  min-height: 30%;\n  min-width: 60%;\n  background: #fff;\n  z-index: 101;\n}\n:host .hc-mask {\n  position: fixed;\n  z-index: -1;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.4);\n  opacity: 0;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n:host([visible=true]) .hc-mask {\n  opacity: 1;\n  z-index: 100;\n}\n\n:host([transparent]) .hc-drawer {\n  background: transparent;\n}\n\n:host([direction=ttb]) .hc-drawer {\n  top: 0;\n  left: 0;\n  bottom: auto;\n  right: auto;\n  width: 100%;\n  -webkit-transform: translate(0, -100%);\n  transform: translate(0, -100%);\n}\n\n:host([direction=ttb][round=true]) .hc-drawer {\n  border-radius: 0 0 1rem 1rem;\n}\n\n:host([direction=btt]) .hc-drawer {\n  top: auto;\n  left: 0;\n  bottom: 0;\n  right: auto;\n  width: 100%;\n  -webkit-transform: translate(0, 100%);\n  transform: translate(0, 100%);\n}\n\n:host([direction=btt][round=true]) .hc-drawer {\n  border-radius: 1rem 1rem 0 0;\n}\n\n:host([direction=ltr]) .hc-drawer {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: auto;\n  -webkit-transform: translate(-100%, 0);\n  transform: translate(-100%, 0);\n}\n\n:host([direction=rtl]) .hc-drawer {\n  top: 0;\n  left: auto;\n  bottom: 0;\n  right: 0;\n  -webkit-transform: translate(100%, 0);\n  transform: translate(100%, 0);\n}\n\n:host([visible=true]) .hc-drawer {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0);\n}"; }
};

export { Drawer as hc_drawer };
