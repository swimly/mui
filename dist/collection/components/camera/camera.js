import { Host, h } from "@stencil/core";
export class Camera {
    componentDidLoad() {
    }
    render() {
        return (h(Host, null,
            h("slot", null,
                h("video", { id: "video", width: "640", height: "480", autoplay: true }),
                h("button", { id: "snap" }, "Snap Photo"),
                h("canvas", { id: "canvas", width: "640", height: "480" }))));
    }
    static get is() { return "hc-camera"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["camera.css"]
    }; }
    static get styleUrls() { return {
        "$": ["camera.css"]
    }; }
    static get elementRef() { return "el"; }
}
