import { EventEmitter } from '../../stencil.core';
export declare class Tabbar {
    direction: string;
    current: string;
    iconSize: number;
    defaultColor: string;
    activeColor: string;
    background: string;
    isDot: boolean;
    el: HTMLElement;
    vchange: EventEmitter;
    componentDidLoad(): void;
    render(): any;
}
