import { Observable } from "rxjs";
import { DynamicFormControlLayout } from "./misc/dynamic-form-control-layout.model";
import { DynamicPathable } from "./misc/dynamic-form-control-path.model";
import { DynamicFormControlRelation } from "./misc/dynamic-form-control-relation.model";
import { DynamicValidatorsConfig } from "./misc/dynamic-form-control-validation.model";
export declare type FormHooks = "change" | "blur" | "submit";
export interface DynamicFormControlModelConfig {
    asyncValidators?: DynamicValidatorsConfig;
    disabled?: boolean;
    errorMessages?: DynamicValidatorsConfig;
    hidden?: boolean;
    id: string;
    label?: string;
    labelTooltip?: string;
    controlTooltip?: string;
    name?: string;
    relations?: DynamicFormControlRelation[];
    updateOn?: FormHooks;
    validators?: DynamicValidatorsConfig;
}
export declare abstract class DynamicFormControlModel implements DynamicPathable {
    asyncValidators: DynamicValidatorsConfig | null;
    _disabled: boolean;
    errorMessages: DynamicValidatorsConfig | null;
    hidden: boolean;
    id: string;
    label: string | null;
    labelTooltip: string | null;
    controlTooltip: string | null;
    layout: DynamicFormControlLayout | null;
    name: string;
    parent: DynamicPathable | null;
    relations: DynamicFormControlRelation[];
    updateOn: FormHooks | null;
    validators: DynamicValidatorsConfig | null;
    private readonly disabled$;
    readonly disabledChanges: Observable<boolean>;
    abstract readonly type: string;
    protected constructor(config: DynamicFormControlModelConfig, layout?: DynamicFormControlLayout | null);
    disabled: boolean;
    readonly hasErrorMessages: boolean;
    toJSON(): object;
}
