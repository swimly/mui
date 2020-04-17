import { Host, h } from "@stencil/core";
export class Popover {
    bindClick() {
        this.pos = {};
        console.log(this.el.offsetTop);
        // this.hammer.on('tap', (e) => {
        //   this.pos.ot = this.offsetTop
        //   this.pos.ol = this.offsetLeft
        //   this.pos.ow = this.offsetWidth
        //   this.pos.oh = this.offsetHeight
        //   this.pos.ww = this.$content.clientWidth
        //   this.pos.wh = this.$content.clientHeight
        //   this.pos.st = document.querySelector('hc-page').scrollTop
        //   this.computedPosition()
        // })
    }
    render() {
        return (h(Host, { onclick: this.bindClick.bind(this) },
            h("slot", null)));
    }
    static get is() { return "hc-popover"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["popover.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["popover.css"]
    }; }
    static get properties() { return {
        "pos": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "object",
                "resolved": "object",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
    static get elementRef() { return "el"; }
}
