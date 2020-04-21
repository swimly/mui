import { Host, h } from "@stencil/core";
import { colorRgba } from '../../utils/utils';
export class Tag {
    componentDidLoad() {
        this.renderCss();
    }
    async renderCss() {
        const { el, color, shape } = this;
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
        el.setAttribute('style', style);
    }
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "hc-tag"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["tag.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["tag.css"]
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
        },
        "size": {
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
            "attribute": "size",
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
