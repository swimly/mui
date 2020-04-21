import { Host, h } from "@stencil/core";
export class Tabbar {
    constructor() {
        this.direction = 'row';
        this.iconSize = 28;
        this.defaultColor = '#8c8c8c';
        this.activeColor = '#2873D6';
        this.isDot = false;
    }
    componentDidLoad() {
        var slots = this.el.shadowRoot.querySelector('slot');
        var children = slots.assignedElements();
        children.forEach((child, index) => {
            if (!child.getAttribute('index')) {
                child.setAttribute('index', `${index}`);
            }
            if (child.getAttribute('index') == this.current) {
                child.setAttribute('active', `true`);
            }
            if (!child.getAttribute('icon-size')) {
                child.setAttribute('icon-size', `${this.iconSize}`);
            }
            child.setAttribute('default-color', this.defaultColor);
            child.setAttribute('active-color', this.activeColor);
            child.setAttribute('is-dot', `${this.isDot}`);
            // 监听点击
            child.addEventListener('vclick', (e) => {
                this.current = e.detail.index;
                this.vchange.emit({
                    index: this.current
                });
                children.forEach(item => {
                    if (item.getAttribute('index') == this.current) {
                        item.setAttribute('active', `true`);
                    }
                    else {
                        item.removeAttribute('active');
                    }
                });
            });
        });
    }
    render() {
        return (h(Host, { style: { flexDirection: this.direction, justifyContent: this.direction == 'row' ? 'space-around' : 'flex-start' } },
            h("slot", null)));
    }
    static get is() { return "hc-tabbar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["tabbar.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["tabbar.css"]
    }; }
    static get properties() { return {
        "direction": {
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
            "attribute": "direction",
            "reflect": false,
            "defaultValue": "'row'"
        },
        "current": {
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
            "attribute": "current",
            "reflect": false
        },
        "iconSize": {
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
            "attribute": "icon-size",
            "reflect": false,
            "defaultValue": "28"
        },
        "defaultColor": {
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
            "attribute": "default-color",
            "reflect": false,
            "defaultValue": "'#8c8c8c'"
        },
        "activeColor": {
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
            "attribute": "active-color",
            "reflect": false,
            "defaultValue": "'#2873D6'"
        },
        "isDot": {
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
            "attribute": "is-dot",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get events() { return [{
            "method": "vchange",
            "name": "vchange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
}
