import { AfterViewInit, QueryList, TemplateRef } from "@angular/core";
import { DynamicTemplateableFormControl } from "./dynamic-templateable-form-control.interface";
import { DynamicTemplateDirective } from "../directive/dynamic-template.directive";
import { DynamicFormControlComponent } from "./dynamic-form-control.component";
export declare abstract class DynamicTemplateableFormControlComponent extends DynamicFormControlComponent implements DynamicTemplateableFormControl, AfterViewInit {
    readonly templateDirectives: Map<string, string>;
    templates: QueryList<DynamicTemplateDirective> | DynamicTemplateDirective[] | undefined;
    ngAfterViewInit(): void;
    abstract readonly viewChild: any;
    abstract mapTemplate(template: DynamicTemplateDirective): DynamicTemplateDirective | TemplateRef<any>;
    bindTemplate(template: DynamicTemplateDirective): void;
}
