declare const _default: {
    lunarInfo: number[];
    /**
      * 公历每个月份的天数普通表
      * @Array Of Property
      * @return Number
      */
    solarMonth: number[];
    /**
      * 天干地支之天干速查表
      * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
      * @return Cn string
      */
    Gan: string[];
    /**
      * 天干地支之地支速查表
      * @Array Of Property
      * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
      * @return Cn string
      */
    Zhi: string[];
    /**
      * 天干地支之地支速查表<=>生肖
      * @Array Of Property
      * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
      * @return Cn string
      */
    Animals: string[];
    /**
     * 阳历节日
     */
    festival: {
        '1-1': {
            title: string;
        };
        '2-14': {
            title: string;
        };
        '5-1': {
            title: string;
        };
        '5-4': {
            title: string;
        };
        '6-1': {
            title: string;
        };
        '9-10': {
            title: string;
        };
        '10-1': {
            title: string;
        };
        '12-25': {
            title: string;
        };
        '3-8': {
            title: string;
        };
        '3-12': {
            title: string;
        };
        '4-1': {
            title: string;
        };
        '5-12': {
            title: string;
        };
        '7-1': {
            title: string;
        };
        '8-1': {
            title: string;
        };
        '12-24': {
            title: string;
        };
    };
    /**
     * 农历节日
     */
    lfestival: {
        '12-30': {
            title: string;
        };
        '1-1': {
            title: string;
        };
        '1-15': {
            title: string;
        };
        '5-5': {
            title: string;
        };
        '8-15': {
            title: string;
        };
        '9-9': {
            title: string;
        };
    };
    /**
     * 返回默认定义的阳历节日
     */
    getFestival(): any;
    /**
     * 返回默认定义的内容里节日
     */
    getLunarFestival(): any;
    /**
     *
     * @param {Object} 按照festival的格式输入数据，设置阳历节日
     */
    setFestival(param?: {}): void;
    /**
     *
     * @param {Object} 按照lfestival的格式输入数据，设置农历节日
     */
    setLunarFestival(param?: {}): void;
    /**
      * 24节气速查表
      * @Array Of Property
      * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
      * @return Cn string
      */
    solarTerm: string[];
    /**
      * 1900-2100各年的24节气日期速查表
      * @Array Of Property
      * @return 0x string For splice
      */
    sTermInfo: string[];
    /**
      * 数字转中文速查表
      * @Array Of Property
      * @trans ['日','一','二','三','四','五','六','七','八','九','十']
      * @return Cn string
      */
    nStr1: string[];
    /**
      * 日期转农历称呼速查表
      * @Array Of Property
      * @trans ['初','十','廿','卅']
      * @return Cn string
      */
    nStr2: string[];
    /**
      * 月份转农历称呼速查表
      * @Array Of Property
      * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
      * @return Cn string
      */
    nStr3: string[];
    /**
      * 返回农历y年一整年的总天数
      * @param lunar Year
      * @return Number
      * @eg:var count = calendar.lYearDays(1987) ;//count=387
      */
    lYearDays: (y: any) => any;
    /**
      * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
      * @param lunar Year
      * @return Number (0-12)
      * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
      */
    leapMonth: (y: any) => number;
    /**
      * 返回农历y年闰月的天数 若该年没有闰月则返回0
      * @param lunar Year
      * @return Number (0、29、30)
      * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
      */
    leapDays: (y: any) => 30 | 0 | 29;
    /**
      * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
      * @param lunar Year
      * @return Number (-1、29、30)
      * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
      */
    monthDays: (y: any, m: any) => -1 | 30 | 29;
    /**
      * 返回公历(!)y年m月的天数
      * @param solar Year
      * @return Number (-1、28、29、30、31)
      * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
      */
    solarDays: (y: any, m: any) => any;
    /**
     * 农历年份转换为干支纪年
     * @param  lYear 农历年的年份数
     * @return Cn string
     */
    toGanZhiYear: (lYear: any) => any;
    /**
     * 公历月、日判断所属星座
     * @param  cMonth [description]
     * @param  cDay [description]
     * @return Cn string
     */
    toAstro: (cMonth: any, cDay: any) => string;
    /**
      * 传入offset偏移量返回干支
      * @param offset 相对甲子的偏移量
      * @return Cn string
      */
    toGanZhi: (offset: any) => any;
    /**
      * 传入公历(!)y年获得该年第n个节气的公历日期
      * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
      * @return day Number
      * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
      */
    getTerm: (y: any, n: any) => number;
    /**
      * 传入农历数字月份返回汉语通俗表示法
      * @param lunar month
      * @return Cn string
      * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
      */
    toChinaMonth: (m: any) => any;
    /**
      * 传入农历日期数字返回汉字表示法
      * @param lunar day
      * @return Cn string
      * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
      */
    toChinaDay: (d: any) => any;
    /**
      * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
      * @param y year
      * @return Cn string
      * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
      */
    getAnimal: (y: any) => any;
    /**
      * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
      * @param y  solar year
      * @param m  solar month
      * @param d  solar day
      * @return JSON object
      * @eg:console.log(calendar.solar2lunar(1987,11,01));
      */
    solar2lunar: (y: any, m: any, d: any) => -1 | {
        date: string;
        lunarDate: string;
        festival: any;
        lunarFestival: any;
        'lYear': any;
        'lMonth': any;
        'lDay': number;
        'Animal': any;
        'IMonthCn': string;
        'IDayCn': any;
        'cYear': any;
        'cMonth': any;
        'cDay': any;
        'gzYear': any;
        'gzMonth': any;
        'gzDay': any;
        'isToday': boolean;
        'isLeap': boolean;
        'nWeek': number;
        'ncWeek': string;
        'isTerm': boolean;
        'Term': any;
        'astro': any;
    };
    /**
      * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
      * @param y  lunar year
      * @param m  lunar month
      * @param d  lunar day
      * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
      * @return JSON object
      * @eg:console.log(calendar.lunar2solar(1987,9,10));
      */
    getFirstDay(year: any, month: any): number;
    getMonthLength(year: any, month: any): number;
    getMonthDaysArray(year: any, month: any): any[];
    getWeekDaysArray(year: any, week: any): any[];
    getWeekOfYear(y: any, m: any, d: any): number;
    getMonthDaysCount(year: any, month: any): number;
    isLeapYear(year: any): boolean;
    getDates(year: any, week: any): any[];
    getDateOfWeek(year: any, weekNumber: any): Date;
    generateWeek(year: any, week: any): any;
    getDiffDate(targetDate: any): number;
    transformWeekToString(week: any): string;
};
export default _default;
