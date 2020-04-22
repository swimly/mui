import { Component, Host, h, Prop, Element, Watch } from '@stencil/core';

@Component({
  tag: 'hc-section',
  styleUrl: 'section.scss',
  shadow: true
})
export class Section {
  @Prop() indent: number = 2;
  @Prop() fontSize: string;
  @Prop() color: string;
  @Prop() lineHeight: number;
  @Prop() maxLength: number;
  @Prop() open: boolean = false;
  @Prop() openLabel: string = '展开';
  @Prop() closeLabel: string = '收起';
  @Prop() transition: boolean = true;
  @Element() el: HTMLElement;
  children;
  $last;
  @Watch('open')
  openHandle (v) {
    this.computedPos()
    if (v) {
      this.children = this.el.innerHTML
      this.el.setAttribute('open', 'true')
    } else {
      this.children = this.cutStrByte(this.children, this.maxLength).cutStr
      this.el.removeAttribute('open')
    }
  }
  computedPos () {
    setTimeout(() => {
      var last = this.el.shadowRoot.querySelector('.last') as HTMLElement
      if (this.maxLength) {
        console.log(this.el.offsetWidth, last.offsetLeft)
        if (this.el.offsetWidth - last.offsetLeft < 20) {
          this.el.setAttribute('full', 'true')
        } else {
          this.el.removeAttribute('full')
        }
      }
    }, 3)
  }
  componentDidLoad () {
    this.computedPos()
  }
  cutStrByte(str, len) {
    //校验参数
    if (!str || !len) {
      return { "cutStr": "", "code": 0 };
    }
    var code = "1",// 默认返回code值，已截断
      strLen = str.length,// 原字符串长度
      cutStr;
    //如果字符串长度小于截取长度的一半,则返回全部字符串
    if (strLen <= len / 2) {
      cutStr = str;
      code = "0";
    } else {
      //遍历字符串
      var strByteCount = 0;
      for (var i = 0; i < strLen; i++) {
        //中文字符字节加2  否则加1
        strByteCount += this.getByteLen(str.charAt(i));
        //i从0开始 截断时大于len 只截断到第i个
        if (strByteCount > len) {
          cutStr = str.substring(0, i);
          break;
        } else if (strByteCount == len) {
          cutStr = str.substring(0, i + 1);
          break;
        }
      }
    }
    //cutstr为空，没有截断字符串
    if (!cutStr) {
      cutStr = str;
      code = "0";
    }
    return { "cutStr": cutStr, "code": code };
  }
  getByteLen(val) {
    var len = 0;
    if (!val) {
      return len;
    }
    for (var i = 0; i < val.length; i++) {
      if (!val[i]) {
        continue;
      }
      // 全角
      if (val[i].match(/[^\x00-\xff]/ig) != null) {
        len += 2;
      } else {
        len += 1;
      }
    }
    return len;
  }
  bindMore () {
    this.open = !this.open
  }
  render() {
    this.children = this.el.innerHTML;
    if (this.maxLength && !this.open) {
      this.children = this.cutStrByte(this.children, this.maxLength).cutStr
    }
    return (
      <Host style={{ textIndent: `${this.indent}em`, fontSize: `${this.fontSize}`, color: `${this.color}`, lineHeight: `${this.lineHeight}` }}>
        <p>{this.children}<span class="last"></span></p>
        {
          (() => {
            if (this.maxLength) {
              return (
                <p class="more" onClick={this.bindMore.bind(this)}><span>{this.open ? this.closeLabel : this.openLabel}</span></p>
              )
            }
          })()
        }
      </Host>
    );
  }

}
