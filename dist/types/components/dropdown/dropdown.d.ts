import { EventEmitter } from '../../stencil.core';
export declare class Dropdown {
    el: HTMLElement;
    confirm: EventEmitter;
    $dropdown: any;
    $dropdownItem: any;
    $pop: any;
    componentDidLoad(): void;
    hide(idx: any): void;
    render(): any;
}
