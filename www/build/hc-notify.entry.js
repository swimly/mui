import { r as registerInstance, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const Notify = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.visible = false;
        this.text = '提交成功！';
        this.duration = 3000;
        this.position = 'center';
        this.background = 'rgba(0,0,0,0.8)';
        this.iconsize = 36;
        this.spin = false;
    }
    /** (optional) 初始化notify */
    async showNotify() {
        setTimeout(() => {
            this.visible = true;
            this.el.style.transition = '0.3s';
        }, 50);
        setTimeout(() => {
            this.destoryNotify();
        }, this.duration);
    }
    /** (optional) 销毁notify */
    async destoryNotify() {
        this.visible = false;
        // 如果是以指令的形式调用，需要销毁dom
        var notifys = document.querySelectorAll('hc-notify');
        console.log(notifys);
        setTimeout(() => {
            notifys.forEach(notify => {
                if (notify.getAttribute('service')) {
                    document.body.removeChild(notify);
                }
            });
        }, 300);
    }
    watchHandler(newValue) {
        if (newValue) {
            this.el.setAttribute('visible', `${newValue}`);
        }
        else {
            this.el.removeAttribute('visible');
        }
    }
    componentWillLoad() {
        this.renderBackground();
    }
    componentDidLoad() {
    }
    renderBackground() {
        if (this.type == 'success') {
            this.background = '#07c160';
        }
        if (this.type == 'warning') {
            this.background = '#ff976a';
        }
        if (this.type == 'error') {
            this.background = '#e90000';
        }
    }
    render() {
        return (h(Host, { style: { backgroundColor: this.background } }, h("hc-icon", { spin: this.spin, size: this.iconsize, name: this.icon }), h("span", null, this.text)));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "visible": ["watchHandler"]
    }; }
    static get style() { return ":host {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n  font-size: 0.7rem;\n  background-color: #262626;\n  color: #fff;\n  padding: 1rem;\n  border-radius: 0.3rem;\n  position: fixed;\n  top: 55%;\n  left: 50%;\n  width: 4rem;\n  height: 4rem;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  z-index: -1;\n}\n:host hc-icon {\n  margin-bottom: 0.3rem;\n}\n\n:host([visible]) {\n  opacity: 1;\n  top: 50%;\n  z-index: 100;\n}\n\n:host([position=top]),\n:host([position=bottom]) {\n  -ms-flex-direction: row;\n  flex-direction: row;\n  width: 100%;\n  height: 2.4rem;\n  padding: 0;\n  border-radius: 0;\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0);\n  left: 0;\n}\n:host([position=top]) hc-icon,\n:host([position=bottom]) hc-icon {\n  margin: 0 0.3rem 0 0;\n}\n\n:host([position=top]) {\n  top: 0;\n  -webkit-transform: translate(0, -100%);\n  transform: translate(0, -100%);\n}\n\n:host([position=top][visible]) {\n  z-index: 100;\n  opacity: 1;\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n\n:host([position=bottom]) {\n  top: 100%;\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n\n:host([position=bottom][visible]) {\n  -webkit-transform: translate(0, -100%);\n  transform: translate(0, -100%);\n  z-index: 100;\n  opacity: 1;\n}"; }
};

export { Notify as hc_notify };
