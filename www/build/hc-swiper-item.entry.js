import { r as registerInstance, h, H as Host } from './core-3c51ccf2.js';

const SwiperItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { style: { width: `${this.width}px`, height: `${this.height}px` } }, h("slot", null)));
    }
    static get style() { return ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  background: #2170D9;\n  color: #fff;\n}"; }
};

export { SwiperItem as hc_swiper_item };
