import { DynamicFormControlModel, DynamicFormControlModelConfig } from "../dynamic-form-control.model";
import { DynamicFormModel } from "../dynamic-form.model";
import { DynamicFormControlLayout } from "../misc/dynamic-form-control-layout.model";
export declare const DYNAMIC_FORM_CONTROL_TYPE_GROUP = "GROUP";
export interface DynamicFormGroupModelConfig extends DynamicFormControlModelConfig {
    group?: DynamicFormModel;
    legend?: string;
}
export declare class DynamicFormGroupModel extends DynamicFormControlModel {
    group: DynamicFormModel;
    legend: string | null;
    readonly type: string;
    constructor(config: DynamicFormGroupModelConfig, layout?: DynamicFormControlLayout);
    get(index: number): DynamicFormControlModel;
    set(index: number, controlModel: DynamicFormControlModel): void;
    add(controlModel: DynamicFormControlModel): void;
    insert(index: number, controlModel: DynamicFormControlModel): void;
    move(index: number, step: number): void;
    remove(index: number): void;
    size(): number;
}
