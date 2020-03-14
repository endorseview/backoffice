import { DynamicFormValueControlModelConfig, DynamicFormValueControlModel } from "../dynamic-form-value-control.model";
import { DynamicFormControlLayout } from "../misc/dynamic-form-control-layout.model";
export declare const DYNAMIC_FORM_CONTROL_TYPE_RATING = "RATING";
export interface DynamicRatingModelConfig extends DynamicFormValueControlModelConfig<number> {
    max?: number;
}
export declare class DynamicRatingModel extends DynamicFormValueControlModel<number> {
    max: number | null;
    readonly type: string;
    constructor(config: DynamicRatingModelConfig, layout?: DynamicFormControlLayout);
}
