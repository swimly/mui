import { Host, h } from "@stencil/core";
export class Switch {
    valueHandle(value) {
        this.el.setAttribute('value', `${value}`);
    }
    componentDidLoad() {
        const core = this.el.shadowRoot.querySelector('input');
        core.addEventListener('change', () => {
            this.value = core.checked;
        });
    }
    render() {
        return (h(Host, null,
            h("label", null,
                h("input", { checked: this.value, class: "hc-switch hc-switch-anim", type: "checkbox" })),
            h("slot", null)));
    }
    static get is() { return "hc-switch"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["switch.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["switch.css"]
    }; }
    static get properties() { return {
        "value": {
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
            "attribute": "value",
            "reflect": false
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "value",
            "methodName": "valueHandle"
        }]; }
}
