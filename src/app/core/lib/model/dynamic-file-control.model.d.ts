import { DynamicFormValueControlModelConfig, DynamicFormValueControlModel } from "./dynamic-form-value-control.model";
import { DynamicFormControlLayout } from "./misc/dynamic-form-control-layout.model";
export interface DynamicFileControlModelConfig extends DynamicFormValueControlModelConfig<File | File[]> {
    multiple?: boolean;
}
export declare abstract class DynamicFileControlModel extends DynamicFormValueControlModel<File | File[]> {
    multiple: boolean;
    protected constructor(config: DynamicFileControlModelConfig, layout?: DynamicFormControlLayout);
}
