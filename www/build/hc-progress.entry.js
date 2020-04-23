import { r as registerInstance, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const Progress = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async percent(percent) {
        var circle = this.el.shadowRoot.querySelectorAll('circle')[1];
        //圆的周长
        var perimeter = Math.PI * 2 * 50;
        //stroke-dasharray属性的两个参数和必须为周长
        circle.setAttribute('stroke-dasharray', perimeter * percent + ' ' + perimeter * (1 - percent));
    }
    render() {
        return (h(Host, null, h("div", { id: "svgContainer" }, h("svg", { width: "220", height: "220", viewBox: "0 0 220 220" }, h("circle", { cx: "110", cy: "110", r: "50", "stroke-width": "8", stroke: "#D1D3D7", fill: "none" }), h("circle", { cx: "110", cy: "110", r: "50", "stroke-width": "8", stroke: "#00A5E0", fill: "none", transform: "matrix(0,-1,1,0,0,220)", "stroke-dasharray": "1069 0" })), h("span", { id: "leftTime" }, "10"))));
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  display: block;\n}\n:host #svgContainer {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  height: 200px;\n}\n:host #svgContainer > svg {\n  position: absolute;\n}\n:host circle {\n  -webkit-transition: stroke-dasharray 0.25s;\n  transition: stroke-dasharray 0.25s;\n}"; }
};

export { Progress as hc_progress };
