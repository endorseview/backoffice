import { DynamicFormControlModel, DynamicFormControlModelConfig } from "../dynamic-form-control.model";
import { DynamicFormModel } from "../dynamic-form.model";
import { DynamicFormControlLayout } from "../misc/dynamic-form-control-layout.model";
import { DynamicPathable } from "../misc/dynamic-form-control-path.model";
import { DynamicValidatorsConfig } from "../misc/dynamic-form-control-validation.model";
export declare class DynamicFormArrayGroupModel implements DynamicPathable {
    $implicit: DynamicFormArrayGroupModel;
    context: DynamicFormArrayModel;
    group: DynamicFormModel;
    index: number;
    constructor(context: DynamicFormArrayModel, group?: DynamicFormModel, index?: number);
    readonly parent: DynamicFormArrayModel;
    get(index: number): DynamicFormControlModel;
    toJSON(): object;
}
export declare const DYNAMIC_FORM_CONTROL_TYPE_ARRAY = "ARRAY";
export interface DynamicFormArrayModelConfig extends DynamicFormControlModelConfig {
    groupAsyncValidators?: DynamicValidatorsConfig;
    groupFactory?: () => DynamicFormModel;
    groupValidators?: DynamicValidatorsConfig;
    groups?: DynamicFormArrayGroupModel[] | null;
    initialCount?: number;
}
export declare class DynamicFormArrayModel extends DynamicFormControlModel {
    groupAsyncValidators: DynamicValidatorsConfig | null;
    groupFactory: () => DynamicFormModel;
    groupValidators: DynamicValidatorsConfig | null;
    groups: DynamicFormArrayGroupModel[];
    initialCount: number;
    readonly groupPrototype: DynamicFormModel;
    readonly type: string;
    constructor(config: DynamicFormArrayModelConfig, layout?: DynamicFormControlLayout);
    private updateGroupIndex;
    readonly size: number;
    get(index: number): DynamicFormArrayGroupModel;
    addGroup(): DynamicFormArrayGroupModel;
    insertGroup(index: number): DynamicFormArrayGroupModel;
    moveGroup(index: number, step: number): void;
    removeGroup(index: number): void;
    clear(): void;
}
