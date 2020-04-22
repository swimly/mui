import { Component, Host, h, Element, Prop} from '@stencil/core';

@Component({
  tag: 'hc-skeleton',
  styleUrl: 'skeleton.scss',
  shadow: true
})
export class Skeleton {
  @Element() el: HTMLElement;
  /**
   * 段落，行数
   */
  @Prop() row: number;
  /**
   * 标题
   */
  @Prop() titles: boolean = false;
  /**
   * 头像
   */
  @Prop() avatar: boolean = false;
  /**
   * 头像形状（round圆形，square方形）
   */
  @Prop() avatarShape: 'round' | 'square' = 'round';
  /**
   * 头像大小（宽高）
   */
  @Prop() avatarSize: number = 32;
  /**
   * 头像位置
   */
  @Prop() avatarPosition: 'left' | 'right' = 'left';
  /**
   * 导航入口
   */
  @Prop() nav: boolean = false;
  /**
   * 导航入口，行数
   */
  @Prop() navRow: number = 1;
  /**
   * 导航入口，列数
   */
  @Prop() navCol: number = 4;
  /**
   * banner占位，图片占位
   */
  @Prop() banner: boolean = false;
   /**
   * 是否开启动画
   */
  @Prop() animates: boolean = true;
  /**
   * loading为false，显示子组件
   */
  @Prop({mutable: true}) loading: boolean = true;
  
  $skeleton;

  componentDidLoad () {
    this.$skeleton = this.el.shadowRoot.querySelector('.skeleton')
    if (this.avatar && this.avatarPosition == 'left') {
      this.renderAvatar()
    }
    
    if (this.row) {
      var content = document.createElement('div')
      content.classList.add('skeleton-content')
      this.$skeleton.appendChild(content)

      if (this.titles) {
        var title = document.createElement('div')
        title.classList.add('skeleton-title')
        if (this.animates) {
          title.style.animation = 'move 1.2s ease-in-out infinite'
        } 
        content.appendChild(title)
      }

      for (var i = 0; i < this.row; i++) {
        var row = document.createElement('div')
        row.classList.add('skeleton-row')
        if (this.animates) {
          row.style.animation = 'move 1.2s ease-in-out infinite'
          row.style.animationDelay = Math.random() * 1000 + 'ms'
        } 
        content.appendChild(row)
      }
    }

    if (this.avatar && this.avatarPosition == 'right') {
      this.renderAvatar()
    }

    if (this.nav) {
      var nav = document.createElement('div')
      nav.classList.add('skeleton-nav')
      this.$skeleton.appendChild(nav)
      for (var i = 0; i < this.navCol* this.navRow; i++) {
        var item = document.createElement('div')
        item.classList.add('skeleton-nav-item')
        item.style.width = 100/this.navCol + '%'
        var span = document.createElement('span')
        item.appendChild(span)
        nav.appendChild(item)
      }
    }

    if (this.banner) {
      var banner = document.createElement('div')
      banner.classList.add('skeleton-banner')
      this.$skeleton.appendChild(banner)
    }
  }

  renderAvatar() {
    var avatar = document.createElement('div')
    avatar.classList.add('skeleton-avatar')
    avatar.style.width = this.avatarSize + 'px'
    avatar.style.height = this.avatarSize + 'px'
    avatar.style.borderRadius = this.avatarShape == 'round' ? '100%' : '0'
    if (this.avatarPosition == 'left') {
      avatar.style.marginRight = '16px'
    } else if (this.avatarPosition == 'right') {
      avatar.style.marginLeft = '16px'
    }
    this.$skeleton.appendChild(avatar)
  }

  render() {
    return (
      <Host>
        {
          this.loading && <div class="skeleton"></div>
        }
        {
          !this.loading && <slot></slot>
        }
      </Host>
    );
  }

}
