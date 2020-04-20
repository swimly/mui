import { Host, h } from "@stencil/core";
export class Popover {
    constructor() {
        this.data = '[]';
        this.offset = 10;
        this.parent = { width: 0, height: 0 };
    }
    componentDidLoad() {
        this.$wrap = this.el.shadowRoot.querySelector('.popover');
        this.parent.width = document.body.offsetWidth;
        this.parent.height = document.querySelector('hc-page').clientHeight;
        this.initPosition();
    }
    setStyle() {
        const { type } = this;
        this.$wrap.style.transform = `scale(0)`;
        if (this.direction) {
            if (type.indexOf('bottom') >= 0) {
                this.$wrap.style.marginTop = `${this.cp.height + this.offset}px`;
                if (type == 'bottom-center') {
                    this.$wrap.style.marginTop = `${this.cp.height + this.offset}px`;
                    this.$wrap.style.marginLeft = `${-(this.wp.width - this.cp.width) / 2}px`;
                }
            }
            if (type.indexOf('top') >= 0) {
                this.$wrap.style.bottom = `${this.cp.height + this.offset}px`;
                if (type == 'top-center') {
                    this.$wrap.style.marginLeft = `${-(this.wp.width - this.cp.width) / 2}px`;
                }
            }
        }
        else {
            this.$wrap.style.position = 'fixed';
            if (this.type.indexOf('bottom') >= 0) {
                this.$wrap.style.top = `${this.cp.y + this.cp.height + this.offset}px`;
            }
            if (this.type.indexOf('left') > 0) {
                this.$wrap.style.left = `${this.cp.x}px`;
            }
            if (this.type.indexOf('right') > 0) {
                this.$wrap.style.left = 'auto';
                this.$wrap.style.right = `${this.parent.width - this.cp.x - this.cp.width}px`;
            }
            if (this.type.indexOf('center') > 0) {
                var mid = this.cp.x - (this.wp.width - this.cp.width) / 2;
                this.$wrap.style.left = `${mid}px`;
            }
            if (this.type.indexOf('top') >= 0) {
                this.$wrap.style.top = 'auto';
                this.$wrap.style.bottom = `${this.parent.height - this.cp.y + this.offset}px`;
            }
        }
        this.renderOrigin();
    }
    renderOrigin() {
        const { type } = this;
        if (type == 'bottom-center') {
            this.$wrap.style.transformOrigin = 'center top';
            this.$wrap.style.boxShadow = `0 2px 3px #ccc`;
        }
        if (type == 'bottom-left') {
            this.$wrap.style.transformOrigin = `${this.cp.width / 2}px top`;
            this.$wrap.style.boxShadow = `2px 2px 3px #ccc`;
        }
        if (type == 'bottom-right') {
            this.$wrap.style.transformOrigin = `${this.wp.width - this.cp.width + this.cp.width / 2}px top`;
            this.$wrap.style.boxShadow = `0 -2px -3px #ccc`;
        }
        if (type == 'top-center') {
            this.$wrap.style.transformOrigin = 'center bottom';
            this.$wrap.style.boxShadow = `0 -2px 3px #ccc`;
        }
        if (type == 'top-left') {
            this.$wrap.style.transformOrigin = `${this.cp.width / 2}px bottom`;
            this.$wrap.style.boxShadow = `2px -2px 3px #ccc`;
        }
        if (type == 'top-right') {
            this.$wrap.style.transformOrigin = `${this.wp.width - this.cp.width + this.cp.width / 2}px bottom`;
            this.$wrap.style.boxShadow = `-2px -2px 3px #ccc`;
        }
    }
    async bindClick() {
        setTimeout(() => {
            this.$wrap.style.transition = '0.3s';
            this.$wrap.style.transform = `scale(1)`;
        }, 30);
    }
    async initPosition() {
        this.wp = this.$wrap.getBoundingClientRect();
        if (this.direction) {
            this.type = this.direction;
            this.cp = this.el.getBoundingClientRect();
        }
        else {
            this.cp = JSON.parse(this.position);
            this.computedPosition();
        }
        this.setStyle();
    }
    computedPosition() {
        var pos = [];
        // 垂直居上
        if (this.parent.height - this.cp.height - this.cp.y < this.parent.height / 2) {
            pos[0] = 'top';
        }
        // 垂直居下
        if (this.parent.height - this.cp.height - this.cp.y >= this.parent.height / 2) {
            pos[0] = 'bottom';
        }
        // 水平靠左
        if (this.cp.x < this.wp.width && (this.parent.width - this.cp.width - this.cp.x) > this.wp.width) {
            pos[1] = 'left';
        }
        // 水平靠右
        if (this.cp.x > this.wp.width && (this.parent.width - this.cp.width - this.cp.x) < this.wp.width) {
            pos[1] = 'right';
        }
        // 水平居中
        if (this.cp.x > this.wp.width && (this.parent.width - this.cp.width - this.cp.x) > this.wp.width) {
            pos[1] = 'center';
        }
        this.type = pos.join('-');
    }
    render() {
        var data = eval(`(${this.data})`);
        return (h(Host, null,
            h("div", { class: "handle", onClick: this.bindClick.bind(this) },
                h("slot", null)),
            h("div", { class: "popover" }, data.map((item) => {
                return (h("p", { class: "item" },
                    h("span", { class: "label" }, item.label)));
            }))));
    }
    /**
     * 已服务的形式调用
     */
    async init(option) {
        const popover = document.createElement('hc-popover');
        Object.keys(option).forEach(key => {
            popover.setAttribute(key, option[key]);
        });
        popover.setAttribute('service', 'true');
        document.body.appendChild(popover);
        popover.bindClick();
        return popover;
    }
    static get is() { return "hc-popover"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["popover.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["popover.css"]
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
            "reflect": false
        },
        "position": {
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
            "attribute": "position",
            "reflect": false
        },
        "data": {
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
            "attribute": "data",
            "reflect": false,
            "defaultValue": "'[]'"
        },
        "offset": {
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
            "attribute": "offset",
            "reflect": false,
            "defaultValue": "10"
        }
    }; }
    static get methods() { return {
        "bindClick": {
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
        },
        "initPosition": {
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
        },
        "init": {
            "complexType": {
                "signature": "(option: any) => Promise<HTMLHcPopoverElement>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "HTMLHcPopoverElement": {
                        "location": "global"
                    }
                },
                "return": "Promise<HTMLHcPopoverElement>"
            },
            "docs": {
                "text": "\u5DF2\u670D\u52A1\u7684\u5F62\u5F0F\u8C03\u7528",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
}
