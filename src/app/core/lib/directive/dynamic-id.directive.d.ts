import { ElementRef, Renderer2, AfterViewInit } from "@angular/core";
export declare class DynamicIdDirective implements AfterViewInit {
    private elementRef;
    private renderer;
    dynamicId: string | boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
}
