import { DynamicFormValueControlModelConfig, DynamicFormValueControlModel } from "../dynamic-form-value-control.model";
import { DynamicFormControlLayout } from "../misc/dynamic-form-control-layout.model";
export declare const DYNAMIC_FORM_CONTROL_TYPE_COLORPICKER = "COLORPICKER";
export interface DynamicColorPickerModelConfig extends DynamicFormValueControlModelConfig<string | object> {
    format?: string;
    inline?: boolean;
}
export declare class DynamicColorPickerModel extends DynamicFormValueControlModel<string | object> {
    format: string | null;
    inline: boolean;
    readonly type: string;
    constructor(config: DynamicColorPickerModelConfig, layout?: DynamicFormControlLayout);
}
