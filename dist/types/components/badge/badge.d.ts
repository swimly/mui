export declare class Badge {
    type: string;
    shape: string;
    color: string;
    el: HTMLElement;
    componentDidLoad(): void;
    renderCss(): Promise<void>;
    render(): any;
}
