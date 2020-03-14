import { InjectionToken } from "@angular/core";
import { AsyncValidatorFn, ValidatorFn } from "@angular/forms";
export declare type Validator = ValidatorFn | AsyncValidatorFn;
export declare type ValidatorFactory = (args: any) => Validator;
export declare type ValidatorsToken = Validator[];
export declare type ValidatorsMap = Map<string, Validator | ValidatorFactory>;
export declare const DYNAMIC_VALIDATORS: InjectionToken<Map<string, ValidatorFn | AsyncValidatorFn | ValidatorFactory>>;
