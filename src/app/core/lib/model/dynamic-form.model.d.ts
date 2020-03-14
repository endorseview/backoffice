import { DynamicFormControlModel } from "./dynamic-form-control.model";
import { DynamicFormGroupModel } from "./form-group/dynamic-form-group.model";
export declare type DynamicFormModel = DynamicFormControlModel[];
export declare type DynamicUnionFormModel = DynamicFormModel | DynamicFormGroupModel;
