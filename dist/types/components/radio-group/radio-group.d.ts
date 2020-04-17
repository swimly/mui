import { EventEmitter } from '../../stencil.core';
export declare class RadioGroup {
    el: HTMLElement;
    value: string;
    name: string;
    $slot: any;
    vichange: EventEmitter;
    componentDidLoad(): void;
    render(): any;
}
