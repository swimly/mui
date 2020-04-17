import { EventEmitter } from '../../stencil.core';
export declare class Keyboard {
    type: string;
    value: string;
    vibrate: number;
    tooltip: boolean;
    el: HTMLElement;
    vchange: EventEmitter;
    vfinish: EventEmitter;
    vhide: EventEmitter;
    componentDidLoad(): void;
    renderStyle(item: any): {
        flex: string;
        width?: undefined;
    } | {
        width: any;
        flex?: undefined;
    };
    typeHandle(value: string): void;
    valueHandle(value: string): void;
    bindClick(item: any): void;
    touchVibrate(time: any): void;
    render(): any;
    init(option: any): Promise<HTMLHcKeyboardElement>;
}
