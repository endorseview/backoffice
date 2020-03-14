import { DynamicFormValueControlModel, DynamicFormValueControlModelConfig } from "./dynamic-form-value-control.model";
import { DynamicFormControlLayout } from "./misc/dynamic-form-control-layout.model";
export interface DynamicInputControlModelConfig<T> extends DynamicFormValueControlModelConfig<T> {
    autoComplete?: string;
    autoFocus?: boolean;
    maxLength?: number;
    minLength?: number;
    placeholder?: string;
    prefix?: string;
    readOnly?: boolean;
    spellCheck?: boolean;
    suffix?: string;
}
export declare abstract class DynamicInputControlModel<T> extends DynamicFormValueControlModel<T> {
    autoComplete: string;
    autoFocus: boolean;
    maxLength: number | null;
    minLength: number | null;
    placeholder: string;
    prefix: string | null;
    readOnly: boolean;
    spellCheck: boolean;
    suffix: string | null;
    protected constructor(config: DynamicInputControlModelConfig<T>, layout?: DynamicFormControlLayout);
}
