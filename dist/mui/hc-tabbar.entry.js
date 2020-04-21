import { r as registerInstance, d as createEvent, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const Tabbar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.direction = 'row';
        this.iconSize = 28;
        this.defaultColor = '#8c8c8c';
        this.activeColor = '#2873D6';
        this.isDot = false;
        this.vchange = createEvent(this, "vchange", 7);
    }
    componentDidLoad() {
        var slots = this.el.shadowRoot.querySelector('slot');
        var children = slots.assignedElements();
        children.forEach((child, index) => {
            if (!child.getAttribute('index')) {
                child.setAttribute('index', `${index}`);
            }
            if (child.getAttribute('index') == this.current) {
                child.setAttribute('active', `true`);
            }
            if (!child.getAttribute('icon-size')) {
                child.setAttribute('icon-size', `${this.iconSize}`);
            }
            child.setAttribute('default-color', this.defaultColor);
            child.setAttribute('active-color', this.activeColor);
            child.setAttribute('is-dot', `${this.isDot}`);
            // 监听点击
            child.addEventListener('vclick', (e) => {
                this.current = e.detail.index;
                this.vchange.emit({
                    index: this.current
                });
                children.forEach(item => {
                    if (item.getAttribute('index') == this.current) {
                        item.setAttribute('active', `true`);
                    }
                    else {
                        item.removeAttribute('active');
                    }
                });
            });
        });
    }
    render() {
        return (h(Host, { style: { flexDirection: this.direction, justifyContent: this.direction == 'row' ? 'space-around' : 'flex-start' } }, h("slot", null)));
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  position: relative;\n}\n:host:before {\n  content: \"\";\n  display: block;\n  width: 100%;\n  left: 0;\n  top: 0;\n  position: absolute;\n  height: 1px;\n  background: #e6e6e6;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}"; }
};

export { Tabbar as hc_tabbar };
