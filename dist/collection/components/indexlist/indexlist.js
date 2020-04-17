import { Host, h } from "@stencil/core";
import Hammer from 'hammerjs';
export class Indexlist {
    constructor() {
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
        return (h(Host, null,
            h("slot", null),
            h("div", { class: "indicate" },
                h("span", null, this.current)),
            h("div", { class: "letters" }, arr.map(item => {
                return h("span", { class: "letter" },
                    h("span", null, item),
                    " ",
                    h("i", { class: "pop" }, item));
            }))));
    }
    static get is() { return "hc-indexlist"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["indexlist.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["indexlist.css"]
    }; }
    static get properties() { return {
        "letters": {
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
            "attribute": "letters",
            "reflect": false,
            "defaultValue": "'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'"
        },
        "current": {
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
            "attribute": "current",
            "reflect": false,
            "defaultValue": "'A'"
        }
    }; }
    static get elementRef() { return "el"; }
}
