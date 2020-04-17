export declare class Input {
    type: string;
    placeholder: string;
    prefixIcon: string;
    suffixIcon: string;
    prefixColor: string;
    suffixColor: string;
    clearable: boolean;
    maxlength: number;
    minlength: number;
    error: string;
    warning: string;
    value: string;
    align: string;
    el: HTMLElement;
    $core: any;
    $clear: any;
    onFocusHandle(e: any): void;
    clearHandle(): void;
    errorHandle(value: string): void;
    warningHandle(value: string): void;
    componentDidLoad(): void;
    render(): any;
    private getCssClassMap;
}
