import { r as registerInstance, d as createEvent, h, H as Host, c as getElement } from './core-3c51ccf2.js';
import './_commonjsHelpers-a89313bc.js';
import { H as Hammer } from './hammer-96a2b7b2.js';

const Picker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.itemHeight = 44;
        this.vis = 5;
        this.cancelLabel = '取消';
        this.confirmLabel = '确定';
        this.separate = ',';
        this.label = [];
        this.vchange = createEvent(this, "vchange", 7);
        this.vclick = createEvent(this, "vclick", 7);
    }
    componentWillLoad() {
        this.parseData(this.value.split(','));
    }
    componentDidLoad() {
        this.bindTouch();
    }
    bindTouch() {
        var items = this.el.shadowRoot.querySelectorAll('.column');
        items.forEach((item, index) => {
            const hammer = new Hammer(item);
            var wrap = item.querySelector('.wrap');
            hammer.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });
            hammer.on('pan', (e) => {
                wrap.style.transition = '0s';
                wrap.style.transform = `translateY(${this.offset[index] + e.deltaY}px)`;
            });
            hammer.on('panend', (e) => {
                this.offset[index] = this.offset[index] + e.deltaY;
                var idx = this.parseYToIndex(this.offset[index]);
                if (idx <= 0) {
                    idx = 0;
                }
                if (idx >= this.formatData[index].length - 1) {
                    idx = this.formatData[index].length - 1;
                }
                this.key[index] = idx;
                wrap.style.transition = '0.3s';
                wrap.style.transform = `translateY(${this.parseIndexToY(this.key[index])}px)`;
                this.key.forEach((key, i) => {
                    if (i > index) {
                        this.key[index] = 0;
                        this.label[i] = '';
                    }
                    else {
                        this.label[i] = this.formatData[i][key].label;
                    }
                });
                this.parseData(this.label);
                this.value = this.label.join(this.separate);
                this.render();
                this.vchange.emit({
                    label: this.value,
                    value: this.selected
                });
            });
        });
    }
    parseIndexToY(index) {
        var pos = (this.vis - 1) / 2 - index;
        return pos * this.itemHeight;
    }
    parseYToIndex(y) {
        var half = (this.vis - 1) / 2 * this.itemHeight;
        var index = Math.round((half - y) / this.itemHeight);
        return index;
    }
    parseData(label) {
        this.selected = [];
        this.formatData = [];
        this.key = [];
        this.offset = [];
        var index = 0;
        var _this = this;
        this.data = typeof this.data == 'string' ? eval(`(${this.data})`) : this.data;
        var current = this.isCascade(this.data) ? this.data : this.data[index];
        while (current && Array.isArray(current) && current.length) {
            _this.formatData.push(current);
            if (label && label[index] !== undefined) {
                current.some(function (item, i) {
                    if (item.label === label[index]) {
                        _this.selected[index] = item;
                        _this.key[index] = i;
                        label[index] = item.label;
                        _this.offset[index] = _this.parseIndexToY(i);
                        return true;
                    }
                });
            }
            if (!_this.selected[index]) {
                _this.selected[index] = current[0];
                _this.key[index] = 0;
                label[index] = current[0].label;
                _this.offset[index] = _this.parseIndexToY(0);
            }
            index++;
            current = _this.isCascade(_this.data) ? _this.selected[_this.selected.length - 1].children : _this.originData[index];
        }
        this.label = label;
        this.value = label.join(this.separate);
    }
    isCascade(data) {
        return data[0] && this.isPlainObject(data[0]);
    }
    _typeof(obj) {
        return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
    }
    isPlainObject(obj) {
        return this._typeof(obj) === 'object';
    }
    onClick(type) {
        this.vclick.emit({
            type: type,
            label: this.value,
            value: this.selected
        });
    }
    render() {
        var { formatData } = this;
        return (h(Host, null, h("div", { class: "head", style: { height: `${this.itemHeight}px` } }, h("p", { class: "cancel", onClick: this.onClick.bind(this, 'cancel') }, this.cancelLabel), h("h2", null, this.value), h("p", { class: "confirm", onClick: this.onClick.bind(this, 'confirm') }, this.confirmLabel)), h("div", { class: "content", style: { height: `${this.itemHeight * this.vis}px` } }, formatData.map((row, index) => {
            return (h("div", { class: "column" }, h("div", { class: "indicate", style: { height: `${this.itemHeight}px` } }), h("div", { class: "wrap", style: { transform: `translateY(${this.offset[index]}px)` } }, row.map((item) => {
                return (h("div", { class: "item", style: { height: `${this.itemHeight}px` } }, h("p", null, item.label)));
            }))));
        }))));
    }
    async init(option) {
        const picker = document.createElement('hc-picker');
        const drawer = document.createElement('hc-drawer');
        drawer.setAttribute('direction', 'btt');
        drawer.setAttribute('round', 'true');
        Object.keys(option).forEach(key => {
            picker.setAttribute(key, option[key]);
        });
        picker.setAttribute('service', 'true');
        drawer.setAttribute('role', 'picker');
        drawer.appendChild(picker);
        document.body.appendChild(drawer);
        picker.addEventListener('vclick', () => {
            drawer.destory();
        });
        setTimeout(() => {
            drawer.init();
        }, 30);
        return picker;
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  display: block;\n  overflow: hidden;\n  font-size: 0.7rem;\n  position: relative;\n  padding: 0.5rem 1rem;\n}\n:host .indicate {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 1;\n}\n:host .indicate:before {\n  content: \"\";\n  display: inline-block;\n  width: 200%;\n  height: 200%;\n  border-top: 1px solid #e6e6e6;\n  border-bottom: 1px solid #e6e6e6;\n  transform: scaleY(0.5);\n  transform-origin: left top;\n}\n:host .head {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n  margin-bottom: 0.5rem;\n}\n:host .head:after {\n  content: \"\";\n  display: inline-block;\n  width: 100%;\n  height: 1px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background: #e6e6e6;\n  transform: scaleY(0.5);\n}\n:host .head h2 {\n  font-size: 0.8rem;\n  color: #262626;\n  font-weight: normal;\n  flex: 1;\n  margin: 0 1rem;\n  text-align: center;\n}\n:host .head p {\n  margin: 0;\n  color: #8c8c8c;\n}\n:host .head p.confirm {\n  color: #2170D9;\n}\n:host .content {\n  display: flex;\n  flex-direction: row;\n}\n:host .content .column {\n  flex: 1;\n  position: relative;\n  z-index: 2;\n  overflow: hidden;\n  -webkit-mask-box-image: -webkit-linear-gradient(bottom, transparent, transparent 5%, #fff 40%, #fff 60%, transparent 95%, transparent);\n  -webkit-mask-box-image: linear-gradient(top, transparent, transparent 5%, #fff 20%, #fff 80%, transparent 95%, transparent);\n}\n:host .content .column .wrap {\n  position: relative;\n  width: 100%;\n}\n:host .content .column .wrap .item {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  overflow: hidden;\n}\n:host .content .column .wrap .item p {\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}"; }
};

export { Picker as hc_picker };
