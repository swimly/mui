import { r as registerInstance, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const Camera = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
    }
    render() {
        return (h(Host, null, h("slot", null, h("video", { id: "video", width: "640", height: "480", autoplay: true }), h("button", { id: "snap" }, "Snap Photo"), h("canvas", { id: "canvas", width: "640", height: "480" }))));
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Camera as hc_camera };
