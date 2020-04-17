import { Component, Host, h, Prop, Element, Watch } from '@stencil/core';

@Component({
  tag: 'hc-image',
  styleUrl: 'image.scss',
  shadow: true
})
export class Image {
  @Prop() src: string;
  @Prop() width: string | number = 200;
  @Prop() height: string | number = 200;
  @Prop() lazy: boolean = false;
  @Prop() status: number = 0;
  @Prop() fit: string = 'cover'
  @Element() el:HTMLElement;
  loadImage(image) {
    image.src = this.src
    image.onload = () => {
      this.status = 1
    }
    image.onerror = () => {
      this.status = -1
    }
  }
  componentDidLoad () {
    const image = this.el.shadowRoot.querySelector('.core') as HTMLElement;
    if (!this.lazy) {
      this.loadImage(image)
    } else {
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry && entry.isIntersecting) {
            if (this.lazy) {
              this.loadImage(entry.target)
            }
            io.unobserve(entry.target)
          }
        })
      })
      io.observe(image)
    }
  }
  @Watch('status')
  statusHandle (value: number) {
    this.el.setAttribute('status', `${value}`)
  }
  render() {
    return (
      <Host style={{width: `${this.width}px`, height: `${this.height}px`}}>
        <div class="loading">
          <hc-icon size={32} name="loading" spin={true}></hc-icon>
          <span>加载中</span>
        </div>
        <div class="error">
          <hc-icon size={38} name="cry"></hc-icon>
          <span>加载失败</span>
        </div>
        <img style={{objectFit: this.fit}} class="core" alt=""/>
        <slot></slot>
      </Host>
    );
  }

}
