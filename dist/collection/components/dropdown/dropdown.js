import { h } from "@stencil/core";
export class Dropdown {
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
        return (h("div", null,
            h("div", { class: "dropdown" },
                h("div", { class: "dropdown-item" },
                    h("div", { class: "dropdown-item-name" }, "\u7EFC\u5408"),
                    h("hc-icon", { name: "arrowDown", size: 12, class: "dropdown-item-icon" })),
                h("div", { class: "dropdown-item" },
                    h("div", { class: "dropdown-item-name" }, "\u6392\u5E8F"),
                    h("hc-icon", { name: "arrowDown", size: 12, class: "dropdown-item-icon" }))),
            h("div", { class: "pop" },
                h("div", { class: "pop-mask" }),
                h("ul", { class: "pop-list" },
                    h("li", null, "\u7EFC\u5408\u6392\u5E8F"),
                    h("li", null, "\u65B0\u54C1\u4F18\u5148"),
                    h("li", null, "\u8BC4\u4EF7\u6570\u4ECE\u9AD8\u5230\u4F4E"))),
            h("div", { class: "pop" },
                h("div", { class: "pop-mask" }),
                h("ul", { class: "pop-list" },
                    h("li", null, "\u4EF7\u683C\u4ECE\u9AD8\u5230\u4F4E"),
                    h("li", null, "\u4EF7\u683C\u4ECE\u4F4E\u5230\u9AD8"),
                    h("li", null, "\u9500\u91CF\u4ECE\u9AD8\u5230\u4F4E"),
                    h("li", null, "\u9500\u91CF\u4ECE\u4F4E\u5230\u9AD8")))));
    }
    static get is() { return "hc-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["dropdown.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["dropdown.css"]
    }; }
    static get events() { return [{
            "method": "confirm",
            "name": "confirm",
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
}
