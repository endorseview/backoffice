export interface DynamicValidatorDescriptor {
    name: string;
    args: any;
}
export declare type DynamicValidatorsConfig = {
    [validatorKey: string]: any | DynamicValidatorDescriptor;
};
