export declare class Drawer {
    direction: string;
    visible: boolean;
    transparent: boolean;
    maskClosable: boolean;
    mask: boolean;
    round: boolean;
    padding: number;
    el: HTMLElement;
    $drawer: any;
    $mask: any;
    visibleHandle(newValue: boolean): void;
    directionHandle(newValue: string): void;
    init(): Promise<void>;
    destory(): Promise<void>;
    roundHandle(value: boolean): void;
    componentDidLoad(): void;
    render(): any;
}
