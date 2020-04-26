import { Component, Host, h, Prop, Element, Watch, Method } from '@stencil/core';
import { CssClassMap } from '../../utils/interfaces';

@Component({
  tag: 'hc-video',
  styleUrl: 'video.scss',
  shadow: true
})
export class Video {
  @Prop() src: string;
  @Prop() preload: string = 'metadata';
  @Prop() autoplay: boolean = false;
  @Prop() play: boolean = false;
  @Prop() network: number;
  @Prop() loaded: number = 0;
  @Prop() poster: string;
  @Prop() duration: number = 0;
  @Prop() current: number = 0;
  @Prop() muted: boolean = false;
  @Prop() height: number;
  @Prop() controls: boolean = false;
  @Element() el:HTMLElement;
  $video;
  timer;
  errormsg = ['用户中止', '网络错误', '解码错误', 'URL无效']
  @Watch('play')
  playHandle (v) {
    var playicon = this.el.shadowRoot.querySelector('#play')
    var large = this.el.shadowRoot.querySelector('#large')
    if (v) {
      this.$video.play()
      playicon.setAttribute('name', 'suspended')
      large.setAttribute('name', 'suspended-fill')
      this.controls = true
      this.toggle()
    } else {
      this.$video.pause()
      playicon.setAttribute('name', 'play')
      large.setAttribute('name', 'play-fill')
      this.controls = false
    }
  }
  @Watch('muted')
  mutedHandle (v) {
    var muted = this.el.shadowRoot.querySelector('#muted')
    if (v) {
      muted.setAttribute('name', 'sound-Mute')
      this.$video.muted = true
    } else {
      muted.setAttribute('name', 'sound-filling')
      this.$video.muted = false
    }
  }
  componentDidLoad () {
    this.$video = this.el.shadowRoot.querySelector('video') as HTMLElement;
    if (this.$video.error) {
      this.network = this.$video.error.code
    }
    this.s_to_hs(60)
    if (this.autoplay) {
      this.$video.load()
      this.startplay()
    }
  }
  toggle () {
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.controls = false;
    }, 3000)
  }
  ontimeupdate () {
    this.current = this.$video.currentTime;
  }
  @Method()
  async startplay () {
    this.play = !this.play
  }
  @Method()
  async Play () {
    this.$video.play()
  }
  onprogress () {
    this.loaded = Math.round((this.$video.buffered.end(0) / this.duration)*100)
  }
  onloadedmetadata () {
    this.duration = this.$video.duration;
    if (!this.poster) {
      var canvas = document.createElement('canvas')
      canvas.width = 360
      canvas.height = 200
      var ctx = canvas.getContext('2d');
      ctx.drawImage(this.$video, 0, 0, canvas.width, canvas.height)
      this.poster = canvas.toDataURL('image/jpg')
    }
  }
  oncanplay () {
    this.duration = this.$video.duration
    document.addEventListener('WeixinJSBridgeReady', () => {
      if (this.autoplay) {
        this.$video.play()
      }
    })
  }
  onloadeddata () {
    this.loaded = 100
  }
  s_to_hs(sec){
    var m = Math.floor(sec / 60);
    var s = Math.ceil(sec % 60);
    if (s == 60) {
      m += 1
      s = 0
    }
    var sm = m < 10 ? `0${m}` : `${m}`
    var ss = s < 10 ? `0${s}` : `${s}`
    return `${sm}:${ss}`
  }
  bindMuted () {
    this.muted = !this.muted
  }
  bindfullScreen () {
    this.$video.webkitRequestFullScreen()
  }
  ondurationchange () {
    this.duration = this.$video.duration
  }
  onended () {
    this.play = !this.play
  }
  bindToggle () {
    this.controls = !this.controls
    this.toggle()
  }
  private getClass(): CssClassMap{
    return {
      'control': true,
      'show-control': this.controls
    }
  }
  private getClass1(): CssClassMap{
    return {
      'large': true,
      'show': !this.controls && !this.play
    }
  }
  private getClass2(): CssClassMap{
    return {
      'bar': true,
      'full': true,
      'show': !this.controls
    }
  }
  render() {
    return (
      <Host>
        <video 
          onProgress={this.onprogress.bind(this)}
          onLoadedMetaData={this.onloadedmetadata.bind(this)}
          onLoadedData={this.onloadeddata.bind(this)}
          onCanPlay={this.oncanplay.bind(this)}
          onTimeUpdate={this.ontimeupdate.bind(this)}
          onDurationChange={this.ondurationchange.bind(this)}
          onEnded={this.onended.bind(this)}
          onClick={this.bindToggle.bind(this)}
          muted
          poster={this.poster} 
          // autoplay={this.autoplay ? 'autoplay' : ''} 
          preload={this.preload} 
          webkit-playsinline
          playsInline
          x5-video-player-type="h5-page" 
        >
          <source src={this.src} type="video/mp4"></source>
        </video>
        <div class={this.getClass2()}>
          <div class="loaded" style={{width: `${this.loaded}%`}}></div>
          <div class="progress" style={{width: `${(this.current / this.duration) * 100}%`}}></div>
        </div>
        <hc-icon id="large" name="play-fill" onClick={this.startplay.bind(this)} size={64} class={this.getClass1()}></hc-icon>
        <div class={this.getClass()}>
          <hc-icon size={32} id="play" onClick={this.startplay.bind(this)} name='play'></hc-icon>
          <div class="time">{this.s_to_hs(this.current)}</div>
          <div class="bar">
            <div class="loaded" style={{width: `${this.loaded}%`}}></div>
            <div class="progress" style={{width: `${(this.current / this.duration) * 100}%`}}></div>
          </div>
          <p class="time">
            <span>{this.s_to_hs(this.duration)}</span>
          </p>
          <hc-icon id="muted" onClick={this.bindMuted.bind(this)} name={this.muted ? 'sound-Mute' : 'sound-filling'}></hc-icon>
          <hc-icon id="full" name="square" onClick={this.bindfullScreen.bind(this)}></hc-icon>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
