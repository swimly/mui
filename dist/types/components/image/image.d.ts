export declare class Image {
    src: string;
    width: string | number;
    height: string | number;
    lazy: boolean;
    status: number;
    fit: string;
    el: HTMLElement;
    loadImage(image: any): void;
    componentDidLoad(): void;
    statusHandle(value: number): void;
    render(): any;
}
