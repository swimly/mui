import { r as registerInstance, h, H as Host, c as getElement } from './core-3c51ccf2.js';
import './_commonjsHelpers-a89313bc.js';
import { H as Hammer } from './hammer-96a2b7b2.js';

const Indexlist = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.letters = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z';
        this.current = 'A';
    }
    componentDidLoad() {
        const letters = this.el.shadowRoot.querySelectorAll('.letter');
        let position = [];
        letters.forEach((letter) => {
            const pos = letter.getBoundingClientRect();
            letter.setAttribute('top', `${Math.round(pos.y)}`);
            position.push(Math.round(pos.y));
        });
        this.pos = position;
        const slots = this.el.shadowRoot.querySelector('slot');
        const children = slots.assignedElements();
        let letterarr = [];
        children.forEach(item => {
            if (item.getAttribute('letter')) {
                letterarr.push(item);
            }
        });
        this.$letter = letterarr;
        let top = [];
        this.$letter.forEach(item => {
            top.push({
                key: item.innerHTML,
                value: item.offsetTop
            });
        });
        this.lettertop = top;
        this.bindTouch();
        this.bindScroll();
    }
    bindScroll() {
        const slot = this.el.shadowRoot.querySelector('slot');
        const handle = this.el.shadowRoot.querySelectorAll('.letter');
        let indicate = this.el.shadowRoot.querySelector('.indicate');
        let current = 0;
        slot.addEventListener('scroll', () => {
            clearTimeout(this.timer);
            let label = '';
            this.lettertop.forEach((item, index) => {
                if (slot.scrollTop >= item.value && slot.scrollTop < this.lettertop[index + 1].value) {
                    handle.forEach((key, idx) => {
                        if (item.key == key.querySelector('i').innerHTML) {
                            label = item.key;
                            const prev = idx > 1 ? idx - 1 : 0;
                            const next = idx < handle.length - 1 ? idx + 1 : handle.length - 1;
                            handle.forEach((text, i) => {
                                if (i == idx) {
                                    current = i;
                                }
                                if (i !== prev || i !== idx || i !== next) {
                                    text.classList.remove('prev');
                                    text.classList.remove('next');
                                    text.classList.remove('current');
                                }
                            });
                            handle[prev].classList.add('prev');
                            handle[next].classList.add('next');
                            key.classList.add('current');
                            indicate.classList.add('show');
                            indicate.querySelector('span').innerHTML = label;
                            indicate.setAttribute('style', `top:${this.pos[current]}px;`);
                        }
                    });
                }
            });
            this.timer = setTimeout(() => {
                indicate.classList.remove('show');
                handle.forEach(item => {
                    item.classList.remove('prev');
                    item.classList.remove('current');
                    item.classList.remove('next');
                });
            }, 700);
        });
    }
    bindTouch() {
        const letter = this.el.shadowRoot.querySelector('.letters');
        let letters = this.el.shadowRoot.querySelectorAll('.letter');
        let indicate = this.el.shadowRoot.querySelector('.indicate');
        const hammer = new Hammer(letter);
        hammer.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });
        let current = 0;
        let prev = 0;
        let next = 0;
        hammer.on('pan', (e) => {
            this.pos.map((item, index) => {
                letters[index].classList.remove('prev');
                letters[index].classList.remove('next');
                letters[index].classList.remove('current');
                if (this.pos[index + 1]) {
                    if (e.center.y > item && e.center.y < this.pos[index + 1]) {
                        current = index;
                    }
                }
                else {
                    if (e.center.y > item) {
                        current = index;
                    }
                }
            });
            prev = current - 1 > 0 ? current - 1 : 0;
            next = current < this.pos.length - 1 ? current + 1 : this.pos.length - 1;
            letters[prev].classList.add('prev');
            letters[next].classList.add('next');
            letters[current].classList.add('current');
            this.current = this.letters.split(',')[current];
            indicate.setAttribute('style', `top:${this.pos[current]}px;`);
            indicate.classList.add('show');
            this.$letter.forEach(letter => {
                if (letter.getAttribute('letter') == this.current) {
                    this.el.shadowRoot.querySelector('slot').scrollTop = letter.offsetTop;
                }
            });
        });
        hammer.on('panend', () => {
            letters.forEach((item) => {
                item.classList.remove('current');
                item.classList.remove('prev');
                item.classList.remove('next');
                indicate.classList.remove('show');
            });
        });
    }
    render() {
        const arr = this.letters.split(',');
        return (h(Host, null, h("slot", null), h("div", { class: "indicate" }, h("span", null, this.current)), h("div", { class: "letters" }, arr.map(item => {
            return h("span", { class: "letter" }, h("span", null, item), " ", h("i", { class: "pop" }, item));
        }))));
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  display: block;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n}\n:host slot {\n  flex: 1;\n  height: 100%;\n  display: block;\n  overflow: auto;\n  background: #fff;\n  padding: 0 1rem;\n}\n:host slot hc-indexlist-letter {\n  background: #e6e6e6;\n}\n:host .indicate {\n  position: fixed;\n  top: 0;\n  width: 2rem;\n  height: 2rem;\n  right: 3.5rem;\n  background: #e6e6e6;\n  margin-top: 0.3rem;\n  transform: rotate(45deg) translateY(-50%);\n  border-radius: 80% 0 55% 50%/55% 0 80% 50%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n}\n:host .indicate.show {\n  opacity: 1;\n}\n:host .indicate span {\n  transform: rotate(-45deg);\n}\n:host .letters {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  justify-content: space-around;\n  padding: 1rem 0;\n}\n:host .letters span {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.6rem;\n  color: #8c8c8c;\n  width: 1.2rem;\n  transition: 0.2s;\n  height: 1.2rem;\n  position: relative;\n}\n:host .letters span .pop {\n  position: absolute;\n  background: #e6e6e6;\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  transform: translateX(-100%);\n  top: 50%;\n  margin-top: -1rem;\n  border-radius: 1rem 3rem 3rem 1rem;\n  display: none;\n}\n:host .letters span.prev, :host .letters span.next {\n  transform: translateX(-0.5rem);\n}\n:host .letters span.current {\n  transform: translateX(-1rem);\n  color: #2170D9;\n}"; }
};

export { Indexlist as hc_indexlist };
