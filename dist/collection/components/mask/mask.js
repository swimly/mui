import { Host, h } from "@stencil/core";
export class Mask {
    constructor() {
        this.background = 'rgba(0,0,0,0.5)';
        this.maskClosable = true;
        this.visible = false;
    }
    componentDidLoad() {
        if (this.background && !this.source) {
            this.el.style.background = this.background;
        }
    }
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    async init(option) {
        const mask = document.createElement('hc-mask');
        var background = option.background ? option.background : 'rgba(0,0,0,0.5)';
        Object.keys(option).forEach(key => {
            mask.setAttribute(key, option[key]);
        });
        if (option.dom) {
            option.dom.appendChild(mask);
        }
        else {
            document.body.appendChild(mask);
        }
        if (option.source) {
            var pos = option.source.getBoundingClientRect();
            var height = document.querySelector('hc-page').clientHeight;
            var scale = Math.round((pos.y + pos.height) / height * 100);
            mask.style.background = `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0) ${scale}%, ${background} ${scale}%, ${background} 100%)`;
        }
        if (option.maskClosable) {
            mask.addEventListener('click', () => {
                var dom = option.dom ? option.dom : document.body;
                dom.removeChild(mask);
            });
        }
        return mask;
    }
    static get is() { return "hc-mask"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["mask.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["mask.css"]
    }; }
    static get properties() { return {
        "background": {
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
            "attribute": "background",
            "reflect": false,
            "defaultValue": "'rgba(0,0,0,0.5)'"
        },
        "source": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "source",
            "reflect": false
        },
        "maskClosable": {
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
            "attribute": "mask-closable",
            "reflect": false,
            "defaultValue": "true"
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
        }
    }; }
    static get methods() { return {
        "init": {
            "complexType": {
                "signature": "(option: any) => Promise<HTMLHcMaskElement>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "HTMLHcMaskElement": {
                        "location": "global"
                    }
                },
                "return": "Promise<HTMLHcMaskElement>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
}
