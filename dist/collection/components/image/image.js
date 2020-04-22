import { Host, h } from "@stencil/core";
export class Image {
    constructor() {
        this.width = 200;
        this.height = 200;
        this.lazy = true;
        this.status = 0;
        this.fit = 'cover';
    }
    loadImage(image) {
        image.src = this.src;
        image.onload = () => {
            this.status = 1;
        };
        image.onerror = () => {
            this.status = -1;
        };
    }
    componentDidLoad() {
        const image = this.el.shadowRoot.querySelector('.core');
        if (!this.lazy) {
            this.loadImage(image);
        }
        else {
            const io = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry && entry.isIntersecting) {
                        if (this.lazy) {
                            this.loadImage(entry.target);
                        }
                        io.unobserve(entry.target);
                    }
                });
            });
            io.observe(image);
        }
    }
    statusHandle(value) {
        this.el.setAttribute('status', `${value}`);
    }
    render() {
        return (h(Host, { style: { width: `${this.width}px`, height: `${this.height}px` } },
            h("div", { class: "loading" },
                h("hc-icon", { size: 32, name: "loading", spin: true }),
                h("span", null, "\u52A0\u8F7D\u4E2D")),
            h("div", { class: "error" },
                h("hc-icon", { size: 38, name: "cry" }),
                h("span", null, "\u52A0\u8F7D\u5931\u8D25")),
            h("img", { style: { objectFit: this.fit }, class: "core", alt: "" }),
            h("slot", null)));
    }
    static get is() { return "hc-image"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["image.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["image.css"]
    }; }
    static get properties() { return {
        "src": {
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
            "attribute": "src",
            "reflect": false
        },
        "width": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "string | number",
                "resolved": "number | string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "width",
            "reflect": false,
            "defaultValue": "200"
        },
        "height": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "string | number",
                "resolved": "number | string",
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
            "defaultValue": "200"
        },
        "lazy": {
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
            "attribute": "lazy",
            "reflect": false,
            "defaultValue": "true"
        },
        "status": {
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
            "attribute": "status",
            "reflect": false,
            "defaultValue": "0"
        },
        "fit": {
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
            "attribute": "fit",
            "reflect": false,
            "defaultValue": "'cover'"
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "status",
            "methodName": "statusHandle"
        }]; }
}
