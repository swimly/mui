import { r as registerInstance, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const Mask = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.background = 'rgba(0,0,0,0.5)';
        this.maskClosable = true;
        this.visible = false;
    }
    componentDidLoad() {
        if (this.background && !this.source) {
            this.el.style.background = this.background;
        }
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    async init(option) {
        const mask = document.createElement('hc-mask');
        var background = option.background ? option.background : 'rgba(0,0,0,0.5)';
        Object.keys(option).forEach(key => {
            mask.setAttribute(key, option[key]);
        });
        if (option.dom) {
            option.dom.appendChild(mask);
        }
        else {
            document.body.appendChild(mask);
        }
        if (option.source) {
            var pos = option.source.getBoundingClientRect();
            var height = document.querySelector('hc-page').clientHeight;
            var scale = Math.round((pos.y + pos.height) / height * 100);
            mask.style.background = `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0) ${scale}%, ${background} ${scale}%, ${background} 100%)`;
        }
        if (option.maskClosable) {
            mask.addEventListener('click', () => {
                var dom = option.dom ? option.dom : document.body;
                dom.removeChild(mask);
            });
        }
        return mask;
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}"; }
};

export { Mask as hc_mask };
