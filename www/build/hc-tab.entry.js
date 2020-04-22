import { r as registerInstance, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const Tab = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, null, h("div", { class: "tab" }, h("div", { class: "tab-wrap", style: { justifyContent: this.align } }, data.map((item, index) => {
            return (h("span", { onClick: this.itemClick.bind(this, index), key: index, class: this.tabItemCssMap(index) }, item.label));
        }), h("span", { class: "indicate", style: { width: `${this.indicateWidth}px` } }))), (() => {
            if (this.showMore) {
                return (h("div", { class: this.moreCssMap(), onClick: this.onToggle.bind(this) }, h("slot", null, h("hc-icon", { name: "Rightbutton-fill", size: 26, color: "#8c8c8c" })), h("ul", { class: "more-content" }, data.map((item, index) => {
                    return (h("li", null, h("span", { onClick: this.itemClick.bind(this, index), class: this.moreItemCssMap(index) }, item.label)));
                }))));
            }
        })()));
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n:host:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 1px;\n  background: #e6e6e6;\n  transform: scaleY(0.5);\n}\n:host .tab {\n  flex: 1;\n  overflow: hidden;\n}\n:host .tab .indicate {\n  position: absolute;\n  display: inline-block;\n  width: 1em;\n  height: 2px;\n  background: #2170D9;\n  left: 0;\n  bottom: 0;\n  border-radius: 2px;\n  z-index: 10;\n  transition: 0.3s;\n}\n:host .tab-wrap {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: nowrap;\n  position: relative;\n  flex: 1;\n}\n:host .tab-wrap span {\n  flex-shrink: 0;\n  font-size: 0.8rem;\n  height: 2.4rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 0 1rem;\n}\n:host .tab-wrap span.active {\n  color: #2170D9;\n}\n:host .more slot {\n  background: #fff;\n  position: relative;\n  z-index: 10;\n}\n:host .more.show .more-content {\n  display: block;\n}\n:host .more-content {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 2.4rem;\n  background: #fff;\n  box-shadow: 0 2px 5px #ccc;\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: row;\n  list-style: none;\n  margin: 0;\n  flex-wrap: wrap;\n  display: flex;\n  flex-direction: row;\n  z-index: 10;\n  display: none;\n  z-index: 9;\n}\n:host .more-content li {\n  display: inline-block;\n  width: 33.33%;\n  padding: 0.2rem;\n  box-sizing: border-box;\n}\n:host .more-content li span {\n  display: inline-block;\n  height: 1.6rem;\n  line-height: 1.6rem;\n  border: 1px solid #e6e6e6;\n  width: 100%;\n  text-align: center;\n  font-size: 0.7rem;\n  border-radius: 0.2rem;\n}\n:host .more-content li span.active {\n  background: #2170D9;\n  border-color: #2170D9;\n  color: #fff;\n}"; }
};

export { Tab as hc_tab };
