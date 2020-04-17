import { Host, h } from "@stencil/core";
export class Selection {
    constructor() {
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
    static get is() { return "hc-selection"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["selection.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["selection.css"]
    }; }
    static get properties() { return {
        "titles": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "titles",
            "reflect": false,
            "defaultValue": "'\u8BF7\u9009\u62E9'"
        },
        "visible": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "visible",
            "reflect": false,
            "defaultValue": "false"
        },
        "round": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "round",
            "reflect": false,
            "defaultValue": "true"
        },
        "data": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "data",
            "reflect": false
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "data",
            "methodName": "dataHandle"
        }]; }
}
