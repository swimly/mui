import { EventEmitter } from '../../stencil.core';
export declare class Checkbox {
    icon: string;
    color: string;
    value: any;
    shape: string;
    type: string;
    checked: boolean;
    el: HTMLElement;
    $core: any;
    $frame: any;
    $slot: any;
    vchange: EventEmitter;
    checkedHandle(newValue: boolean): void;
    componentDidLoad(): void;
    render(): any;
}
