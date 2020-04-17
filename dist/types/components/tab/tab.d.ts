export declare class Tab {
    data: string;
    current: number;
    indicateWidth: number;
    align: string;
    showMore: boolean;
    show: boolean;
    el: HTMLElement;
    $items: any;
    $indicate: any;
    $more: any;
    $wrap: any;
    width: any;
    offset: number;
    diff: any;
    componentDidLoad(): void;
    private tabItemCssMap;
    private moreItemCssMap;
    private moreCssMap;
    renderWrap(): void;
    renderIndicate(): void;
    itemClick(index: any): void;
    onToggle(): void;
    render(): any;
}
