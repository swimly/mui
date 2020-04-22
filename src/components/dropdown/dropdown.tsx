import { Component, Element, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'hc-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: true
})
export class Dropdown {
  @Element() el: HTMLElement;
  @Event() confirm: EventEmitter;

  $dropdown;
  $dropdownItem;
  $pop;

  componentDidLoad () {
    this.$dropdown = this.el.shadowRoot.querySelector('.dropdown')
    this.$dropdownItem = this.el.shadowRoot.querySelectorAll('.dropdown-item')
    this.$pop = this.el.shadowRoot.querySelectorAll('.pop')

    this.$pop.forEach((el, index) => {
      let list = el.querySelector('.pop-list')
      let listItem = el.querySelectorAll('.pop-list li')
      let active = 0

      el.style.top = this.$dropdown.offsetTop + this.$dropdown.offsetHeight + 'px'
      list.style.top = `-${list.offsetHeight}px`
      el.style.display = 'none'
      
      // 弹出列表点击选中，并隐藏弹出层
      listItem.forEach((item, idx) => { 
        item.addEventListener('click', () => {
          listItem[active].classList.remove('active')
          active = idx
          item.classList.add('active')
          this.confirm.emit({idx: index, subIdx: idx})
          setTimeout(() => {
            this.hide(index)
          })
        })
      })
    })

    let activePopIdx = null
    this.$dropdownItem.forEach((el, idx) => {
      el.addEventListener('click', () => {
        // 隐藏上一个激活的
        if (activePopIdx !== null) {
          this.$pop[activePopIdx].style.display = 'none'
          this.$pop[activePopIdx].classList.remove('active')
          this.$dropdownItem[activePopIdx].classList.remove('active')
        }
        // 当前激活
        activePopIdx = idx
        this.$dropdownItem[idx].classList.add('active')
        this.$pop[idx].style.display = 'block'
        setTimeout(() => {
          // 弹出显示
          this.$pop[idx].classList.add('active')
          // 遮罩点击，弹出隐藏
          this.$pop[idx].querySelector('.pop-mask').addEventListener('click', () => {
            this.hide(idx)
          })
        }, 30)
      })
    })
  }

  hide (idx) {
    this.$pop[idx].classList.remove('active')
    this.$dropdownItem[idx].classList.remove('active')
    setTimeout(() => {
      this.$pop[idx].style.display = 'none'
    }, 300)
  }

  render() {
    return (
      <div>
        <div class="dropdown">
          <div class="dropdown-item">
            <div class="dropdown-item-name">综合</div>
            <hc-icon name="arrowDown" size={12} class="dropdown-item-icon"></hc-icon>
          </div>
          <div class="dropdown-item">
            <div class="dropdown-item-name">排序</div>
            <hc-icon name="arrowDown" size={12} class="dropdown-item-icon"></hc-icon>
          </div>
        </div>
        <div class="pop">
          <div class="pop-mask"></div>
          <ul class="pop-list">
            <li>综合排序</li>
            <li>新品优先</li>
            <li>评价数从高到低</li>
          </ul>
        </div>
        <div class="pop">
          <div class="pop-mask"></div>
          <ul class="pop-list">
            <li>价格从高到低</li>
            <li>价格从低到高</li>
            <li>销量从高到低</li>
            <li>销量从低到高</li>
          </ul>
        </div>
      </div>
    );
  }

}
