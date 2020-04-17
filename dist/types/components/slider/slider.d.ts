import { EventEmitter } from '../../stencil.core';
export declare class Slider {
    max: number;
    min: number;
    value: number;
    step: number;
    el: HTMLElement;
    vchange: EventEmitter;
    offset: number;
    width: any;
    $progress: any;
    $handle: any;
    length: any;
    arr: any[];
    componentDidLoad(): void;
    bindTouch(): void;
    renderPos(): void;
    render(): any;
}
