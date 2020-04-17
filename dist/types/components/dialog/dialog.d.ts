import { EventEmitter } from '../../stencil.core';
export declare class Dialog {
    /**
     * 标题
     */
    titles: string;
    /**
     * 内容
     */
    content: string;
    /**
     * 底部按钮
     */
    footer: string;
    /**
     * 显示隐藏
     */
    visible: boolean;
    /**
     * 样式
     */
    effect: 'zoom' | 'fadeIn';
    /**
     * 定时关闭
     */
    duration: number;
    /**
     * 类型
     */
    type: string;
    placeholder: string;
    $buttons: any;
    $el: HTMLElement;
    vdestory: EventEmitter;
    display(): Promise<void>;
    destory(item: any): Promise<void>;
    watchHandler(newValue: boolean): void;
    componentWillLoad(): void;
    bindDuration(): void;
    renderContent(): any;
    render(): any;
    /**
     * 已服务的形式调用
     */
    init(option: any): Promise<HTMLHcDialogElement>;
}
