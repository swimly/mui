import { r as registerInstance, d as createEvent, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const CollapseItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.open = false;
        this.arrow = 'arrow-right';
        this.vchange = createEvent(this, "vchange", 7);
    }
    openHandle(v) {
        this.$content.style.transition = '0.3s';
        if (v) {
            this.$content.style.maxHeight = `${this.height}px`;
        }
        else {
            this.$content.style.maxHeight = `${0}px`;
        }
    }
    componentDidLoad() {
        this.height = this.el.shadowRoot.querySelector('.content').getBoundingClientRect().height;
        this.$item = this.el.shadowRoot.querySelector('.item');
        this.$content = this.el.shadowRoot.querySelector('.content');
        if (!this.open) {
            this.$content.style.maxHeight = `0px`;
        }
        else {
            this.$content.style.maxHeight = `${this.height}px`;
        }
    }
    bindClick() {
        this.open = !this.open;
        this.vchange.emit({
            name: this.name,
            open: this.open
        });
    }
    getCssClassMap() {
        return {
            'item': true,
            'active': this.open
        };
    }
    render() {
        return (h(Host, null, h("div", { class: this.getCssClassMap() }, h("div", { class: "handle", onClick: this.bindClick.bind(this) }, h("h2", { class: "title" }, h("span", { class: "label" }, h("slot", { name: "title" }, this.titles)), h("span", { class: "indicate" }, h("slot", { name: "indicate" }, h("hc-icon", { name: this.arrow }))))), h("div", { class: "content" }, h("slot", null)))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "open": ["openHandle"]
    }; }
    static get style() { return ":host {\n  display: flex;\n  flex-direction: column;\n}\n:host .item .handle .title {\n  font-size: 0.8rem;\n  color: #262626;\n  font-weight: normal;\n  display: flex;\n  margin: 0;\n  flex-direction: row;\n  position: relative;\n  padding: 0.5rem 0;\n}\n:host .item .handle .title:after {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: #e6e6e6;\n  bottom: 0;\n  transform: scaleY(0.5);\n}\n:host .item .handle .title .label {\n  flex: 1;\n}\n:host .item .handle .title .indicate {\n  transition: 0.3s;\n  color: #e6e6e6;\n}\n:host .item.active .handle .title .indicate {\n  transform: rotate(90deg);\n}\n:host .item .content {\n  overflow: hidden;\n}\n:host .item .content .slot {\n  display: block;\n}"; }
};

export { CollapseItem as hc_collapse_item };
