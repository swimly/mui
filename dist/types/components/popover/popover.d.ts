export declare class Popover {
    direction: string;
    position: string;
    data: string;
    offset: number;
    el: HTMLElement;
    $wrap: any;
    $mask: any;
    cp: any;
    wp: any;
    parent: {
        width: number;
        height: number;
    };
    type: string;
    componentDidLoad(): void;
    setStyle(): void;
    renderOrigin(): void;
    bindClick(): Promise<void>;
    initPosition(): Promise<void>;
    computedPosition(): void;
    render(): any;
    /**
     * 已服务的形式调用
     */
    init(option: any): Promise<HTMLHcPopoverElement>;
}
