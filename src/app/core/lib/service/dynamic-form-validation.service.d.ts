import { AbstractControl, AsyncValidatorFn, ValidatorFn } from "@angular/forms";
import { DynamicFormControlModel } from "../model/dynamic-form-control.model";
import { DynamicValidatorsConfig } from "../model/misc/dynamic-form-control-validation.model";
import { Validator, ValidatorFactory } from "./dynamic-form.validators";
export declare class DynamicFormValidationService {
    private VALIDATORS;
    private ASYNC_VALIDATORS;
    private DYNAMIC_VALIDATORS_MAP;
    constructor(VALIDATORS: ValidatorFn[], ASYNC_VALIDATORS: AsyncValidatorFn[], DYNAMIC_VALIDATORS_MAP: Map<string, Validator | ValidatorFactory>);
    private getValidatorFn;
    private getValidatorFns;
    private parseErrorMessageConfig;
    getValidator(validatorName: string, validatorArgs?: any): ValidatorFn;
    getAsyncValidator(validatorName: string, validatorArgs?: any): AsyncValidatorFn;
    getValidators(validatorsConfig: DynamicValidatorsConfig): ValidatorFn[];
    getAsyncValidators(asyncValidatorsConfig: DynamicValidatorsConfig): AsyncValidatorFn[];
    updateValidators(validatorsConfig: DynamicValidatorsConfig | null, control: AbstractControl, model: DynamicFormControlModel): void;
    updateAsyncValidators(asyncValidatorsConfig: DynamicValidatorsConfig | null, control: AbstractControl, model: DynamicFormControlModel): void;
    createErrorMessages(control: AbstractControl, model: DynamicFormControlModel): string[];
    isFormHook(value: any): boolean;
    isValidatorDescriptor(value: any): boolean;
}
