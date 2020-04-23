import { r as registerInstance, d as createEvent, h, H as Host, c as getElement } from './core-3c51ccf2.js';

const keyCode = {
    'uppercase': [[{
                key: '1',
                keyCode: 49,
            }, {
                key: '2',
                keyCode: 50,
            }, {
                key: '3',
                keyCode: 51,
            }, {
                key: '4',
                keyCode: 52,
            }, {
                key: '5',
                keyCode: 53,
            }, {
                key: '6',
                keyCode: 54,
            }, {
                key: '7',
                keyCode: 55,
            }, {
                key: '8',
                keyCode: 56,
            }, {
                key: '9',
                keyCode: 57,
            }, {
                key: '0',
                keyCode: 48,
            }], [{
                key: 'Q',
                keyCode: 81,
            }, {
                key: 'W',
                keyCode: 87,
            }, {
                key: 'E',
                keyCode: 69,
            }, {
                key: 'R',
                keyCode: 82,
            }, {
                key: 'T',
                keyCode: 84,
            }, {
                key: 'Y',
                keyCode: 89,
            }, {
                key: 'U',
                keyCode: 85,
            }, {
                key: 'I',
                keyCode: 73,
            }, {
                key: 'O',
                keyCode: 79,
            }, {
                key: 'P',
                keyCode: 80,
            }], [{
                key: 'A',
                keyCode: 65,
            }, {
                key: 'S',
                keyCode: 83,
            }, {
                key: 'D',
                keyCode: 68,
            }, {
                key: 'F',
                keyCode: 70,
            }, {
                key: 'G',
                keyCode: 71,
            }, {
                key: 'H',
                keyCode: 72,
            }, {
                key: 'J',
                keyCode: 74,
            }, {
                key: 'K',
                keyCode: 75,
            }, {
                key: 'L',
                keyCode: 76,
            }], [{
                key: '↑',
                keyCode: 20,
                id: 'case',
                type: 'button',
                width: 'auto',
                icon: 'arrow-up'
            }, {
                key: 'Z',
                keyCode: 90,
            }, {
                key: 'X',
                keyCode: 88,
            }, {
                key: 'C',
                keyCode: 67,
            }, {
                key: 'V',
                keyCode: 86,
            }, {
                key: 'B',
                keyCode: 66,
            }, {
                key: 'N',
                keyCode: 78,
            }, {
                key: 'M',
                keyCode: 77,
            }, {
                key: '←',
                keyCode: 8,
                type: 'button',
                icon: 'tuige',
                width: 'auto'
            }], [{
                key: '!?#',
                id: 'symbol',
                keyCode: 321,
                type: 'button',
                width: '2em'
            }, {
                key: '123',
                id: 'number',
                keyCode: 321,
                type: 'button',
                width: '2em'
            }, {
                key: '.',
                keyCode: 190,
            }, {
                key: '&nbsp;',
                keyCode: 32,
                width: 'auto',
                icon: 'kongge'
            }, {
                key: '@',
                keyCode: 229,
            }, {
                key: '完成',
                keyCode: 13,
                type: 'button',
                // icon: 'enter',
                width: '3em'
            }]],
    'password': [[{
                key: '1',
                keyCode: 49,
            }, {
                key: '2',
                keyCode: 50,
            }, {
                key: '3',
                keyCode: 51,
            }, {
                key: '4',
                keyCode: 52,
            }, {
                key: '5',
                keyCode: 53,
            }, {
                key: '6',
                keyCode: 54,
            }, {
                key: '7',
                keyCode: 55,
            }, {
                key: '8',
                keyCode: 56,
            }, {
                key: '9',
                keyCode: 57,
            }, {
                key: '0',
                keyCode: 48,
            }], [{
                key: 'q',
                keyCode: 81,
            }, {
                key: 'w',
                keyCode: 87,
            }, {
                key: 'e',
                keyCode: 69,
            }, {
                key: 'r',
                keyCode: 82,
            }, {
                key: 't',
                keyCode: 84,
            }, {
                key: 'y',
                keyCode: 89,
            }, {
                key: 'u',
                keyCode: 85,
            }, {
                key: 'i',
                keyCode: 73,
            }, {
                key: 'o',
                keyCode: 79,
            }, {
                key: 'p',
                keyCode: 80,
            }], [{
                key: 'a',
                keyCode: 65,
            }, {
                key: 's',
                keyCode: 83,
            }, {
                key: 'd',
                keyCode: 68,
            }, {
                key: 'f',
                keyCode: 70,
            }, {
                key: 'g',
                keyCode: 71,
            }, {
                key: 'h',
                keyCode: 72,
            }, {
                key: 'j',
                keyCode: 74,
            }, {
                key: 'k',
                keyCode: 75,
            }, {
                key: 'l',
                keyCode: 76,
            }], [{
                key: '↑',
                keyCode: 20,
                id: 'case',
                type: 'button',
                width: 'auto',
                icon: 'arrow-up'
            }, {
                key: 'z',
                keyCode: 90,
            }, {
                key: 'x',
                keyCode: 88,
            }, {
                key: 'c',
                keyCode: 67,
            }, {
                key: 'v',
                keyCode: 86,
            }, {
                key: 'b',
                keyCode: 66,
            }, {
                key: 'n',
                keyCode: 78,
            }, {
                key: 'm',
                keyCode: 77,
            }, {
                key: '←',
                keyCode: 8,
                type: 'button',
                icon: 'leftarrow',
                width: 'auto'
            }], [{
                key: '!?#',
                id: 'symbol',
                keyCode: 321,
                type: 'button',
                width: '2em'
            }, {
                key: '123',
                id: 'number',
                keyCode: 321,
                type: 'button',
                width: '2em'
            }, {
                key: '.',
                keyCode: 190,
            }, {
                key: '&nbsp;',
                keyCode: 32,
                width: 'auto',
                icon: 'kongge'
            }, {
                key: '@',
                keyCode: 229,
            }, {
                key: '完成',
                keyCode: 13,
                type: 'button',
                // icon: 'enter',
                width: '3em'
            }]],
    'symbol': [[{
                key: '^',
                keyCode: 230,
            }, {
                key: '\\',
                keyCode: 230,
            }, {
                key: '|',
                keyCode: 230,
            }, {
                key: '<',
                keyCode: 230,
            }, {
                key: '>',
                keyCode: 230,
            }, {
                key: '£',
                keyCode: 230,
            }, {
                key: '€',
                keyCode: 230,
            }, {
                key: '￥',
                keyCode: 230,
            }, {
                key: '℃',
                keyCode: 230,
            }, {
                key: '$',
                keyCode: 230,
            }], [{
                key: '[',
                keyCode: 230,
            }, {
                key: ']',
                keyCode: 230,
            }, {
                key: '{',
                keyCode: 230,
            }, {
                key: '}',
                keyCode: 230,
            }, {
                key: '#',
                keyCode: 230,
            }, {
                key: '%',
                keyCode: 230,
            }, {
                key: '+',
                keyCode: 230,
            }, {
                key: '=',
                keyCode: 230,
            }, {
                key: '~',
                keyCode: 230,
            }, {
                key: '_',
                keyCode: 230,
            }], [{
                key: '-',
                keyCode: 230,
            }, {
                key: '/',
                keyCode: 230,
            }, {
                key: ':',
                keyCode: 230,
            }, {
                key: ';',
                keyCode: 230,
            }, {
                key: '(',
                keyCode: 230,
            }, {
                key: ')',
                keyCode: 230,
            }, {
                key: '$',
                keyCode: 230,
            }, {
                key: '&',
                keyCode: 230,
            }, {
                key: '"',
                keyCode: 230,
            }], [{
                key: '*',
                keyCode: 230,
                width: 'auto',
            }, {
                key: '?',
                keyCode: 230,
            }, {
                key: '!',
                keyCode: 230,
            }, {
                key: '@',
                keyCode: 230,
            }, {
                key: ',',
                keyCode: 230,
            }, {
                key: '`',
                keyCode: 230,
            }, {
                key: '÷',
                keyCode: 230,
            }, {
                key: '×',
                keyCode: 230,
            }, {
                key: '←',
                keyCode: 8,
                type: 'button',
                icon: 'tuige',
                width: 'auto'
            }], [{
                key: '返回',
                id: 'back',
                keyCode: 100,
                type: 'button',
                width: '2.5em'
            }, {
                key: '♂',
                keyCode: 230
            }, {
                key: '♀',
                keyCode: 230,
            }, {
                key: '&nbsp;',
                keyCode: 32,
                width: 'auto',
                icon: 'kongge'
            }, {
                key: '.',
                keyCode: 230,
            }, {
                key: '完成',
                keyCode: 13,
                type: 'button',
                // icon: 'enter',
                width: '3em'
            }]],
    'number': [[{
                key: '1',
                keyCode: 49,
            }, {
                key: '2',
                keyCode: 50,
            }, {
                key: '3',
                keyCode: 51,
            }], [{
                key: '4',
                keyCode: 52,
            }, {
                key: '5',
                keyCode: 53,
            }, {
                key: '6',
                keyCode: 54,
            }], [{
                key: '7',
                keyCode: 55,
            }, {
                key: '8',
                keyCode: 56,
            }, {
                key: '9',
                keyCode: 57,
            }], [{
                key: '返回',
                id: 'back',
                keyCode: 321,
                type: 'button'
            }, {
                key: '0',
                keyCode: 48,
            }, {
                key: 'x',
                keyCode: 8,
                type: 'button',
                icon: 'tuige'
            }]]
};

const Keyboard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = 'password';
        this.value = '';
        this.vibrate = 0;
        this.vchange = createEvent(this, "vchange", 7);
        this.vfinish = createEvent(this, "vfinish", 7);
        this.vhide = createEvent(this, "vhide", 7);
    }
    componentDidLoad() {
    }
    renderStyle(item) {
        if (item.width) {
            if (item.width == 'auto') {
                return {
                    flex: '1'
                };
            }
            else {
                return {
                    width: item.width
                };
            }
        }
    }
    typeHandle(value) {
        this.el.setAttribute('type', value);
    }
    valueHandle(value) {
        this.vchange.emit(value);
    }
    bindClick(item) {
        this.touchVibrate(item.keyCode);
        console.log(this);
        if (item.id) {
            if (item.id == 'number' || item.id == 'symbol') {
                this.type = item.id;
                this.render();
            }
            if (item.id == 'case') {
                if (this.type == 'password') {
                    this.type = 'uppercase';
                    this.el.shadowRoot.querySelector('#case').classList.add('active');
                }
                else {
                    this.type = 'password';
                    this.el.shadowRoot.querySelector('#case').classList.remove('active');
                }
            }
            if (item.id == 'back') {
                this.type = 'password';
            }
        }
        else {
            if (item.keyCode == 8) {
                this.value = this.value.substring(0, this.value.length - 1);
            }
            else if (item.keyCode == 13) {
                this.vfinish.emit(this.value);
            }
            else {
                this.value += item.key;
            }
        }
    }
    touchVibrate(time) {
        var timer = time;
        console.log(window);
        if (this.vibrate !== null) {
            if (this.vibrate >= 0) {
                timer = this.vibrate;
            }
            if (navigator.vibrate) {
                navigator.vibrate(timer);
            }
        }
    }
    render() {
        const data = keyCode[this.type];
        return (h(Host, null, data.map(row => {
            return (h("div", { class: "row" }, row.map(item => {
                return h("p", { id: item.id, onClick: this.bindClick.bind(this, item), style: this.renderStyle(item), class: 'key ' + item.type }, h("span", { innerHTML: item.key }), h("span", { class: "tool", innerHTML: item.key }));
            })));
        })));
    }
    async init(option) {
        const keyboard = document.createElement('hc-keyboard');
        const drawer = document.createElement('hc-drawer');
        const header = document.createElement('div');
        header.setAttribute('style', `display:flex;flex-direction:row;align-items:center;padding:0 1rem;background:#f5f5f5;`);
        header.innerHTML = `<h2 style="font-size:0.7rem;font-weight:normal;flex:1;color:#2170D9;">安全键盘</h2><hc-icon name="arrow-down"></hc-icon>`;
        drawer.setAttribute('direction', 'btt');
        drawer.setAttribute('mask', 'false');
        Object.keys(option).forEach(key => {
            keyboard.setAttribute(key, option[key]);
        });
        keyboard.setAttribute('service', 'true');
        drawer.setAttribute('role', 'keyboard');
        drawer.appendChild(header);
        drawer.appendChild(keyboard);
        document.body.appendChild(drawer);
        const down = drawer.querySelector('hc-icon');
        down.addEventListener('click', () => {
            drawer.destory();
        });
        setTimeout(() => {
            drawer.init();
        }, 30);
        drawer.addEventListener('vfinish', () => {
            drawer.destory();
            // this.vhide.emit()
        });
        return keyboard;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "type": ["typeHandle"],
        "value": ["valueHandle"]
    }; }
    static get style() { return "\@charset \"UTF-8\";\n:host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  background-color: #E7E8EC;\n  padding: 0 0.15rem 0.3rem 0.15rem;\n  width: 100%;\n  height: 12rem;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n:host .row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  width: 100%;\n  padding: 0.15rem 0;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex: 1;\n  flex: 1;\n}\n:host .row .key {\n  background: #fff;\n  width: 1.6rem;\n  text-align: center;\n  margin: 0.15rem;\n  font-size: 0.7rem;\n  color: #262626;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  height: 100%;\n  border-radius: 0.2rem;\n}\n:host .row .key .tool {\n  display: none;\n}\n:host .row .key.button {\n  background-color: #D0D1D5;\n}\n:host .row .key.button.active {\n  background: #2170D9;\n  color: #fff;\n}\n:host .row .key:active {\n  background-color: #ccc;\n}\n\n:host([type=number]) .row .key {\n  -ms-flex: 1;\n  flex: 1;\n  width: auto;\n  font-size: 1rem;\n}\n:host([type=number]) .row .key.button {\n  font-size: 0.7rem;\n}\n\n:host([tooltip=true]) .row .key {\n  position: relative;\n}\n:host([tooltip=true]) .row .key .tool {\n  position: absolute;\n  background: #333;\n  color: #fff;\n  display: -ms-flexbox;\n  display: flex;\n  width: 2rem;\n  height: 100%;\n  top: 0;\n  left: 50%;\n  margin-left: -1rem;\n  -webkit-transform: translate(0， -110%);\n  transform: translate(0， -110%);\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  border-radius: 0.2rem;\n  opacity: 0;\n}\n:host([tooltip=true]) .row .key.click .tool {\n  -webkit-transform: scale(1) translateY(-110%);\n  transform: scale(1) translateY(-110%);\n  opacity: 1;\n}"; }
};

export { Keyboard as hc_keyboard };
