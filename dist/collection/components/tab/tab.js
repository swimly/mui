import { Host, h } from "@stencil/core";
export class Tab {
    constructor() {
        this.current = 0;
        this.indicateWidth = 10;
        this.align = 'flex-start';
        this.showMore = false;
        this.show = false;
        this.offset = 0;
    }
    componentDidLoad() {
        this.$items = this.el.shadowRoot.querySelectorAll('.tab-item');
        this.$indicate = this.el.shadowRoot.querySelector('.indicate');
        this.$more = this.el.shadowRoot.querySelector('.more');
        this.$wrap = this.el.shadowRoot.querySelector('.tab-wrap');
        this.width = this.el.clientWidth;
        this.diff = this.el.offsetLeft;
        this.renderIndicate();
    }
    tabItemCssMap(index) {
        return {
            'tab-item': true,
            'active': index == this.current
        };
    }
    moreItemCssMap(index) {
        return {
            'item': true,
            'active': index == this.current
        };
    }
    moreCssMap() {
        return {
            'more': true,
            'show': this.show
        };
    }
    renderWrap() {
        var item = this.$items[this.current];
        var last = this.$items[this.$items.length - 1];
        var lastleft = last.offsetLeft;
        var itemleft = item.offsetLeft;
        var max = lastleft - this.width + last.offsetWidth;
        // 如果点击的是屏幕右侧的item
        if (item.offsetLeft > this.width / 2) {
            this.offset = itemleft - this.width / 2 + item.offsetWidth / 2;
            // 当前点击的下一个item
            var next = this.current < this.$items.length - 1 ? this.$items[this.current + 1] : this.$items[this.$items.length - 1];
            // 如果当前点击的左距离加上下一个的宽度超过了允许滚动的最大值
            if (this.offset + next.offsetWidth >= max) {
                var more = this.showMore ? this.$more.offsetWidth : 0;
                this.offset = max + more;
            }
        }
        else {
            // 这时候应该归零
            this.offset = 0;
        }
        this.$wrap.style.transition = '0.3s';
        this.$wrap.style.transform = `translateX(-${this.offset}px)`;
    }
    renderIndicate() {
        var current = this.current;
        var left = this.$items[current].offsetLeft;
        console.log(left);
        var width = this.$items[current].offsetWidth;
        this.$indicate.style.left = `${left + (width - this.indicateWidth) / 2 - this.diff}px`;
    }
    itemClick(index) {
        this.current = index;
        this.render();
        this.renderWrap();
        this.renderIndicate();
    }
    onToggle() {
        this.show = !this.show;
    }
    render() {
        const data = eval(`(${this.data})`);
        return (h(Host, null,
            h("div", { class: "tab" },
                h("div", { class: "tab-wrap", style: { justifyContent: this.align } },
                    data.map((item, index) => {
                        return (h("span", { onClick: this.itemClick.bind(this, index), key: index, class: this.tabItemCssMap(index) }, item.label));
                    }),
                    h("span", { class: "indicate", style: { width: `${this.indicateWidth}px` } }))),
            (() => {
                if (this.showMore) {
                    return (h("div", { class: this.moreCssMap(), onClick: this.onToggle.bind(this) },
                        h("slot", null,
                            h("hc-icon", { name: "Rightbutton-fill", size: 26, color: "#8c8c8c" })),
                        h("ul", { class: "more-content" }, data.map((item, index) => {
                            return (h("li", null,
                                h("span", { onClick: this.itemClick.bind(this, index), class: this.moreItemCssMap(index) }, item.label)));
                        }))));
                }
            })()));
    }
    static get is() { return "hc-tab"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["tab.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["tab.css"]
    }; }
    static get properties() { return {
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
            "reflect": false
        },
        "current": {
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
            "attribute": "current",
            "reflect": false,
            "defaultValue": "0"
        },
        "indicateWidth": {
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
            "attribute": "indicate-width",
            "reflect": false,
            "defaultValue": "10"
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
            "reflect": false,
            "defaultValue": "'flex-start'"
        },
        "showMore": {
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
            "attribute": "show-more",
            "reflect": false,
            "defaultValue": "false"
        },
        "show": {
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
            "attribute": "show",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get elementRef() { return "el"; }
}
