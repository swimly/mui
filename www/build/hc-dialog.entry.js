import { r as registerInstance, d as createEvent, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const Dialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * 底部按钮
         */
        this.footer = "['知道了']";
        /**
         * 显示隐藏
         */
        this.visible = false;
        /**
         * 样式
         */
        this.effect = 'zoom';
        this.vdestory = createEvent(this, "vdestory", 7);
    }
    async display() {
        this.$el.setAttribute('effect', this.effect);
        this.$el.style.zIndex = '100';
        setTimeout(() => {
            this.visible = true;
        }, 30);
    }
    async destory(item) {
        this.vdestory.emit(item);
        this.visible = false;
        setTimeout(() => {
            this.$el.style.zIndex = '-1';
        }, 300);
        // 如果是以指令的形式调用，需要销毁dom
        var dialogs = document.querySelectorAll('hc-dialog');
        setTimeout(() => {
            dialogs.forEach(dialog => {
                if (dialog.getAttribute('service')) {
                    document.body.removeChild(dialog);
                }
            });
        }, 300);
    }
    watchHandler(newValue) {
        if (newValue) {
            this.$el.setAttribute('visible', `${newValue}`);
            this.$el.style.zIndex = '100';
        }
        else {
            this.$el.removeAttribute('visible');
        }
    }
    componentWillLoad() {
        this.bindDuration();
    }
    bindDuration() {
        let { duration } = this;
        if (duration) {
            var timer = setInterval(() => {
                duration = duration > 0 ? duration - 1000 : 0;
                if (duration == 0) {
                    clearInterval(timer);
                    this.destory(null);
                }
                this.$el.shadowRoot.querySelector('#count').innerHTML = `${duration / 1000}S`;
            }, 1000);
        }
    }
    renderContent() {
        if (!this.type) {
            return (this.content);
        }
        if (this.type == 'prompt') {
            return (h("hc-input", { id: "prompt", placeholder: this.placeholder }));
        }
    }
    render() {
        const footer = eval(`(${this.footer})`);
        return (h(Host, null, h("div", { class: "hc-dialog" }, h("p", { id: "count", class: "hc-dialog__countdown" }, this.duration ? `${this.duration / 1000}S` : ''), h("h2", { class: "hc-dialog__title" }, this.titles, this.visible), h("div", { class: "hc-dialog__content" }, h("slot", null, this.renderContent())), h("div", { class: "hc-dialog__footer" }, h("slot", { name: "footer" }, footer.map((item) => {
            return h("p", { onClick: this.destory.bind(this, item), class: "hc-dialog__footer_item" }, item);
        })))), h("div", { class: "hc-mask" })));
    }
    /**
     * 已服务的形式调用
     */
    async init(option) {
        const dialog = document.createElement('hc-dialog');
        Object.keys(option).forEach(key => {
            dialog.setAttribute(key, option[key]);
        });
        dialog.setAttribute('service', 'true');
        document.body.appendChild(dialog);
        setTimeout(() => {
            dialog.setAttribute('visible', 'true');
        }, 30);
        return dialog;
    }
    get $el() { return getElement(this); }
    static get watchers() { return {
        "visible": ["watchHandler"]
    }; }
    static get style() { return ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n:host .hc-dialog {\n  background: #fff;\n  position: relative;\n  z-index: 199;\n  border-radius: 0.3rem;\n  width: 80%;\n  max-width: 17rem;\n  padding: 1rem;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-transform: translate(0, 50%);\n  transform: translate(0, 50%);\n  opacity: 0;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n:host .hc-dialog__countdown {\n  font-size: 0.7rem;\n  color: #8c8c8c;\n  margin: 0;\n  position: absolute;\n  right: 1rem;\n  top: 1rem;\n}\n:host .hc-dialog__title {\n  font-size: 1rem;\n  font-weight: normal;\n  color: #262626;\n  margin: 0;\n  text-align: center;\n}\n:host .hc-dialog__title:not(:empty) {\n  margin-bottom: 1rem;\n}\n:host .hc-dialog__content {\n  font-size: 0.8rem;\n  color: #262626;\n}\n:host .hc-dialog__footer {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  position: relative;\n  margin: 0 -1rem -1rem -1rem;\n}\n:host .hc-dialog__footer::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 1px;\n  background: #e6e6e6;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n:host .hc-dialog__footer:not(:empty) {\n  margin-top: 1rem;\n}\n:host .hc-dialog__footer_item {\n  -ms-flex: 1;\n  flex: 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  margin: 0;\n  height: 2.4rem;\n}\n:host .hc-dialog__footer_item:not(:first-child) {\n  position: relative;\n  color: #262626;\n}\n:host .hc-dialog__footer_item:not(:first-child)::after {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1px;\n  height: 200%;\n  background: #e6e6e6;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n}\n:host .hc-dialog__footer_item:last-child {\n  color: #2170D9;\n}\n:host .hc-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 100;\n  background-color: rgba(0, 0, 0, 0.6);\n  opacity: 0;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  z-index: -1;\n}\n\n:host([effect=zoom]) .hc-dialog {\n  -webkit-transform: translate(0, 0) scale(0.1);\n  transform: translate(0, 0) scale(0.1);\n  opacity: 0;\n}\n\n:host([effect=slidedown]) .hc-dialog {\n  -webkit-transform: translate(0, -100%);\n  transform: translate(0, -100%);\n  opacity: 0;\n}\n\n:host([effect=slideup]) .hc-dialog {\n  -webkit-transform: translate(0, 100%);\n  transform: translate(0, 100%);\n  opacity: 0;\n}\n\n:host([effect=zoomdown]) .hc-dialog {\n  -webkit-transform: translate(0, -200%) scale(0.1);\n  transform: translate(0, -200%) scale(0.1);\n  opacity: 0;\n}\n\n:host([effect=zoomup]) .hc-dialog {\n  -webkit-transform: translate(0, 200%) scale(0.1);\n  transform: translate(0, 200%) scale(0.1);\n  opacity: 0;\n}\n\n:host([effect=fade]) .hc-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0);\n  opacity: 0;\n}\n\n:host([visible]) {\n  z-index: 100;\n}\n:host([visible]) .hc-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0);\n  opacity: 1;\n}\n:host([visible]) .hc-mask {\n  opacity: 1;\n  z-index: 100;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}"; }
};

export { Dialog as hc_dialog };
