import { Host, h } from "@stencil/core";
export class ListItem {
    constructor() {
        this.prefixSize = '36';
        this.iconColor = '#2170D9';
        this.reverse = false;
    }
    render() {
        var prefixSize = this.prefixSize.split(',');
        if (prefixSize.length == 1) {
            prefixSize.push(prefixSize[0]);
        }
        var title = this.titles.replace(this.filter, `<span class="filter">${this.filter}</span>`);
        return (h(Host, { style: { alignItems: this.vertical, flexDirection: this.reverse ? 'row-reverse' : 'row' } },
            h("div", { class: "prefix", style: this.reverse ? { marginLeft: '0.4rem' } : { marginRight: '0.4rem' } },
                h("slot", { name: "prefix" }, (() => {
                    if (this.type == 'sort') {
                        return (h("span", { class: "sort" }, this.keys));
                    }
                    if (this.prefixUrl) {
                        return (h("hc-image", { width: parseInt(prefixSize[0]), height: parseInt(prefixSize[1]), src: this.prefixUrl }));
                    }
                })())),
            h("div", { class: "content" },
                h("hc-row", null,
                    h("hc-col", { flex: 1, align: "left" },
                        h("h2", { class: "title", style: { overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', webkitLineClamp: this.ellipsis, webkitBoxOrient: 'vertical' }, innerHTML: title })),
                    h("hc-col", { span: this.suffixIcon ? 2 : 0, align: "right" },
                        h("span", { class: "suffix" },
                            h("slot", { name: "suffix" },
                                h("hc-icon", { color: this.iconColor, size: 24, name: this.suffixIcon }))))),
                h("slot", null,
                    h("hc-row", { class: "date" },
                        h("hc-col", { align: "left" }, this.date))))));
    }
    static get is() { return "hc-list-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["list-item.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["list-item.css"]
    }; }
    static get properties() { return {
        "keys": {
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
            "attribute": "keys",
            "reflect": false
        },
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
        "date": {
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
            "attribute": "date",
            "reflect": false
        },
        "suffixIcon": {
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
            "attribute": "suffix-icon",
            "reflect": false
        },
        "prefixUrl": {
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
            "attribute": "prefix-url",
            "reflect": false
        },
        "prefixSize": {
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
            "attribute": "prefix-size",
            "reflect": false,
            "defaultValue": "'36'"
        },
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
        "iconColor": {
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
            "attribute": "icon-color",
            "reflect": false,
            "defaultValue": "'#2170D9'"
        },
        "ellipsis": {
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
            "attribute": "ellipsis",
            "reflect": false
        },
        "vertical": {
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
            "attribute": "vertical",
            "reflect": false
        },
        "filter": {
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
            "attribute": "filter",
            "reflect": false
        },
        "reverse": {
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
            "attribute": "reverse",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
