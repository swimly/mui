import { Host, h } from "@stencil/core";
// import iconfont from './iconfont.svg'
export class Icon {
    constructor() {
        this.spin = false;
    }
    componentDidLoad() {
        this.renderIcon();
    }
    spinHandle(newValue) {
        if (newValue) {
            this.el.setAttribute('spin', `${newValue}`);
        }
        else {
            this.el.removeAttribute('spin');
        }
    }
    nameHandle() {
        this.renderIcon();
    }
    renderIcon() {
        const use = this.el.shadowRoot.querySelector('#use');
        const svg = this.el.shadowRoot.querySelector('.hc-icon');
        use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `../../assets/iconfont.svg#icon-${this.name}`);
        if (this.size) {
            svg.style.fontSize = `${this.size}px`;
            svg.style.width = `${this.size}px`;
            svg.style.height = `${this.size}px`;
        }
        svg.style.color = this.color;
        if (!this.name) {
            this.el.style.display = 'none';
        }
        if (this.spin) {
            this.el.setAttribute('spin', 'true');
        }
    }
    render() {
        return (h(Host, null,
            h("svg", { class: "hc-icon", "aria-hidden": "true" },
                h("use", { id: "use" }))));
    }
    static get is() { return "hc-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["icon.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["icon.css"]
    }; }
    static get assetsDirs() { return ["assets"]; }
    static get properties() { return {
        "name": {
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
            "attribute": "name",
            "reflect": false
        },
        "size": {
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
            "attribute": "size",
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
        "spin": {
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
            "attribute": "spin",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "spin",
            "methodName": "spinHandle"
        }, {
            "propName": "name",
            "methodName": "nameHandle"
        }]; }
}
