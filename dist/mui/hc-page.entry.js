import { r as registerInstance, d as createEvent, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const Page = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.leftButtons = '[{icon: "arrow-lift", label: "返回", id: "back"}]';
        this.rightButtons = '[]';
        this.padding = '0';
        this.color = '#262626';
        this.headBackground = '#fff';
        this.background = '#f5f5f5';
        this.scrolldistance = 0;
        this.hideHeader = false;
        this.vscroll = createEvent(this, "vscroll", 7);
        this.vclick = createEvent(this, "vclick", 7);
    }
    componentDidLoad() {
        this.renderStyle();
        var section = this.el.shadowRoot.querySelector('section');
        section.addEventListener('scroll', () => {
            this.scrolldistance = Math.round(this.el.shadowRoot.querySelector('section').scrollTop);
            this.el.setAttribute('scrolldistance', `${this.scrolldistance}`);
            this.vscroll.emit({
                scrollTop: this.scrolldistance,
                offsetTop: section.offsetTop
            });
        });
    }
    // 初始化样式
    renderStyle() {
        let leftButtons = eval(`(${this.leftButtons})`);
        let rightButtons = eval(`(${this.rightButtons})`);
        if (leftButtons.length) {
            if (!leftButtons[0].hasOwnProperty('icon')) {
                this.$header.style.paddingLeft = '1rem';
            }
        }
        if (rightButtons.length) {
            if (!rightButtons[rightButtons.length - 1].hasOwnProperty('icon')) {
                this.$header.style.paddingRight = '1rem';
            }
        }
    }
    leftButtonsHandle(newValue) {
        console.log(newValue);
    }
    async scrollGo(pos) {
        this.scrollAnimation(this.scrolldistance, pos);
    }
    scrollAnimation(currentY, targetY) {
        let needScrollTop = targetY - currentY;
        let _currentY = currentY;
        setTimeout(() => {
            // 一次调用滑动帧数，每次调用会不一样
            const dist = Math.ceil(needScrollTop / 10);
            _currentY += dist;
            this.$slot.scrollTo(_currentY, currentY);
            // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
            if (needScrollTop > 10 || needScrollTop < -10) {
                this.scrollAnimation(_currentY, targetY);
            }
            else {
                this.$slot.scrollTo(_currentY, targetY);
            }
        }, 1);
    }
    buttonClick(item) {
        this.vclick.emit(item);
        if (item.id == 'back') {
            window.history.go(-1);
        }
    }
    render() {
        let leftButtons = eval(`(${this.leftButtons})`);
        let rightButtons = eval(`(${this.rightButtons})`);
        return (h(Host, null, h("div", { class: "hc-header", style: !this.hideHeader ? { backgroundColor: this.headBackground, color: this.color } : { display: 'none' } }, h("div", { class: "hc-header__buttons" }, leftButtons ? leftButtons.map((item, index) => (h("p", { class: "hc-header__buttons_item", key: index, style: { color: item.color }, onClick: this.buttonClick.bind(this, item) }, h("hc-icon", { size: 28, name: item.icon }), h("span", null, item.label)))) : h("span", null)), h("h1", { class: "hc-header__title" }, this.titles), h("div", { class: "hc-header__buttons" }, rightButtons ? rightButtons.map((item, index) => (h("p", { class: "hc-header__buttons_item", key: index, style: { color: item.color } }, h("hc-icon", { size: 28, name: item.icon }), h("span", null, item.label)))) : h("span", null))), h("section", null, h("slot", null)), h("slot", { name: "footer" })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "leftButtons": ["leftButtonsHandle"]
    }; }
    static get style() { return ":host {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n:host .hc-header {\n  background-color: #5077AA;\n  height: 2.4rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  color: #fff;\n  padding: 0 0.5rem;\n  -webkit-box-shadow: 0 1px 1px rgba(230, 230, 230, 0.4);\n  box-shadow: 0 1px 1px rgba(230, 230, 230, 0.4);\n}\n:host .hc-header__title {\n  font-size: 0.9rem;\n  color: inherit;\n  font-weight: normal;\n  margin: 0;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  text-align: center;\n}\n:host .hc-header__buttons {\n  -webkit-box-flex: 0.5;\n  -ms-flex: 0.5;\n  flex: 0.5;\n  font-size: 0.8rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n:host .hc-header__buttons:last-child {\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n}\n:host .hc-header__buttons_item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin: 0;\n}\n:host section {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  overflow: auto;\n  overflow-x: hidden;\n  width: 100%;\n  display: block;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  font-size: 0.8rem;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  position: relative;\n  background-color: #f5f5f5;\n}\n:host section slot {\n  display: block;\n}\n\n:host([scrollabled=false]) section slot {\n  height: 100%;\n}"; }
};

export { Page as hc_page };
