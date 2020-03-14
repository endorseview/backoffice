import { QueryList } from "@angular/core";
import { DynamicFormControlLayout, DynamicFormControlLayoutContext, DynamicFormControlLayoutPlace } from "../model/misc/dynamic-form-control-layout.model";
import { DynamicFormControlModel } from "../model/dynamic-form-control.model";
import { DynamicTemplateDirective, DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT } from "../directive/dynamic-template.directive";
export declare type DynamicFormLayout = {
    [id: string]: DynamicFormControlLayout;
};
export declare type DynamicFormControlTemplates = QueryList<DynamicTemplateDirective> | DynamicTemplateDirective[] | undefined;
export declare class DynamicFormLayoutService {
    findById(id: string, formLayout: DynamicFormLayout | null): DynamicFormControlLayout | null;
    findByModel(model: DynamicFormControlModel, formLayout: DynamicFormLayout | null): DynamicFormControlLayout | null;
    filterTemplatesByModel(model: DynamicFormControlModel, templates: DynamicFormControlTemplates): DynamicTemplateDirective[];
    getAlignedTemplate(model: DynamicFormControlModel, templates: DynamicFormControlTemplates, alignment: DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT): DynamicTemplateDirective | undefined;
    getStartTemplate(model: DynamicFormControlModel, templates: DynamicFormControlTemplates): DynamicTemplateDirective | undefined;
    getEndTemplate(model: DynamicFormControlModel, templates: DynamicFormControlTemplates): DynamicTemplateDirective | undefined;
    getClass(layout: DynamicFormControlLayout | null, context: DynamicFormControlLayoutContext, place: DynamicFormControlLayoutPlace): string;
    getElementId(model: DynamicFormControlModel): string;
}
