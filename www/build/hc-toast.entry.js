import { r as registerInstance, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const Toast = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.visible = false;
        this.text = '提交成功！';
        this.duration = 3000;
        this.position = 'center';
        this.background = 'rgba(0,0,0,0.8)';
    }
    /** (optional) 初始化toast */
    async showToast() {
        setTimeout(() => {
            this.visible = true;
            this.el.style.transition = '0.3s';
        }, 50);
        setTimeout(() => {
            this.destoryToast();
        }, this.duration);
    }
    /** (optional) 销毁toast */
    async destoryToast() {
        this.visible = false;
        // 如果是以指令的形式调用，需要销毁dom
        var toasts = document.querySelectorAll('hc-toast');
        setTimeout(() => {
            toasts.forEach(toast => {
                if (toast.getAttribute('service')) {
                    document.body.removeChild(toast);
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
    componentDidLoad() {
    }
    render() {
        return (h(Host, { style: { backgroundColor: this.background } }, this.text));
    }
    /**
     * 已服务的形式调用
     */
    async init(option) {
        const exist = document.querySelector('hc-toast');
        const toast = exist ? exist : document.createElement('hc-toast');
        Object.keys(option).forEach(key => {
            toast.setAttribute(key, option[key]);
        });
        toast.setAttribute('service', 'true');
        document.body.appendChild(toast);
        toast.showToast();
        return toast;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "visible": ["watchHandler"]
    }; }
    static get style() { return ":host {\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  font-size: 0.7rem;\n  background-color: #262626;\n  color: #fff;\n  height: 1.6rem;\n  padding: 0 1rem;\n  border-radius: 0.3rem;\n  position: fixed;\n  top: 55%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  z-index: -1;\n}\n\n:host([visible]) {\n  opacity: 1;\n  top: 50%;\n  z-index: 100;\n}\n\n:host([position=top]) {\n  top: 15%;\n}\n\n:host([position=top][visible]) {\n  top: 10%;\n  z-index: 100;\n  opacity: 1;\n}\n\n:host([position=bottom]) {\n  top: 95%;\n}\n\n:host([position=bottom][visible]) {\n  top: 90%;\n  z-index: 100;\n  opacity: 1;\n}"; }
};

export { Toast as hc_toast };
