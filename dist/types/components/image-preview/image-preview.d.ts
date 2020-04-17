export declare class ImagePreview {
    column: number;
    space: number;
    data: any;
    visible: boolean;
    el: HTMLElement;
    children: Element[];
    componentDidLoad(): void;
    renderLayout(): void;
    renderSwiper(item: any, index: any): void;
    bindClick(item: any, index: any): void;
    private getCssClassMap;
    render(): any;
    /**
   * 已服务的形式调用
   */
    init(): Promise<void>;
}
