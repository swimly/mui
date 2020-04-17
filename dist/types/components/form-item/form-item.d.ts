export declare class FormItem {
    label: string;
    value: string;
    tip: string;
    suffixIcon: string;
    prefixIcon: string;
    labelWidth: string;
    labelPosition: string;
    suffixSize: number;
    prefixSize: number;
    suffixColor: string;
    prefixColor: string;
    el: HTMLElement;
    labelWidthHandle(value: string): void;
    labelPositionHandle(value: string): void;
    render(): any;
}
