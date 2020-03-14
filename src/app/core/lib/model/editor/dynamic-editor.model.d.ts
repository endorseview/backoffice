import { DynamicInputControlModel, DynamicInputControlModelConfig } from "../dynamic-input-control.model";
import { DynamicFormControlLayout } from "../misc/dynamic-form-control-layout.model";
export declare const DYNAMIC_FORM_CONTROL_TYPE_EDITOR = "EDITOR";
export interface DynamicEditorModelConfig extends DynamicInputControlModelConfig<string> {
}
export declare class DynamicEditorModel extends DynamicInputControlModel<string> {
    readonly type: string;
    constructor(config: DynamicEditorModelConfig, layout?: DynamicFormControlLayout);
}
