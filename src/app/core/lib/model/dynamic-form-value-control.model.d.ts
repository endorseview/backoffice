import { Observable } from "rxjs";
import { DynamicFormControlModel, DynamicFormControlModelConfig } from "./dynamic-form-control.model";
import { DynamicFormControlLayout } from "./misc/dynamic-form-control-layout.model";
export interface DynamicFormValueControlModelConfig<T> extends DynamicFormControlModelConfig {
    additional?: {
        [key: string]: any;
    };
    hint?: string;
    required?: boolean;
    tabIndex?: number;
    value?: T;
}
export declare abstract class DynamicFormValueControlModel<T> extends DynamicFormControlModel {
    additional: {
        [key: string]: any;
    } | null;
    hint: string | null;
    required: boolean;
    tabIndex: number | null;
    private _value;
    private readonly value$;
    readonly valueChanges: Observable<T>;
    protected constructor(config: DynamicFormValueControlModelConfig<T>, layout?: DynamicFormControlLayout);
    value: T | null;
    getAdditional(key: string, defaultValue?: any | null): any;
}
