import { DynamicFormValueControlModelConfig, DynamicFormValueControlModel } from "./dynamic-form-value-control.model";
import { DynamicFormControlLayout } from "./misc/dynamic-form-control-layout.model";
export declare type DynamicDateControlValue = string | object | Date;
export interface DynamicDateControlModelConfig extends DynamicFormValueControlModelConfig<DynamicDateControlValue> {
    format?: string;
    max?: DynamicDateControlValue;
    min?: DynamicDateControlValue;
    placeholder?: string;
}
export declare abstract class DynamicDateControlModel extends DynamicFormValueControlModel<DynamicDateControlValue> {
    format: string | null;
    max: DynamicDateControlValue | null;
    min: DynamicDateControlValue | null;
    placeholder: string | null;
    protected constructor(config: DynamicDateControlModelConfig, layout?: DynamicFormControlLayout);
}
