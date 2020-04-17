import { Host, h } from "@stencil/core";
export class CollapseItem {
    constructor() {
        this.open = false;
        this.arrow = 'arrow-right';
    }
    openHandle(v) {
        this.$content.style.transition = '0.3s';
        if (v) {
            this.$content.style.maxHeight = `${this.height}px`;
        }
        else {
            this.$content.style.maxHeight = `${0}px`;
        }
    }
    componentDidLoad() {
        this.height = this.el.shadowRoot.querySelector('.content').getBoundingClientRect().height;
        this.$item = this.el.shadowRoot.querySelector('.item');
        this.$content = this.el.shadowRoot.querySelector('.content');
        if (!this.open) {
            this.$content.style.maxHeight = `0px`;
        }
        else {
            this.$content.style.maxHeight = `${this.height}px`;
        }
    }
    bindClick() {
        this.open = !this.open;
        this.vchange.emit({
            name: this.name,
            open: this.open
        });
    }
    getCssClassMap() {
        return {
            'item': true,
            'active': this.open
        };
    }
    render() {
        return (h(Host, null,
            h("div", { class: this.getCssClassMap() },
                h("div", { class: "handle", onClick: this.bindClick.bind(this) },
                    h("h2", { class: "title" },
                        h("span", { class: "label" },
                            h("slot", { name: "title" }, this.titles)),
                        h("span", { class: "indicate" },
                            h("slot", { name: "indicate" },
                                h("hc-icon", { name: this.arrow }))))),
                h("div", { class: "content" },
                    h("slot", null)))));
    }
    static get is() { return "hc-collapse-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["collapse-item.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["collapse-item.css"]
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
            "reflect": false
        },
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
        "open": {
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
            "attribute": "open",
            "reflect": false,
            "defaultValue": "false"
        },
        "arrow": {
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
            "attribute": "arrow",
            "reflect": false,
            "defaultValue": "'arrow-right'"
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
    static get watchers() { return [{
            "propName": "open",
            "methodName": "openHandle"
        }]; }
}
