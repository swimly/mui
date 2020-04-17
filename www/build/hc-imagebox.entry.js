import { r as registerInstance, h, H as Host } from './core-3c51ccf2.js';

const Imagebox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        console.log(this.data);
    }
    render() {
        return (h(Host, null));
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Imagebox as hc_imagebox };
