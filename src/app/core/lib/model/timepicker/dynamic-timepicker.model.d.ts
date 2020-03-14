import { DynamicDateControlModel, DynamicDateControlModelConfig } from "../dynamic-date-control.model";
import { DynamicFormControlLayout } from "../misc/dynamic-form-control-layout.model";
export declare const DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER = "TIMEPICKER";
export interface DynamicTimePickerModelConfig extends DynamicDateControlModelConfig {
    meridian?: boolean;
    showSeconds?: boolean;
}
export declare class DynamicTimePickerModel extends DynamicDateControlModel {
    meridian: boolean;
    showSeconds: boolean;
    readonly type: string;
    constructor(config: DynamicTimePickerModelConfig, layout?: DynamicFormControlLayout);
}
