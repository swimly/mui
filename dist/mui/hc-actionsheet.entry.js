import { r as registerInstance, d as createEvent, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const Actionsheet = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.buttons = `['取消']`;
        this.vclick = createEvent(this, "vclick", 7);
        this.vchange = createEvent(this, "vchange", 7);
    }
    componentDidLoad() {
        this.$button = this.el.shadowRoot.querySelectorAll('.button');
        this.$button.forEach(button => {
            button.addEventListener('click', () => {
                this.vclick.emit({
                    type: button.innerHTML,
                    value: this.current
                });
            });
        });
    }
    bindClick(item) {
        this.current = item;
    }
    currentHandle(value) {
        const arr = eval(`(${this.content})`);
        const index = arr.indexOf(value);
        const $items = this.el.shadowRoot.querySelectorAll('.item');
        $items.forEach(item => {
            item.classList.remove('active');
        });
        $items[index].classList.add('active');
        this.vchange.emit(value);
    }
    render() {
        const arr = eval(`(${this.content})`);
        const footer = eval(`(${this.buttons})`);
        console.log(arr);
        return (h(Host, null, h("h2", { class: "title" }, this.titles), h("div", { class: "content" }, arr.map(item => {
            return h("p", { onClick: this.bindClick.bind(this, item), class: "item" }, h("hc-icon", { name: "arrow-right" }), h("span", null, item));
        })), h("div", { class: "footer" }, footer.map(item => {
            return h("p", { class: "button" }, item);
        }))));
    }
    async init(option) {
        const actionsheet = document.createElement('hc-actionsheet');
        const drawer = document.createElement('hc-drawer');
        drawer.setAttribute('direction', 'btt');
        drawer.setAttribute('round', 'true');
        Object.keys(option).forEach(key => {
            actionsheet.setAttribute(key, option[key]);
        });
        actionsheet.setAttribute('service', 'true');
        drawer.setAttribute('role', 'actionsheet');
        drawer.appendChild(actionsheet);
        document.body.appendChild(drawer);
        actionsheet.addEventListener('vclick', () => {
            drawer.destory();
        });
        actionsheet.addEventListener('vchange', () => {
            if (eval(`(${option.buttons})`).length < 2) {
                drawer.destory();
            }
        });
        setTimeout(() => {
            drawer.init();
        }, 30);
        return actionsheet;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "current": ["currentHandle"]
    }; }
    static get style() { return ":host {\n  display: block;\n}\n:host .title {\n  font-size: 0.9rem;\n  font-weight: normal;\n  margin: 0;\n  text-align: center;\n  padding: 1rem 0;\n}\n:host .content {\n  max-height: 50vh;\n  overflow: auto;\n  padding: 0 0.5rem;\n}\n:host .content .item {\n  font-size: 0.8rem;\n  margin: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 2.6rem;\n}\n:host .content .item hc-icon {\n  color: #fff;\n}\n:host .content .item.active {\n  color: #2170D9;\n}\n:host .content .item.active hc-icon {\n  color: inherit;\n}\n:host .footer {\n  margin: 0 1.5rem 1rem 1.5rem;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n}\n:host .footer .button {\n  font-size: 0.8rem;\n  color: #262626;\n  background-color: #f5f5f5;\n  -ms-flex: 1;\n  flex: 1;\n  height: 2.4rem;\n  margin: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  border-radius: 1.2rem;\n}\n:host .footer .button:last-child {\n  margin-left: 0.5rem;\n  color: #2170D9;\n}\n:host .footer .button:first-child {\n  margin-right: 0.5rem;\n  color: #262626;\n}"; }
};

export { Actionsheet as hc_actionsheet };
