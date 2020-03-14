import { DynamicCheckControlModel, DynamicCheckControlModelConfig } from "../dynamic-check-control.model";
import { DynamicFormControlLayout } from "../misc/dynamic-form-control-layout.model";
export declare const DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX = "CHECKBOX";
export interface DynamicCheckboxModelConfig extends DynamicCheckControlModelConfig {
    indeterminate?: boolean;
}
export declare class DynamicCheckboxModel extends DynamicCheckControlModel {
    indeterminate: boolean;
    readonly type: string;
    constructor(config: DynamicCheckboxModelConfig, layout?: DynamicFormControlLayout);
}
