import { FormControl, FormGroup } from "@angular/forms";
import { DynamicFormControlModel } from "../model/dynamic-form-control.model";
import { DynamicFormArrayGroupModel } from "../model/form-array/dynamic-form-array.model";
export declare enum DynamicFormControlEventType {
    Blur = "blur",
    Change = "change",
    Custom = "custom",
    Focus = "focus"
}
export interface DynamicFormControlEvent {
    $event: Event | FocusEvent | DynamicFormControlEvent | any;
    context: DynamicFormArrayGroupModel | null;
    control: FormControl;
    group: FormGroup;
    model: DynamicFormControlModel;
    type: string;
}
export interface DynamicFormControlCustomEvent {
    customEvent: any;
    customEventType: string;
}
export declare function isDynamicFormControlEvent($event: any): $event is DynamicFormControlEvent;
