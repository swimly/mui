import { EventEmitter } from '../../stencil.core';
export declare class TabbarItem {
    label: string;
    defaultIcon: string;
    activeIcon: string;
    iconSize: number;
    index: string;
    active: boolean;
    activeColor: string;
    defaultColor: string;
    background: string;
    shape: string;
    badge: number;
    isDot: boolean;
    vclick: EventEmitter;
    bindClick(): void;
    render(): any;
}
