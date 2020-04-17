import { r as registerInstance, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const Selection = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.titles = '请选择';
        this.visible = false;
        this.round = true;
    }
    componentDidLoad() {
    }
    dataHandle(value) {
        this.dataArr = eval(`(${value})`);
        console.log(this.dataArr);
    }
    render() {
        return (h(Host, null));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "data": ["dataHandle"]
    }; }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Selection as hc_selection };
