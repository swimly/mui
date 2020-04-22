import { r as registerInstance, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const Image = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.width = 200;
        this.height = 200;
        this.lazy = true;
        this.status = 0;
        this.fit = 'cover';
    }
    loadImage(image) {
        image.src = this.src;
        image.onload = () => {
            this.status = 1;
        };
        image.onerror = () => {
            this.status = -1;
        };
    }
    componentDidLoad() {
        const image = this.el.shadowRoot.querySelector('.core');
        if (!this.lazy) {
            this.loadImage(image);
        }
        else {
            const io = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry && entry.isIntersecting) {
                        if (this.lazy) {
                            this.loadImage(entry.target);
                        }
                        io.unobserve(entry.target);
                    }
                });
            });
            io.observe(image);
        }
    }
    statusHandle(value) {
        this.el.setAttribute('status', `${value}`);
    }
    render() {
        return (h(Host, { style: { width: `${this.width}px`, height: `${this.height}px` } }, h("div", { class: "loading" }, h("hc-icon", { size: 32, name: "loading", spin: true }), h("span", null, "\u52A0\u8F7D\u4E2D")), h("div", { class: "error" }, h("hc-icon", { size: 38, name: "cry" }), h("span", null, "\u52A0\u8F7D\u5931\u8D25")), h("img", { style: { objectFit: this.fit }, class: "core", alt: "" }), h("slot", null)));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "status": ["statusHandle"]
    }; }
    static get style() { return ":host {\n  display: flex;\n  position: relative;\n}\n:host .core {\n  width: 100%;\n  height: 100%;\n  transition: 0.3s;\n  opacity: 0;\n}\n:host .loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  background: #fafafb;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.7rem;\n  color: #8c8c8c;\n}\n:host .error {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9;\n  opacity: 1;\n  transition: 0.3s;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #fafafb;\n  color: #8c8c8c;\n}\n\n:host([status=\"1\"]) .core {\n  opacity: 1;\n  position: relative;\n  z-index: 11;\n}\n:host([status=\"1\"]) .loading {\n  display: none;\n}\n:host([status=\"1\"]) .error {\n  display: none;\n}\n\n:host([status=\"-1\"]) .error {\n  z-index: 11;\n  opacity: 1;\n}"; }
};

export { Image as hc_image };
