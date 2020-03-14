import { QueryList } from "@angular/core";
import { FormArray } from "@angular/forms";
import { DynamicFormControlComponent } from "./dynamic-form-control.component";
import { DynamicTemplateDirective } from "../directive/dynamic-template.directive";
import { DynamicFormArrayModel } from "../model/form-array/dynamic-form-array.model";
export declare abstract class DynamicFormArrayComponent extends DynamicFormControlComponent {
    model: DynamicFormArrayModel;
    templates: QueryList<DynamicTemplateDirective> | undefined;
    readonly array: FormArray;
    readonly startTemplate: DynamicTemplateDirective | undefined;
    readonly endTemplate: DynamicTemplateDirective | undefined;
}
