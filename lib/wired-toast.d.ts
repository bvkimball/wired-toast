import { WiredBase, TemplateResult } from "wired-lib/lib/wired-base";
export declare class WiredToast extends WiredBase {
    showing: boolean;
    location: string;
    static readonly styles: import("lit-element/lib/css-tag").CSSResult;
    render(): TemplateResult;
    wait(duration?: number): Promise<unknown>;
    show(duration?: number): Promise<void>;
    close(): void;
}
export declare function showToast(text: string, duration?: number, location?: string): void;
