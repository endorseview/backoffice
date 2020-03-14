import { AbstractControl, FormArray, FormGroup } from "@angular/forms";
import { AbstractControlOptions } from "@angular/forms";
import { DynamicFormControlModel } from "../model/dynamic-form-control.model";
import { DynamicFormArrayModel } from "../model/form-array/dynamic-form-array.model";
import { DynamicFormValidationService } from "./dynamic-form-validation.service";
import { DynamicFormModel, DynamicUnionFormModel } from "../model/dynamic-form.model";
import { DynamicPathable } from "../model/misc/dynamic-form-control-path.model";
export declare class DynamicFormService {
    private validationService;
    constructor(validationService: DynamicFormValidationService);
    private createAbstractControlOptions;
    createFormArray(formArrayModel: DynamicFormArrayModel): FormArray;
    createFormGroup(formModel: DynamicFormModel, options?: AbstractControlOptions | null, parent?: DynamicPathable | null): FormGroup;
    getPathSegment(model: DynamicPathable): string;
    getPath(model: DynamicPathable, join?: boolean): string[] | string;
    addFormGroupControl(formGroup: FormGroup, formModel: DynamicUnionFormModel, ...models: DynamicFormModel): void;
    moveFormGroupControl(index: number, step: number, formModel: DynamicUnionFormModel): void;
    insertFormGroupControl(index: number, formGroup: FormGroup, formModel: DynamicUnionFormModel, ...models: DynamicFormModel): void;
    removeFormGroupControl(index: number, formGroup: FormGroup, formModel: DynamicUnionFormModel): void;
    addFormArrayGroup(formArray: FormArray, formArrayModel: DynamicFormArrayModel): void;
    insertFormArrayGroup(index: number, formArray: FormArray, formArrayModel: DynamicFormArrayModel): void;
    moveFormArrayGroup(index: number, step: number, formArray: FormArray, formArrayModel: DynamicFormArrayModel): void;
    removeFormArrayGroup(index: number, formArray: FormArray, formArrayModel: DynamicFormArrayModel): void;
    clearFormArray(formArray: FormArray, formArrayModel: DynamicFormArrayModel): void;
    findById(id: string, formModel: DynamicFormModel): DynamicFormControlModel | null;
    findModelById(id: string, formModel: DynamicFormModel): DynamicFormControlModel | null;
    findControlByModel(model: DynamicFormControlModel, group: FormGroup): AbstractControl | null;
    fromJSON(json: string | object[]): DynamicFormModel | never;
}
