export declare class Notify {
    visible: boolean;
    text: string;
    duration: number;
    position: string;
    background: string;
    icon: string;
    iconsize: number;
    type: string;
    spin: boolean;
    /** (optional) The notify to display */
    el: HTMLElement;
    /** (optional) 初始化notify */
    showNotify(): Promise<void>;
    /** (optional) 销毁notify */
    destoryNotify(): Promise<void>;
    watchHandler(newValue: boolean): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    renderBackground(): void;
    render(): any;
    /**
     * 已服务的形式调用
     */
    init(option: any): Promise<HTMLHcNotifyElement>;
}
