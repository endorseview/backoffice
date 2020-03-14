import { ElementRef, Renderer2, AfterViewInit } from "@angular/core";
export declare class DynamicListDirective implements AfterViewInit {
    private elementRef;
    private renderer;
    listId: string | null;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
}
