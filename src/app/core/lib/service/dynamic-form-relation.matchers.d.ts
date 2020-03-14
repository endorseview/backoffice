import { InjectionToken, Injector, ValueProvider } from "@angular/core";
import { FormControl } from "@angular/forms";
import { DynamicFormControlModel } from "../model/dynamic-form-control.model";
export declare const MATCH_DISABLED = "DISABLED";
export declare const MATCH_ENABLED = "ENABLED";
export declare const MATCH_HIDDEN = "HIDDEN";
export declare const MATCH_OPTIONAL = "OPTIONAL";
export declare const MATCH_REQUIRED = "REQUIRED";
export declare const MATCH_VISIBLE = "VISIBLE";
export declare const AND_OPERATOR = "AND";
export declare const OR_OPERATOR = "OR";
export interface DynamicFormControlMatcher {
    match: string;
    opposingMatch: string | null;
    onChange(hasMatch: boolean, model: DynamicFormControlModel, control: FormControl, injector: Injector): void;
}
export declare const DYNAMIC_MATCHERS: InjectionToken<DynamicFormControlMatcher>;
export declare const DisabledMatcher: DynamicFormControlMatcher;
export declare const HiddenMatcher: DynamicFormControlMatcher;
export declare const RequiredMatcher: DynamicFormControlMatcher;
export declare const DISABLED_MATCHER: ValueProvider;
export declare const HIDDEN_MATCHER: ValueProvider;
export declare const REQUIRED_MATCHER: ValueProvider;
export declare const DYNAMIC_MATCHER_PROVIDERS: ValueProvider[];
