import { r as registerInstance, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const Popover = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    bindClick() {
        this.pos = {};
        console.log(this.el.offsetTop);
        // this.hammer.on('tap', (e) => {
        //   this.pos.ot = this.offsetTop
        //   this.pos.ol = this.offsetLeft
        //   this.pos.ow = this.offsetWidth
        //   this.pos.oh = this.offsetHeight
        //   this.pos.ww = this.$content.clientWidth
        //   this.pos.wh = this.$content.clientHeight
        //   this.pos.st = document.querySelector('hc-page').scrollTop
        //   this.computedPosition()
        // })
    }
    render() {
        return (h(Host, { onclick: this.bindClick.bind(this) }, h("slot", null)));
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Popover as hc_popover };
