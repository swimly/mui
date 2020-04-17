import { EventEmitter } from '../../stencil.core';
export declare class Swiper {
    direction: string;
    height: number;
    width: number;
    loop: boolean;
    current: number;
    autoplay: boolean;
    duration: number;
    fit: string;
    el: HTMLElement;
    vchange: EventEmitter;
    children: Element[];
    $wrap: any;
    offset: number;
    length: number;
    index: number;
    timer: any;
    componentWillLoad(): void;
    componentDidLoad(): void;
    autoPlay(): void;
    bindTouch(): void;
    renderIndicate(): void;
    renderMove(): void;
    renderOffset(): {
        transform: string;
    };
    render(): any;
    /**
   * 已服务的形式调用
   */
    init(option: any): Promise<HTMLHcSwiperElement>;
}
