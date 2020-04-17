import { EventEmitter } from '../../stencil.core';
export declare class Actionsheet {
    content: string;
    current: string;
    titles: string;
    buttons: string;
    el: HTMLElement;
    vclick: EventEmitter;
    vchange: EventEmitter;
    $button: any;
    componentDidLoad(): void;
    bindClick(item: any): void;
    currentHandle(value: string): void;
    render(): any;
    init(option: any): Promise<HTMLHcActionsheetElement>;
}
