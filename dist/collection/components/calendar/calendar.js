import { Host, h } from "@stencil/core";
import calendar from '../../utils/calendar';
export class Calendar {
    constructor() {
        this.year = (new Date()).getFullYear();
        this.month = (new Date()).getMonth() + 1;
        this.day = (new Date()).getDate();
        this.type = 'month';
        this.vshape = false;
        this.lunar = false;
        this.watermark = true;
        this.gesture = false;
        this.choice = 0;
    }
    componentWillLoad() {
        this.data = this.generateThreeGroupData();
    }
    rangeHandle(value) {
        this.el.setAttribute('type', value);
    }
    watermarkHandle(value) {
        this.el.setAttribute('watermark', value);
    }
    startHandle(value) {
        var days = this.el.shadowRoot.querySelectorAll('.day');
        days.forEach(day => {
            day.classList.remove('selected');
        });
        if (value) {
            this.el.shadowRoot.querySelector(`#day${value.split('-').join('')}`).classList.add('selected');
            console.log(this.el.shadowRoot.querySelector(`#day${value.split('-').join('')}`));
        }
    }
    endHandle(value) {
        if (value) {
            this.el.shadowRoot.querySelector(`#day${value.split('-').join('')}`).classList.add('selected');
            this.render();
        }
    }
    componentDidLoad() {
        this.bindObverse();
        this.renderDiff();
    }
    componentDidUpdate() {
        this.renderDiff();
    }
    bindObverse() {
        if (this.type == 'week') {
            this.addObverse(this.el.shadowRoot.querySelectorAll('.week'), (entry) => {
                if (parseInt(entry.target.getAttribute('week')) == this.week) {
                    var range = [];
                    // 将当前周的年月日信息同步到props
                    var days = entry.target.childNodes;
                    days.forEach(dom => {
                        var year = dom.getAttribute('year');
                        var month = dom.getAttribute('month');
                        var day = dom.getAttribute('day');
                        range.push(`${year}/${month}/${day}`);
                        if (dom.classList.value.indexOf('active') > -1) {
                            this.day = dom.getAttribute('day');
                        }
                    });
                    this.range = range;
                }
            });
        }
    }
    // 如果是星期视图，添加周的显示监听
    addObverse($doms, callback) {
        $doms.forEach((days) => {
            var io = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry && entry.isIntersecting) {
                        callback(entry);
                    }
                });
            });
            io.observe(days);
        });
    }
    // 获取三组数据并且返回
    generateThreeGroupData() {
        // 月视图
        var data = [];
        if (this.type == 'month') {
            this.week = calendar.getWeekOfYear(this.year, this.month, this.day);
            var weekday = (new Date(`${this.year}/${this.month}/${this.day}`)).getDay();
            this.weekday = weekday == 0 ? 7 : weekday;
            // 上个月月份
            var lstm = this.month > 1 ? this.month - 1 : 12;
            // 上个月年份
            var lsty = this.month > 1 ? this.year : this.year - 1;
            // 下个月月份
            var nxtm = this.month < 12 ? this.month + 1 : 1;
            // 下个月年份
            var nxty = this.month < 12 ? this.year : this.year + 1;
            var arr = [[lsty, lstm], [this.year, this.month], [nxty, nxtm]];
            arr.map(item => {
                data.push({
                    year: item[0],
                    month: item[1],
                    data: calendar.getMonthDaysArray(item[0], item[1])
                });
            });
        }
        // 星期视图
        if (this.type == 'week') {
            var weekday = (new Date()).getDay();
            this.weekday = weekday == 0 ? 7 : weekday;
            // 当前是第几周
            var week = calendar.getWeekOfYear(this.year, this.month, this.day);
            // 今年一共有多少周
            var cweek = calendar.getWeekOfYear(this.year, 12, 31);
            // 去年一共有多少周
            var lstweek = calendar.getWeekOfYear(this.year - 1, 12, 31);
            // 今年最后一天是周几
            var lstdw = (new Date(`${this.year}/12/31`)).getDay();
            // 今年第一天是周几
            var fstdw = (new Date(`${this.year}/1/1`)).getDay();
            // 如果有自定义week就不获取当前日期的星期数
            if (this.week == null)
                this.week = week;
            // 上一周的年份，如果当前周数是1，年份减1，否则年份不变
            var lsty = this.week > 1 ? this.year : this.year - 1;
            // 下一周的年份，如果当前周数小于今年的总周数，年份不变，否则年份加1
            var nxty = this.week < cweek ? this.year : this.year + 1;
            // 上一周的周数，如果周数大于1，当前周数减1，如果第一天是周一，上一周就是去年总周数，否则就是去年总周数减1
            var lstw = this.week > 1 ? this.week - 1 : fstdw == 1 ? lstweek : lstweek - 1;
            // 下一周的周数，如果小于今年的总周数，周数加1，如果今年最后一天是周末，下一周则是下一年的第1周，否则便是第2周
            var nxtw = this.week < cweek ? this.week + 1 : lstdw == 0 ? 1 : 2;
            var arr = [[lsty, lstw], [this.year, this.week], [nxty, nxtw]];
            arr.map(item => {
                data.push({
                    year: item[0],
                    // 根据年份和周数获取本周的日期分布
                    week: item[1],
                    data: calendar.getWeekDaysArray(item[0], item[1])
                });
            });
        }
        this.current = arr;
        return data;
    }
    // 当周数改变的时候，将当前周的日期赋值给range
    onDateChange(type) {
        var index = type == 'plus' ? 2 : 0;
        this.year = this.current[index][0];
        this[this.type] = this.current[index][1];
        if (this.type == 'week') {
            setTimeout(() => {
                this.month = type == 'plus' ?
                    this.range[6].split('/')[1] :
                    this.range[0].split('/')[1];
                this.year = type == 'plus' ?
                    this.range[6].split('/')[0] :
                    this.range[0].split('/')[0];
            }, 30);
        }
        this.data = this.generateThreeGroupData();
        this.render();
        this.bindObverse();
    }
    getCssClassMap(day, month) {
        var start, end, current;
        if (this.end) {
            start = (new Date(this.start.split('-').join('/'))).getTime();
            end = (new Date(this.end.split('-').join('/'))).getTime();
            current = (new Date(day.date.split('-').join('/'))).getTime();
        }
        return {
            'day': true,
            'current': day.month == (new Date()).getMonth() + 1 && day.day == (new Date()).getDate(),
            'prev': day.month < month.month,
            'next': day.month > month.month,
            'active': day.day == this.day,
            'selected': current >= start && current <= end || current >= end && current <= start
        };
    }
    getCssClassMap1(day) {
        return {
            'day': true,
            'active': day.nWeek == this.weekday,
            'current': day.cDay == (new Date()).getDate() && day.cMonth == (new Date()).getMonth() + 1 && day.cYear == (new Date()).getFullYear()
        };
    }
    getCssClassMap2() {
        return {
            'content': true,
            'water': this.watermark,
            'gesture': this.gesture
        };
    }
    toggleView() {
        this.type = this.type == 'month' ? 'week' : 'month';
        this.data = this.generateThreeGroupData();
        this.render();
    }
    renderDiff() {
        var month, current;
        if (this.type == 'week') {
            current = this.el.shadowRoot.querySelectorAll('.week')[1].querySelector('.active');
            month = parseInt(current.getAttribute('month'));
        }
        else {
            month = this.month;
        }
        var diff = calendar.getDiffDate(`${this.year}/${month}/${this.day}`);
        var value;
        if (diff < 0) {
            value = `${-diff}天后`;
        }
        else if (diff > 0) {
            value = `${diff}天前`;
        }
        else {
            value = `${calendar.transformWeekToString(this.weekday)}`;
        }
        this.el.shadowRoot.querySelector('.diff').innerHTML = value;
    }
    itemClick(day) {
        if (this.choice == 0) {
            this.day = day.cDay;
            this.weekday = day.nWeek;
            this.month = day.cMonth;
            this.render();
        }
        if (this.choice == 1) {
            if (!this.start) {
                this.start = day.date;
            }
            else if (this.start && !this.end) {
                this.end = day.date;
            }
            else {
                this.start = this.end = undefined;
                this.start = day.date;
            }
        }
    }
    render() {
        let { data, type, el } = this;
        return (h(Host, null,
            h("div", { class: "head" },
                h("div", { class: "left" },
                    h("span", { class: "year" },
                        this.year,
                        "\u5E74"),
                    h("span", { class: "month" },
                        this.month,
                        "\u6708"),
                    h("span", { class: "diff" })),
                (() => {
                    if (this.vshape) {
                        return (h("button", { class: "circle", onClick: this.toggleView.bind(this) }, this.type == 'month' ? '周' : '月'));
                    }
                })(),
                h("hc-icon", { name: "arrow-lift", onClick: this.onDateChange.bind(this, 'minus') }),
                h("hc-icon", { name: "arrow-right", onClick: this.onDateChange.bind(this, 'plus') })),
            h("ul", { class: "weeks" },
                h("li", null, "\u4E00"),
                h("li", null, "\u4E8C"),
                h("li", null, "\u4E09"),
                h("li", null, "\u56DB"),
                h("li", null, "\u4E94"),
                h("li", null, "\u516D"),
                h("li", null, "\u65E5")),
            h("div", { class: this.getCssClassMap2(), style: { transform: `translateX(${-el.offsetWidth}px)` } }, data.map((month) => {
                if (type == 'month') {
                    return (h("div", Object.assign({ class: "month" }, { month: month.month }), month.data.map((week) => {
                        return (h("ul", { class: "week", style: { width: `${el.offsetWidth}px` } }, week.map((day) => {
                            return (h("li", Object.assign({ id: month.month == day.month ? `day${day.date.split('-').join('')}` : '', onClick: this.itemClick.bind(this, day), class: this.getCssClassMap(day, month) }, { year: day.cYear, month: day.cMonth, day: day.cDay, weekday: day.nWeek, week: calendar.getWeekOfYear(day.cYear, day.cMonth, day.cDay) }),
                                h("p", null, day.day),
                                h("h2", null, this.lunar ? day.isTerm ? day.Term : day.IDayCn : '')));
                        })));
                    })));
                }
                else {
                    return (h("ul", Object.assign({ class: "week" }, { year: month.year, week: month.week }, { style: { width: `${el.offsetWidth}px` } }), month.data.map((day) => {
                        return (h("li", Object.assign({ onClick: this.itemClick.bind(this, day), class: this.getCssClassMap1(day) }, { year: day.cYear, month: day.cMonth, day: day.cDay, weekday: day.nWeek, week: calendar.getWeekOfYear(day.cYear, day.cMonth, day.cDay) }),
                            h("p", null, day.cDay),
                            h("h2", null, this.lunar ? day.isTerm ? day.Term : day.IDayCn : '')));
                    })));
                }
            }))));
    }
    async init(option) {
        const calendar = document.createElement('hc-calendar');
        const drawer = document.createElement('hc-drawer');
        drawer.setAttribute('direction', 'btt');
        drawer.setAttribute('round', 'true');
        drawer.setAttribute('padding', '20');
        Object.keys(option).forEach(key => {
            calendar.setAttribute(key, option[key]);
        });
        calendar.setAttribute('service', 'true');
        drawer.setAttribute('role', 'calendar');
        drawer.appendChild(calendar);
        document.body.appendChild(drawer);
        calendar.addEventListener('vclick', () => {
            drawer.destory();
        });
        calendar.addEventListener('vchange', () => {
            if (eval(`(${option.buttons})`).length < 2) {
                drawer.destory();
            }
        });
        setTimeout(() => {
            drawer.init();
        }, 30);
        return calendar;
    }
    static get is() { return "hc-calendar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["calendar.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["calendar.css"]
    }; }
    static get properties() { return {
        "year": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "year",
            "reflect": false,
            "defaultValue": "(new Date()).getFullYear()"
        },
        "month": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "month",
            "reflect": false,
            "defaultValue": "(new Date()).getMonth() + 1"
        },
        "day": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "day",
            "reflect": false,
            "defaultValue": "(new Date()).getDate()"
        },
        "type": {
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
            "attribute": "type",
            "reflect": false,
            "defaultValue": "'month'"
        },
        "week": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "week",
            "reflect": false
        },
        "weekday": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "weekday",
            "reflect": false
        },
        "vshape": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "vshape",
            "reflect": false,
            "defaultValue": "false"
        },
        "lunar": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "lunar",
            "reflect": false,
            "defaultValue": "false"
        },
        "watermark": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "watermark",
            "reflect": false,
            "defaultValue": "true"
        },
        "gesture": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "gesture",
            "reflect": false,
            "defaultValue": "false"
        },
        "choice": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "choice",
            "reflect": false,
            "defaultValue": "0"
        },
        "start": {
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
            "attribute": "start",
            "reflect": false
        },
        "end": {
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
            "attribute": "end",
            "reflect": false
        }
    }; }
    static get methods() { return {
        "init": {
            "complexType": {
                "signature": "(option: any) => Promise<HTMLHcCalendarElement>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "HTMLHcCalendarElement": {
                        "location": "global"
                    }
                },
                "return": "Promise<HTMLHcCalendarElement>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "type",
            "methodName": "rangeHandle"
        }, {
            "propName": "watermark",
            "methodName": "watermarkHandle"
        }, {
            "propName": "start",
            "methodName": "startHandle"
        }, {
            "propName": "end",
            "methodName": "endHandle"
        }]; }
}
