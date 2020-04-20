export declare class Mask {
    background: string;
    source: any;
    maskClosable: boolean;
    visible: boolean;
    el: HTMLElement;
    componentDidLoad(): void;
    render(): any;
    init(option: any): Promise<HTMLHcMaskElement>;
}
