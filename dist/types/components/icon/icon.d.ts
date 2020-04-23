export declare class Icon {
    name: string;
    size: number;
    color: string;
    spin: boolean;
    el: HTMLElement;
    componentDidLoad(): void;
    spinHandle(newValue: boolean): void;
    nameHandle(): void;
    renderIcon(): void;
    render(): any;
}
