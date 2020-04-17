import { Host, h } from "@stencil/core";
import MeScroll from 'mescroll.js';
export class Refresh_load {
    componentDidLoad() {
        var mescroll = new MeScroll(this.el.shadowRoot.querySelector('#mescroll'), {
            down: {
                callback: () => {
                    setTimeout(() => {
                        mescroll.endSuccess();
                    }, 3000);
                } //下拉刷新的回调,别写成downCallback(),多了括号就自动执行方法了
            },
            up: {
                callback: () => {
                    setTimeout(() => {
                        mescroll.endErr();
                    }, 3000);
                }
            }
        });
    }
    render() {
        return (h(Host, null,
            h("div", { id: "mescroll", class: "mescroll" },
                h("div", null,
                    h("slot", null)))));
    }
    static get is() { return "hc-refresh_load"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["refresh_load.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["refresh_load.css"]
    }; }
    static get elementRef() { return "el"; }
}
