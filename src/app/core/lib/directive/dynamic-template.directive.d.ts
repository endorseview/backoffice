import { TemplateRef } from "@angular/core";
export declare enum DYNAMIC_TEMPLATE_DIRECTIVE_ALIGNMENT {
    Start = "START",
    End = "END"
}
export declare class DynamicTemplateDirective {
    templateRef: TemplateRef<any>;
    align: string;
    as: string | null;
    index: number | undefined;
    modelId: string;
    modelType: string;
    constructor(templateRef: TemplateRef<any>);
}
