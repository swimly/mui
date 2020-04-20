import { r as registerInstance, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const Popover = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.data = '[]';
        this.offset = 10;
        this.parent = { width: 0, height: 0 };
    }
    componentDidLoad() {
        this.$wrap = this.el.shadowRoot.querySelector('.popover');
        this.parent.width = document.body.offsetWidth;
        this.parent.height = document.querySelector('hc-page').clientHeight;
        this.initPosition();
    }
    setStyle() {
        const { type } = this;
        this.$wrap.style.transform = `scale(0)`;
        if (this.direction) {
            if (type.indexOf('bottom') >= 0) {
                this.$wrap.style.marginTop = `${this.cp.height + this.offset}px`;
                if (type == 'bottom-center') {
                    this.$wrap.style.marginTop = `${this.cp.height + this.offset}px`;
                    this.$wrap.style.marginLeft = `${-(this.wp.width - this.cp.width) / 2}px`;
                }
            }
            if (type.indexOf('top') >= 0) {
                this.$wrap.style.bottom = `${this.cp.height + this.offset}px`;
                if (type == 'top-center') {
                    this.$wrap.style.marginLeft = `${-(this.wp.width - this.cp.width) / 2}px`;
                }
            }
        }
        else {
            this.$wrap.style.position = 'fixed';
            if (this.type.indexOf('bottom') >= 0) {
                this.$wrap.style.top = `${this.cp.y + this.cp.height + this.offset}px`;
            }
            if (this.type.indexOf('left') > 0) {
                this.$wrap.style.left = `${this.cp.x}px`;
            }
            if (this.type.indexOf('right') > 0) {
                this.$wrap.style.left = 'auto';
                this.$wrap.style.right = `${this.parent.width - this.cp.x - this.cp.width}px`;
            }
            if (this.type.indexOf('center') > 0) {
                var mid = this.cp.x - (this.wp.width - this.cp.width) / 2;
                this.$wrap.style.left = `${mid}px`;
            }
            if (this.type.indexOf('top') >= 0) {
                this.$wrap.style.top = 'auto';
                this.$wrap.style.bottom = `${this.parent.height - this.cp.y + this.offset}px`;
            }
        }
        this.renderOrigin();
    }
    renderOrigin() {
        const { type } = this;
        if (type == 'bottom-center') {
            this.$wrap.style.transformOrigin = 'center top';
            this.$wrap.style.boxShadow = `0 2px 3px #ccc`;
        }
        if (type == 'bottom-left') {
            this.$wrap.style.transformOrigin = `${this.cp.width / 2}px top`;
            this.$wrap.style.boxShadow = `2px 2px 3px #ccc`;
        }
        if (type == 'bottom-right') {
            this.$wrap.style.transformOrigin = `${this.wp.width - this.cp.width + this.cp.width / 2}px top`;
            this.$wrap.style.boxShadow = `0 -2px -3px #ccc`;
        }
        if (type == 'top-center') {
            this.$wrap.style.transformOrigin = 'center bottom';
            this.$wrap.style.boxShadow = `0 -2px 3px #ccc`;
        }
        if (type == 'top-left') {
            this.$wrap.style.transformOrigin = `${this.cp.width / 2}px bottom`;
            this.$wrap.style.boxShadow = `2px -2px 3px #ccc`;
        }
        if (type == 'top-right') {
            this.$wrap.style.transformOrigin = `${this.wp.width - this.cp.width + this.cp.width / 2}px bottom`;
            this.$wrap.style.boxShadow = `-2px -2px 3px #ccc`;
        }
    }
    async bindClick() {
        setTimeout(() => {
            this.$wrap.style.transition = '0.3s';
            this.$wrap.style.transform = `scale(1)`;
        }, 30);
    }
    async initPosition() {
        this.wp = this.$wrap.getBoundingClientRect();
        if (this.direction) {
            this.type = this.direction;
            this.cp = this.el.getBoundingClientRect();
        }
        else {
            this.cp = JSON.parse(this.position);
            this.computedPosition();
        }
        this.setStyle();
    }
    computedPosition() {
        var pos = [];
        // 垂直居上
        if (this.parent.height - this.cp.height - this.cp.y < this.parent.height / 2) {
            pos[0] = 'top';
        }
        // 垂直居下
        if (this.parent.height - this.cp.height - this.cp.y >= this.parent.height / 2) {
            pos[0] = 'bottom';
        }
        // 水平靠左
        if (this.cp.x < this.wp.width && (this.parent.width - this.cp.width - this.cp.x) > this.wp.width) {
            pos[1] = 'left';
        }
        // 水平靠右
        if (this.cp.x > this.wp.width && (this.parent.width - this.cp.width - this.cp.x) < this.wp.width) {
            pos[1] = 'right';
        }
        // 水平居中
        if (this.cp.x > this.wp.width && (this.parent.width - this.cp.width - this.cp.x) > this.wp.width) {
            pos[1] = 'center';
        }
        this.type = pos.join('-');
    }
    render() {
        var data = eval(`(${this.data})`);
        return (h(Host, null, h("div", { class: "handle", onClick: this.bindClick.bind(this) }, h("slot", null)), h("div", { class: "popover" }, data.map((item) => {
            return (h("p", { class: "item" }, h("span", { class: "label" }, item.label)));
        }))));
    }
    /**
     * 已服务的形式调用
     */
    async init(option) {
        const popover = document.createElement('hc-popover');
        Object.keys(option).forEach(key => {
            popover.setAttribute(key, option[key]);
        });
        popover.setAttribute('service', 'true');
        document.body.appendChild(popover);
        popover.bindClick();
        return popover;
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  display: inline-block;\n  position: relative;\n}\n:host .popover {\n  min-width: 6rem;\n  min-height: 6rem;\n  background: #fff;\n  -webkit-box-shadow: 1px 2px 5px #ccc;\n  box-shadow: 1px 2px 5px #ccc;\n  position: fixed;\n  border-radius: 0.3rem;\n}\n:host .popover .item {\n  margin: 0;\n  font-size: 0.7rem;\n  position: relative;\n  height: 2.2rem;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 0 1rem;\n}\n:host .popover .item:after {\n  content: \"\";\n  display: inline-block;\n  width: 100%;\n  height: 1px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background: #e6e6e6;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\n:host .popover .item .label {\n  font-size: inherit;\n}\n\n:host([direction]) .popover {\n  position: absolute;\n}\n\n:host([direction^=bottom]) .popover {\n  top: 0;\n}\n\n:host([direction^=top]) .popover {\n  bottom: 0;\n}\n\n:host([direction$=left]) .popover {\n  left: 0;\n}\n\n:host([direction$=right]) .popover {\n  right: 0;\n}"; }
};

export { Popover as hc_popover };
