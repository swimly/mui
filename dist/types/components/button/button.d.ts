import { EventEmitter } from '../../stencil.core';
export declare class Button {
    /**
     * 按钮类型
     */
    type: 'primary' | 'danger' | 'default';
    /**
     * 按钮形状
     */
    shape: 'default' | 'conner' | 'rounder';
    /**
     * 自定义按钮颜色
     */
    color: string;
    renderClassName(): string;
    /**
     * 按钮类型
     */
    icon: string;
    disabled: boolean;
    el: HTMLElement;
    vclick: EventEmitter;
    componentDidLoad(): void;
    loading(): Promise<void>;
    finishloading(): Promise<void>;
    render(): any;
    private getCssClassMap;
}
