import { EventEmitter } from '../../stencil.core';
export declare class CollapseItem {
    titles: string;
    name: string;
    open: boolean;
    arrow: string;
    el: HTMLElement;
    vchange: EventEmitter;
    timer: any;
    $content: any;
    $item: any;
    height: number;
    openHandle(v: any): void;
    componentDidLoad(): void;
    bindClick(): void;
    private getCssClassMap;
    render(): any;
}
