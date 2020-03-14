import { DynamicOptionControlModel, DynamicOptionControlModelConfig } from "../dynamic-option-control.model";
import { DynamicFormControlLayout } from "../misc/dynamic-form-control-layout.model";
export declare const DYNAMIC_FORM_CONTROL_TYPE_SELECT = "SELECT";
export interface DynamicSelectModelConfig<T> extends DynamicOptionControlModelConfig<T> {
    compareWithFn?: (o1: any, o2: any) => boolean;
    filterable?: boolean;
    multiple?: boolean;
    placeholder?: string;
    prefix?: string;
    suffix?: string;
}
export declare class DynamicSelectModel<T> extends DynamicOptionControlModel<T> {
    compareWithFn: (value1: any, value2: any) => boolean;
    filterable: boolean;
    multiple: boolean;
    placeholder: string;
    prefix: string | null;
    suffix: string | null;
    readonly type: string;
    constructor(config: DynamicSelectModelConfig<T>, layout?: DynamicFormControlLayout);
    select(...indices: number[]): void;
}
