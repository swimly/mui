import { r as registerInstance, h, H as Host } from './core-3c51ccf2.js';

const ListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.prefixSize = '36';
        this.iconColor = '#2170D9';
        this.reverse = false;
    }
    render() {
        var prefixSize = this.prefixSize.split(',');
        if (prefixSize.length == 1) {
            prefixSize.push(prefixSize[0]);
        }
        var title = this.titles.replace(this.filter, `<span class="filter">${this.filter}</span>`);
        return (h(Host, { style: { alignItems: this.vertical, flexDirection: this.reverse ? 'row-reverse' : 'row' } }, h("div", { class: "prefix", style: this.reverse ? { marginLeft: '0.4rem' } : { marginRight: '0.4rem' } }, h("slot", { name: "prefix" }, (() => {
            if (this.type == 'sort') {
                return (h("span", { class: "sort" }, this.key));
            }
            if (this.prefixUrl) {
                return (h("hc-image", { width: parseInt(prefixSize[0]), height: parseInt(prefixSize[1]), src: this.prefixUrl }));
            }
        })())), h("div", { class: "content" }, h("hc-row", null, h("hc-col", { flex: 1, align: "left" }, h("h2", { class: "title", style: { overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', webkitLineClamp: this.ellipsis, webkitBoxOrient: 'vertical' }, innerHTML: title })), h("hc-col", { span: this.suffixIcon ? 2 : 0, align: "right" }, h("span", { class: "suffix" }, h("slot", { name: "suffix" }, h("hc-icon", { color: this.iconColor, size: 24, name: this.suffixIcon }))))), h("slot", null, h("hc-row", { class: "date" }, h("hc-col", { align: "left" }, this.date))))));
    }
    static get style() { return ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  padding: 1rem 0;\n  position: relative;\n}\n:host:after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  background: #e6e6e6;\n  height: 1px;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\n:host .prefix .sort {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 0.8rem;\n  height: 0.8rem;\n  background: #2170D9;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 0.5rem;\n  margin: 0.2rem 0 0 0;\n}\n:host .prefix hc-image {\n  margin: 0.2rem 0 0 0;\n}\n:host .content {\n  -ms-flex: 1;\n  flex: 1;\n}\n:host .content .title {\n  font-size: 0.8rem;\n  color: #262626;\n  margin: 0;\n  font-weight: normal;\n  line-height: 1.4;\n  margin-bottom: 0.4rem;\n}\n:host .content .title .filter {\n  color: #2170D9;\n  margin: 0 0.1rem;\n}\n:host .content .date {\n  font-size: 0.7rem;\n  color: #8c8c8c;\n}"; }
};

export { ListItem as hc_list_item };
