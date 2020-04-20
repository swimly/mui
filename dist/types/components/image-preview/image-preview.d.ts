export declare class ImagePreview {
    column: number;
    space: number;
    data: any;
    visible: boolean;
    current: number;
    width: number;
    height: number;
    el: HTMLElement;
    children: Element[];
    urlArray: string[];
    size: number;
    pos: any;
    offset: number;
    y: number;
    scale: number;
    hide: boolean;
    hammer: any;
    $pop: HTMLElement;
    $wrap: HTMLElement;
    $preview: HTMLElement;
    $mask: HTMLElement;
    $active: HTMLElement;
    $indicate: HTMLElement;
    componentWillLoad(): void;
    componentDidLoad(): void;
    renderLayout(): void;
    bindClick(item: any, index: any): void;
    moveMax(): void;
    moveMin(): void;
    initCover(): void;
    bindTouch(): void;
    computedUrl(): void;
    private getCssClassMap;
    render(): any;
    /**
   * 已服务的形式调用
   */
    init(): Promise<void>;
}
