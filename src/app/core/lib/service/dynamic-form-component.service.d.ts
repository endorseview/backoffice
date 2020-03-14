import { ComponentRef, InjectionToken, Type } from "@angular/core";
import { DynamicFormControl } from "../component/dynamic-form-control.interface";
import { DynamicFormControlModel } from "../model/dynamic-form-control.model";
export declare type DynamicFormControlRef = ComponentRef<DynamicFormControl>;
export declare type DynamicFormControlMapFn = (model: DynamicFormControlModel) => Type<DynamicFormControl> | null;
export declare const DYNAMIC_FORM_CONTROL_MAP_FN: InjectionToken<DynamicFormControlMapFn>;
export declare class DynamicFormComponentService {
    private readonly DYNAMIC_FORM_CONTROL_MAP_FN;
    private componentRefs;
    constructor(DYNAMIC_FORM_CONTROL_MAP_FN: any);
    getFormControlRef(modelId: string, index?: number): DynamicFormControlRef | undefined;
    registerFormControlRef(model: DynamicFormControlModel, instance: DynamicFormControlRef, index?: number): void;
    unregisterFormControlRef(modelId: string, index?: number): void;
    getCustomComponentType(model: DynamicFormControlModel): Type<DynamicFormControl> | null;
}
