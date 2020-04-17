import { EventEmitter } from '../../stencil.core';
export declare class Radio {
    icon: string;
    color: string;
    value: any;
    shape: string;
    type: string;
    checked: boolean;
    name: string;
    el: HTMLElement;
    $core: any;
    $frame: any;
    $slot: any;
    vchange: EventEmitter;
    checkedHandle(newValue: boolean): void;
    nameHandle(newValue: any): void;
    componentDidLoad(): void;
    render(): any;
}
