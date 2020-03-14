import { Observable } from "rxjs";
import { DynamicFormValueControlModel, DynamicFormValueControlModelConfig } from "./dynamic-form-value-control.model";
import { DynamicFormControlLayout } from "./misc/dynamic-form-control-layout.model";
export interface DynamicFormOptionConfig<T> {
    disabled?: boolean;
    label?: string;
    value: T;
}
export declare class DynamicFormOption<T> {
    disabled: boolean;
    label: string | null;
    value: T;
    constructor(config: DynamicFormOptionConfig<T>);
    text: string | null;
    toJSON(): object;
}
export interface DynamicOptionControlModelConfig<T> extends DynamicFormValueControlModelConfig<T | T[]> {
    options?: DynamicFormOptionConfig<T>[] | Observable<DynamicFormOptionConfig<T>[]>;
}
export declare abstract class DynamicOptionControlModel<T> extends DynamicFormValueControlModel<T | T[]> {
    private _options;
    options$: Observable<DynamicFormOption<T>[]>;
    protected constructor(config: DynamicOptionControlModelConfig<T>, layout?: DynamicFormControlLayout);
    private updateOptions$;
    options: any;
    add(optionConfig: DynamicFormOptionConfig<T>): DynamicFormOption<T>;
    get(index: number): DynamicFormOption<T>;
    insert(index: number, optionConfig: DynamicFormOptionConfig<T>): DynamicFormOption<T>;
    remove(...indices: number[]): void;
    abstract select(...indices: number[]): void;
}
