import { Component, Host, h, Prop, Element, Watch, Method } from '@stencil/core';
import calendar from '../../utils/calendar'
import { CssClassMap } from '../../utils/interfaces';
@Component({
  tag: 'hc-calendar',
  styleUrl: 'calendar.scss',
  shadow: true
})
export class Calendar {
  @Prop() year: number = (new Date()).getFullYear()
  @Prop() month: number = (new Date()).getMonth() + 1
  @Prop() day:number = (new Date()).getDate()
  @Prop() type: string = 'month'
  @Prop() week: number
  @Prop() weekday: number
  @Prop() vshape: boolean = false;
  @Prop() lunar: boolean = false;
  @Prop() watermark: boolean = true;
  @Prop() gesture: boolean = false;
  @Prop() choice: number = 0;
  @Prop() start: string;
  @Prop() end: string;
  data;
  current;
  range;
  @Element() el:HTMLElement;
  componentWillLoad () {
    this.data = this.generateThreeGroupData()
  }
  @Watch('type')
  rangeHandle (value) {
    this.el.setAttribute('type', value)
  }
  @Watch('watermark')
  watermarkHandle (value) {
    this.el.setAttribute('watermark', value)
  }
  @Watch('start')
  startHandle (value) {
    var days = this.el.shadowRoot.querySelectorAll('.day')
    days.forEach(day => {
      day.classList.remove('selected')
    })
    if (value) {
      this.el.shadowRoot.querySelector(`#day${value.split('-').join('')}`).classList.add('selected')
      console.log(this.el.shadowRoot.querySelector(`#day${value.split('-').join('')}`))
    }
  }
  @Watch('end')
  endHandle (value) {
    if (value) {
      this.el.shadowRoot.querySelector(`#day${value.split('-').join('')}`).classList.add('selected')
      this.render()
    }
  }
  componentDidLoad () {
    this.bindObverse()
    this.renderDiff()
  }
  componentDidUpdate () {
    this.renderDiff()
  }
  bindObverse () {
    if (this.type == 'week') {
      this.addObverse(this.el.shadowRoot.querySelectorAll('.week'), (entry) => {
        if (parseInt(entry.target.getAttribute('week')) == this.week) {
          var range = []
          // 将当前周的年月日信息同步到props
          var days = entry.target.childNodes
          days.forEach(dom => {
            var year = dom.getAttribute('year')
            var month = dom.getAttribute('month')
            var day = dom.getAttribute('day')
            range.push(`${year}/${month}/${day}`)
            if (dom.classList.value.indexOf('active') > -1) {
              this.day = dom.getAttribute('day')
            }
          })
          this.range = range
        }
      })
    }
  }
  // 如果是星期视图，添加周的显示监听
  addObverse ($doms, callback) {
    $doms.forEach((days) => {
      var io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry && entry.isIntersecting) {
            callback(entry)
          }
        })
      })
      io.observe(days)
    })
  }
  // 获取三组数据并且返回
  generateThreeGroupData () {
    // 月视图
    var data = []
    if (this.type == 'month') {
      this.week = calendar.getWeekOfYear(this.year, this.month, this.day)
      var weekday = (new Date(`${this.year}/${this.month}/${this.day}`)).getDay()
      this.weekday = weekday == 0 ? 7 : weekday
      // 上个月月份
      var lstm = this.month > 1 ? this.month - 1 : 12
      // 上个月年份
      var lsty = this.month > 1 ? this.year : this.year - 1
      // 下个月月份
      var nxtm = this.month < 12 ? this.month + 1 : 1
      // 下个月年份
      var nxty = this.month < 12 ? this.year : this.year + 1
      var arr = [[lsty, lstm], [this.year, this.month], [nxty, nxtm]]
      arr.map(item => {
        data.push({
          year: item[0],
          month: item[1],
          data: calendar.getMonthDaysArray(item[0], item[1])
        })
      })
    }
    // 星期视图
    if (this.type == 'week') {
      var weekday = (new Date()).getDay()
      this.weekday = weekday == 0 ? 7 : weekday
      // 当前是第几周
      var week = calendar.getWeekOfYear(this.year, this.month, this.day)
      // 今年一共有多少周
      var cweek = calendar.getWeekOfYear(this.year, 12, 31)
      // 去年一共有多少周
      var lstweek = calendar.getWeekOfYear(this.year - 1, 12, 31)
      // 今年最后一天是周几
      var lstdw = (new Date(`${this.year}/12/31`)).getDay()
      // 今年第一天是周几
      var fstdw = (new Date(`${this.year}/1/1`)).getDay()
      // 如果有自定义week就不获取当前日期的星期数
      if (this.week == null) this.week = week
      // 上一周的年份，如果当前周数是1，年份减1，否则年份不变
      var lsty = this.week > 1 ? this.year : this.year - 1
      // 下一周的年份，如果当前周数小于今年的总周数，年份不变，否则年份加1
      var nxty = this.week < cweek ? this.year : this.year + 1
      // 上一周的周数，如果周数大于1，当前周数减1，如果第一天是周一，上一周就是去年总周数，否则就是去年总周数减1
      var lstw = this.week > 1 ? this.week - 1 : fstdw == 1 ? lstweek : lstweek - 1
      // 下一周的周数，如果小于今年的总周数，周数加1，如果今年最后一天是周末，下一周则是下一年的第1周，否则便是第2周
      var nxtw = this.week < cweek ? this.week + 1 : lstdw == 0 ? 1 : 2
      var arr = [[lsty, lstw], [this.year, this.week], [nxty, nxtw]]
      arr.map(item => {
        data.push({
          year: item[0],
          // 根据年份和周数获取本周的日期分布
          week: item[1],
          data: calendar.getWeekDaysArray(item[0], item[1])
        })
      })
    }
    this.current = arr
    return data
  }
  // 当周数改变的时候，将当前周的日期赋值给range
  onDateChange (type) {
    var index = type == 'plus' ? 2 : 0
    this.year = this.current[index][0]
    this[this.type] = this.current[index][1]
    if (this.type == 'week') {
      setTimeout(() => {
        this.month = type == 'plus' ?
        this.range[6].split('/')[1] :
        this.range[0].split('/')[1]
        this.year = type == 'plus' ?
        this.range[6].split('/')[0] :
        this.range[0].split('/')[0]
      }, 30)
    }
    this.data = this.generateThreeGroupData()
    this.render()
    this.bindObverse()
  }
  private getCssClassMap(day, month): CssClassMap {
    var start,end,current
    if (this.end) {
      start = (new Date(this.start.split('-').join('/'))).getTime()
      end = (new Date(this.end.split('-').join('/'))).getTime()
      current = (new Date(day.date.split('-').join('/'))).getTime()
    }
    return {
      'day': true,
      'current': day.month == (new Date()).getMonth() + 1 && day.day == (new Date()).getDate(),
      'prev': day.month < month.month,
      'next': day.month > month.month,
      'active': day.day == this.day,
      'selected': current >= start && current <= end || current >= end && current <= start
    }
  }
  private getCssClassMap1(day): CssClassMap {
    return {
      'day': true,
      'active': day.nWeek == this.weekday,
      'current': day.cDay == (new Date()).getDate() && day.cMonth == (new Date()).getMonth() + 1 && day.cYear == (new Date()).getFullYear()
    }
  }
  private getCssClassMap2(): CssClassMap {
    return {
      'content': true,
      'water': this.watermark,
      'gesture': this.gesture
    }
  }
  toggleView () {
    this.type = this.type == 'month' ? 'week' : 'month'
    this.data = this.generateThreeGroupData()
    this.render()
  }
  renderDiff () {
    var month,current
    if (this.type == 'week') {
      current = this.el.shadowRoot.querySelectorAll('.week')[1].querySelector('.active')
      month = parseInt(current.getAttribute('month'))
    } else {
      month = this.month
    }
    var diff = calendar.getDiffDate(`${this.year}/${month}/${this.day}`)
    var value
    if (diff < 0) {
      value = `${-diff}天后`
    } else if (diff > 0) {
      value = `${diff}天前`
    } else {
      value = `${calendar.transformWeekToString(this.weekday)}`
    }
    this.el.shadowRoot.querySelector('.diff').innerHTML = value
  }
  itemClick (day) {
    if (this.choice == 0) {
      this.day = day.cDay
      this.weekday = day.nWeek
      this.month = day.cMonth
      this.render()
    }
    if (this.choice == 1) {
      if (!this.start) {
        this.start = day.date
      } else if (this.start && !this.end) {
        this.end = day.date
      } else {
        this.start = this.end = undefined;
        this.start = day.date
      }
    }
  }
  render() {
    let {data, type, el} = this
    return (
      <Host>
        <div class="head">
          <div class="left">
            <span class="year">{this.year}年</span>
            <span class="month">{this.month}月</span>
            <span class="diff"></span>
          </div>
          {
            (() => {
              if (this.vshape) {
                return (
                  <button class="circle" onClick={this.toggleView.bind(this)}>{this.type == 'month' ? '周' : '月'}</button>
                )
              }
            })()
          }
          <hc-icon name="arrow-lift" onClick={this.onDateChange.bind(this, 'minus')}></hc-icon>
          <hc-icon name="arrow-right" onClick={this.onDateChange.bind(this, 'plus')}></hc-icon>
        </div>
        <ul class="weeks">
          <li>一</li>
          <li>二</li>
          <li>三</li>
          <li>四</li>
          <li>五</li>
          <li>六</li>
          <li>日</li>
        </ul>
        <div class={this.getCssClassMap2()} style={{transform: `translateX(${-el.offsetWidth}px)`}}>
          {data.map((month) => {
            if (type == 'month') {
              return (
                <div class="month" {...{month: month.month}}>
                  {
                    month.data.map((week) => {
                      return (
                        <ul class="week" style={{width: `${el.offsetWidth}px`}}>
                          {
                            week.map((day) => {
                              return (
                                <li id={month.month == day.month ? `day${day.date.split('-').join('')}` : ''} onClick={this.itemClick.bind(this, day)} class={this.getCssClassMap(day, month)} {...{year: day.cYear, month: day.cMonth, day: day.cDay, weekday: day.nWeek, week: calendar.getWeekOfYear(day.cYear, day.cMonth, day.cDay)}}>
                                  <p>{day.day}</p>
                                  <h2>{this.lunar ? day.isTerm ? day.Term : day.IDayCn : ''}</h2>
                                </li>
                              )
                            })
                          }
                        </ul>
                      )
                    })
                  }
                </div>
              )
            } else {
              return (
                <ul class="week" {...{year: month.year, week: month.week}} style={{width: `${el.offsetWidth}px`}}>
                  {
                    month.data.map((day) => {
                      return (
                        <li onClick={this.itemClick.bind(this, day)} class={this.getCssClassMap1(day)} {...{year: day.cYear, month: day.cMonth, day: day.cDay, weekday: day.nWeek, week: calendar.getWeekOfYear(day.cYear, day.cMonth, day.cDay)}}>
                          <p>{day.cDay}</p>
                          <h2>{this.lunar ? day.isTerm ? day.Term : day.IDayCn : ''}</h2>
                        </li>
                      )
                    })
                  }
                </ul>
              )
            }
          })}
        </div>
      </Host>
    );
  }
  @Method()
  async init(option) {
    const calendar = document.createElement('hc-calendar')
    const drawer = document.createElement('hc-drawer')
    drawer.setAttribute('direction', 'btt')
    drawer.setAttribute('round', 'true')
    drawer.setAttribute('padding', '20')
    Object.keys(option).forEach(key => {
      calendar.setAttribute(key, option[key])
    })
    calendar.setAttribute('service', 'true')
    drawer.setAttribute('role', 'calendar')
    drawer.appendChild(calendar)
    document.body.appendChild(drawer)
    calendar.addEventListener('vclick', () => {
      drawer.destory()
    })
    calendar.addEventListener('vchange', () => {
      if (eval(`(${option.buttons})`).length < 2) {
        drawer.destory()
      }
    })
    setTimeout(() => {
      drawer.init()
    }, 30)
    return calendar
  }
}
