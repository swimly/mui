import { Host, h } from "@stencil/core";
export class Progress {
    async percent(percent) {
        var circle = this.el.shadowRoot.querySelectorAll('circle')[1];
        //圆的周长
        var perimeter = Math.PI * 2 * 50;
        //stroke-dasharray属性的两个参数和必须为周长
        circle.setAttribute('stroke-dasharray', perimeter * percent + ' ' + perimeter * (1 - percent));
    }
    render() {
        return (h(Host, null,
            h("div", { id: "svgContainer" },
                h("svg", { width: "220", height: "220", viewBox: "0 0 220 220" },
                    h("circle", { cx: "110", cy: "110", r: "50", "stroke-width": "8", stroke: "#D1D3D7", fill: "none" }),
                    h("circle", { cx: "110", cy: "110", r: "50", "stroke-width": "8", stroke: "#00A5E0", fill: "none", transform: "matrix(0,-1,1,0,0,220)", "stroke-dasharray": "1069 0" })),
                h("span", { id: "leftTime" }, "10"))));
    }
    static get is() { return "hc-progress"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["progress.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["progress.css"]
    }; }
    static get methods() { return {
        "percent": {
            "complexType": {
                "signature": "(percent: number) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
}
