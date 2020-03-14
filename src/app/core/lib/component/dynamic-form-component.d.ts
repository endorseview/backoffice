import { EventEmitter, QueryList } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormControlContainerComponent } from "./dynamic-form-control-container.component";
import { DynamicFormControlEvent } from "./dynamic-form-control.event";
import { DynamicFormControlModel } from "../model/dynamic-form-control.model";
import { DynamicFormModel } from "../model/dynamic-form.model";
import { DynamicFormControlLayoutContext, DynamicFormControlLayoutPlace } from "../model/misc/dynamic-form-control-layout.model";
import { DynamicTemplateDirective } from "../directive/dynamic-template.directive";
import { DynamicFormService } from "../service/dynamic-form.service";
import { DynamicFormLayout, DynamicFormLayoutService } from "../service/dynamic-form-layout.service";
export declare abstract class DynamicFormComponent {
    protected formService: DynamicFormService;
    protected layoutService: DynamicFormLayoutService;
    formGroup: FormGroup;
    formModel: DynamicFormModel;
    formLayout: DynamicFormLayout;
    components: QueryList<DynamicFormControlContainerComponent>;
    templates: QueryList<DynamicTemplateDirective>;
    blur: EventEmitter<DynamicFormControlEvent>;
    change: EventEmitter<DynamicFormControlEvent>;
    focus: EventEmitter<DynamicFormControlEvent>;
    customEvent: EventEmitter<DynamicFormControlEvent>;
    protected constructor(formService: DynamicFormService, layoutService: DynamicFormLayoutService);
    trackByFn(_index: number, model: DynamicFormControlModel): string;
    getClass(model: DynamicFormControlModel, context: DynamicFormControlLayoutContext, place: DynamicFormControlLayoutPlace): string;
    onEvent($event: DynamicFormControlEvent, type: string): void;
} 