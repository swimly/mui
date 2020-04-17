export declare class Toast {
    visible: boolean;
    text: string;
    duration: number;
    position: string;
    background: string;
    /** (optional) The toast to display */
    el: HTMLElement;
    /** (optional) 初始化toast */
    showToast(): Promise<void>;
    /** (optional) 销毁toast */
    destoryToast(): Promise<void>;
    watchHandler(newValue: boolean): void;
    componentDidLoad(): void;
    render(): any;
    /**
     * 已服务的形式调用
     */
    init(option: any): Promise<HTMLHcToastElement>;
}
