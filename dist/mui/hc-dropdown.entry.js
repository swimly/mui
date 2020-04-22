import { r as registerInstance, d as createEvent, h, c as getElement } from './core-3c51ccf2.js';

const Dropdown = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.confirm = createEvent(this, "confirm", 7);
    }
    componentDidLoad() {
        this.$dropdown = this.el.shadowRoot.querySelector('.dropdown');
        this.$dropdownItem = this.el.shadowRoot.querySelectorAll('.dropdown-item');
        this.$pop = this.el.shadowRoot.querySelectorAll('.pop');
        this.$pop.forEach((el, index) => {
            let list = el.querySelector('.pop-list');
            let listItem = el.querySelectorAll('.pop-list li');
            let active = 0;
            el.style.top = this.$dropdown.offsetTop + this.$dropdown.offsetHeight + 'px';
            list.style.top = `-${list.offsetHeight}px`;
            el.style.display = 'none';
            // 弹出列表点击选中，并隐藏弹出层
            listItem.forEach((item, idx) => {
                item.addEventListener('click', () => {
                    listItem[active].classList.remove('active');
                    active = idx;
                    item.classList.add('active');
                    this.confirm.emit({ idx: index, subIdx: idx });
                    setTimeout(() => {
                        this.hide(index);
                    });
                });
            });
        });
        let activePopIdx = null;
        this.$dropdownItem.forEach((el, idx) => {
            el.addEventListener('click', () => {
                // 隐藏上一个激活的
                if (activePopIdx !== null) {
                    this.$pop[activePopIdx].style.display = 'none';
                    this.$pop[activePopIdx].classList.remove('active');
                    this.$dropdownItem[activePopIdx].classList.remove('active');
                }
                // 当前激活
                activePopIdx = idx;
                this.$dropdownItem[idx].classList.add('active');
                this.$pop[idx].style.display = 'block';
                setTimeout(() => {
                    // 弹出显示
                    this.$pop[idx].classList.add('active');
                    // 遮罩点击，弹出隐藏
                    this.$pop[idx].querySelector('.pop-mask').addEventListener('click', () => {
                        this.hide(idx);
                    });
                }, 30);
            });
        });
    }
    hide(idx) {
        this.$pop[idx].classList.remove('active');
        this.$dropdownItem[idx].classList.remove('active');
        setTimeout(() => {
            this.$pop[idx].style.display = 'none';
        }, 300);
    }
    render() {
        return (h("div", null, h("div", { class: "dropdown" }, h("div", { class: "dropdown-item" }, h("div", { class: "dropdown-item-name" }, "\u7EFC\u5408"), h("hc-icon", { name: "arrowDown", size: 12, class: "dropdown-item-icon" })), h("div", { class: "dropdown-item" }, h("div", { class: "dropdown-item-name" }, "\u6392\u5E8F"), h("hc-icon", { name: "arrowDown", size: 12, class: "dropdown-item-icon" }))), h("div", { class: "pop" }, h("div", { class: "pop-mask" }), h("ul", { class: "pop-list" }, h("li", null, "\u7EFC\u5408\u6392\u5E8F"), h("li", null, "\u65B0\u54C1\u4F18\u5148"), h("li", null, "\u8BC4\u4EF7\u6570\u4ECE\u9AD8\u5230\u4F4E"))), h("div", { class: "pop" }, h("div", { class: "pop-mask" }), h("ul", { class: "pop-list" }, h("li", null, "\u4EF7\u683C\u4ECE\u9AD8\u5230\u4F4E"), h("li", null, "\u4EF7\u683C\u4ECE\u4F4E\u5230\u9AD8"), h("li", null, "\u9500\u91CF\u4ECE\u9AD8\u5230\u4F4E"), h("li", null, "\u9500\u91CF\u4ECE\u4F4E\u5230\u9AD8")))));
    }
    get el() { return getElement(this); }
    static get style() { return ".dropdown {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n  background: #fff;\n  overflow: hidden;\n}\n.dropdown-item {\n  flex: 1;\n  font-size: 14px;\n  color: #333;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 44px;\n}\n.dropdown-item-icon {\n  display: inline-block;\n  transition: 0.3s;\n  margin-left: 5px;\n}\n.dropdown-item.active {\n  color: #2170D9;\n}\n.dropdown-item.active .dropdown-item-icon {\n  transform: rotate(180deg);\n}\n\n.pop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n}\n.pop.active .pop-mask {\n  opacity: 1;\n}\n.pop.active .pop-list {\n  top: 0 !important;\n}\n.pop-mask {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  transition: 0.3s;\n}\n.pop-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  background: #fff;\n  transition: 0.3s;\n}\n.pop-list li {\n  font-size: 14px;\n  color: #333;\n  line-height: 40px;\n  padding: 0 20px;\n}\n.pop-list li:active {\n  background: #f5f5f5;\n}\n.pop-list li.active {\n  color: #2170D9;\n}"; }
};

export { Dropdown as hc_dropdown };
