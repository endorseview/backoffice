import { DynamicCheckControlModel, DynamicCheckControlModelConfig } from "../dynamic-check-control.model";
import { DynamicFormControlLayout } from "../misc/dynamic-form-control-layout.model";
export declare const DYNAMIC_FORM_CONTROL_TYPE_SWITCH = "SWITCH";
export interface DynamicSwitchModelConfig extends DynamicCheckControlModelConfig {
    offLabel?: string;
    onLabel?: string;
}
export declare class DynamicSwitchModel extends DynamicCheckControlModel {
    offLabel: string | null;
    onLabel: string | null;
    readonly type: string;
    constructor(config: DynamicSwitchModelConfig, layout?: DynamicFormControlLayout);
}
