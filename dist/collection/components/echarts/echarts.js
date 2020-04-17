import { Host, h } from "@stencil/core";
import * as echarts from 'echarts';
export class Echarts {
    constructor() {
        this.height = 300;
    }
    componentDidLoad() {
        var myechart = echarts.default.init(this.el.shadowRoot.querySelector('.hc-echarts'));
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myechart.setOption(option);
    }
    render() {
        return (h(Host, null,
            h("div", { class: "hc-echarts", style: { height: `${this.height}px` } })));
    }
    static get is() { return "hc-echarts"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["echarts.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["echarts.css"]
    }; }
    static get properties() { return {
        "height": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "height",
            "reflect": false,
            "defaultValue": "300"
        }
    }; }
    static get elementRef() { return "el"; }
}
