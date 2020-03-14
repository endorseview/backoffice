import { DynamicOptionControlModel, DynamicOptionControlModelConfig } from "../dynamic-option-control.model";
import { DynamicFormControlLayout } from "../misc/dynamic-form-control-layout.model";
export declare const DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP = "RADIO_GROUP";
export interface DynamicRadioGroupModelConfig<T> extends DynamicOptionControlModelConfig<T> {
    legend?: string;
}
export declare class DynamicRadioGroupModel<T> extends DynamicOptionControlModel<T> {
    legend: string | null;
    readonly type: string;
    constructor(config: DynamicRadioGroupModelConfig<T>, layout?: DynamicFormControlLayout);
    select(index: number): void;
}
