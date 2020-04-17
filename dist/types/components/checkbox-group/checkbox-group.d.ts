import { EventEmitter } from '../../stencil.core';
export declare class CheckboxGroup {
    el: HTMLElement;
    value: string[];
    $slot: any;
    vichange: EventEmitter;
    componentDidLoad(): void;
    render(): any;
}
