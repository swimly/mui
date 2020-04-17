import { EventEmitter } from '../../stencil.core';
export declare class Page {
    titles: string;
    leftButtons: string;
    rightButtons: string;
    padding: string;
    color: string;
    headBackground: string;
    background: string;
    scrolldistance: number;
    hideHeader: boolean;
    el: HTMLElement;
    $slot: any;
    $header: any;
    vscroll: EventEmitter;
    vclick: EventEmitter;
    componentDidLoad(): void;
    renderStyle(): void;
    leftButtonsHandle(newValue: any): void;
    scrollGo(pos: number): Promise<void>;
    scrollAnimation(currentY: any, targetY: any): void;
    buttonClick(item: any): void;
    render(): any;
}
