import { Host, h } from "@stencil/core";
import { colorRgba } from '../../utils/utils';
export class Badge {
    componentDidLoad() {
        this.renderCss();
    }
    async renderCss() {
        let { color, shape } = this;
        let style;
        if (color) {
            if (shape == 'plain') {
                style = `background-color:${colorRgba(color, 0.1)};color:${color};border:1px solid ${color}`;
            }
            else if (shape == 'outline') {
                style = `background-color:#fff;color:${color};border:1px solid ${color}`;
            }
            else if (shape == 'light') {
                style = `color:${color}`;
            }
            else {
                style = `background-color:${colorRgba(color, 1)};color:#fff;border:1px solid ${color}`;
            }
        }
        this.el.setAttribute('style', style);
    }
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "hc-badge"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["badge.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["badge.css"]
    }; }
    static get properties() { return {
        "type": {
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
            "attribute": "type",
            "reflect": false
        },
        "shape": {
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
            "attribute": "shape",
            "reflect": false
        },
        "color": {
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
            "attribute": "color",
            "reflect": false
        }
    }; }
    static get methods() { return {
        "renderCss": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
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
