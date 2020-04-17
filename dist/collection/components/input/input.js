import { Host, h } from "@stencil/core";
export class Input {
    constructor() {
        this.type = 'text';
        this.placeholder = '请输入';
        this.clearable = false;
    }
    onFocusHandle(e) {
        console.log(e);
    }
    clearHandle() {
        this.$core.value = '';
        this.$clear.style.display = 'none';
    }
    errorHandle(value) {
        this.el.setAttribute('error', value);
    }
    warningHandle(value) {
        this.el.setAttribute('warning', value);
    }
    componentDidLoad() {
        this.$core = this.el.shadowRoot.querySelector('.hc-input__core');
        this.$clear = this.el.shadowRoot.querySelector('#clear');
        if (this.clearable) {
            this.$core.addEventListener('keyup', (e) => {
                if (e.target.value) {
                    this.$clear.style.display = 'flex';
                }
                else {
                    this.$clear.style.display = 'none';
                }
            });
        }
        this.$core.addEventListener('keyup', (e) => {
            const count = this.el.shadowRoot.querySelector('#total');
            count.innerHTML = e.target.value.length;
        });
        this.$core.addEventListener('keydown', (e) => {
            const count = this.el.shadowRoot.querySelector('#total');
            count.innerHTML = e.target.value.length;
        });
    }
    render() {
        return (h(Host, null,
            h("div", { class: this.getCssClassMap() },
                h("div", { class: "hc-input__prefix", style: { color: this.prefixColor, marginRight: this.prefixIcon ? null : '0px' } },
                    h("slot", { name: "prefix" },
                        h("hc-icon", { size: 28, name: this.prefixIcon }))),
                this.type == 'textarea' ? h("textarea", { value: this.value, maxlength: this.maxlength, minlength: this.minlength, rows: 4, class: "hc-input__core" }) : h("input", { value: this.value, maxlength: this.maxlength, minlength: this.minlength, onFocus: this.onFocusHandle.bind(this), placeholder: this.placeholder, class: "hc-input__core", type: this.type }),
                h("div", { class: "hc-input__notice" },
                    this.maxlength ? h("span", { class: "hc-input__count" },
                        h("span", { id: "total" }, "0"),
                        "/",
                        this.maxlength) : '',
                    this.clearable ? h("hc-icon", { onClick: this.clearHandle.bind(this), size: 28, class: "hc-input__clear", id: "clear", name: "reeor-fill" }) : h("span", null)),
                h("div", { class: "hc-input__suffix", style: { color: this.suffixColor, marginLeft: this.suffixIcon ? null : '0px' } },
                    h("slot", { name: "suffix" },
                        h("hc-icon", { size: 28, name: this.suffixIcon }))))));
    }
    getCssClassMap() {
        return {
            'hc-input': true,
            [this.type]: true
        };
    }
    static get is() { return "hc-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["input.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["input.css"]
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
            "reflect": false,
            "defaultValue": "'text'"
        },
        "placeholder": {
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
            "attribute": "placeholder",
            "reflect": false,
            "defaultValue": "'\u8BF7\u8F93\u5165'"
        },
        "prefixIcon": {
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
            "attribute": "prefix-icon",
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
        "prefixColor": {
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
            "attribute": "prefix-color",
            "reflect": false
        },
        "suffixColor": {
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
            "attribute": "suffix-color",
            "reflect": false
        },
        "clearable": {
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
            "attribute": "clearable",
            "reflect": false,
            "defaultValue": "false"
        },
        "maxlength": {
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
            "attribute": "maxlength",
            "reflect": false
        },
        "minlength": {
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
            "attribute": "minlength",
            "reflect": false
        },
        "error": {
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
            "attribute": "error",
            "reflect": false
        },
        "warning": {
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
            "attribute": "warning",
            "reflect": false
        },
        "value": {
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
            "attribute": "value",
            "reflect": false
        },
        "align": {
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
            "attribute": "align",
            "reflect": false
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "error",
            "methodName": "errorHandle"
        }, {
            "propName": "warning",
            "methodName": "warningHandle"
        }]; }
}
