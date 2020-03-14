import { DynamicDateControlModel, DynamicDateControlModelConfig, DynamicDateControlValue } from "../dynamic-date-control.model";
import { DynamicFormControlLayout } from "../misc/dynamic-form-control-layout.model";
export declare const DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER = "DATEPICKER";
export interface DynamicDatePickerModelConfig extends DynamicDateControlModelConfig {
    autoFocus?: boolean;
    focusedDate?: DynamicDateControlValue;
    inline?: boolean;
    prefix?: string;
    readOnly?: boolean;
    suffix?: string;
    toggleIcon?: string;
    toggleLabel?: string;
}
export declare class DynamicDatePickerModel extends DynamicDateControlModel {
    autoFocus: boolean;
    focusedDate: DynamicDateControlValue | null;
    inline: boolean;
    prefix: string | null;
    readOnly: boolean;
    suffix: string | null;
    toggleIcon: string | null;
    toggleLabel: string | null;
    readonly type: string;
    constructor(config: DynamicDatePickerModelConfig, layout?: DynamicFormControlLayout);
}
