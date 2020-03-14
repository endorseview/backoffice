import { DynamicFormValueControlModel, DynamicFormValueControlModelConfig } from "./dynamic-form-value-control.model";
import { DynamicFormControlLayout } from "./misc/dynamic-form-control-layout.model";
export interface DynamicCheckControlModelConfig extends DynamicFormValueControlModelConfig<boolean> {
    labelPosition?: string;
}
export declare abstract class DynamicCheckControlModel extends DynamicFormValueControlModel<boolean> {
    labelPosition: string | null;
    protected constructor(config: DynamicCheckControlModelConfig, layout?: DynamicFormControlLayout);
    checked: boolean;
    toggle(): void;
}
