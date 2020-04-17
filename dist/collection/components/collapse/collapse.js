import { Host, h } from "@stencil/core";
export class Collapse {
    constructor() {
        this.accordion = false;
    }
    componentDidLoad() {
        var open = this.open ? this.open.split(',') : [];
        var slots = this.el.shadowRoot.querySelector('slot');
        var children = slots.assignedElements();
        children.forEach((item, index) => {
            if (!item.getAttribute('name')) {
                item.setAttribute('name', `${index}`);
            }
            if (open.indexOf(item.getAttribute('name')) >= 0) {
                item.setAttribute('open', `true`);
            }
            item.addEventListener('vchange', (e) => {
                var detail = e.detail;
                var i = open.indexOf(detail.name);
                if (i >= 0) {
                    open.splice(i, 1);
                }
                else {
                    if (this.accordion) {
                        open = [detail.name];
                    }
                    else {
                        open.push(detail.name);
                    }
                }
                this.open = open.join(',');
                children.forEach((son) => {
                    if (open.indexOf(son.getAttribute('name')) >= 0) {
                        son.setAttribute('open', `true`);
                    }
                    else {
                        son.removeAttribute('open');
                    }
                });
            });
        });
    }
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "hc-collapse"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["collapse.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["collapse.css"]
    }; }
    static get properties() { return {
        "open": {
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
            "attribute": "open",
            "reflect": false
        },
        "accordion": {
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
            "attribute": "accordion",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get elementRef() { return "el"; }
}
