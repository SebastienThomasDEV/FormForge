import {IInputOptions} from "./IInputOptions";
import {TInputs} from "./../../types/TInputs";
import {IInputAttrs} from "./IInputAttrs";
import {IValidatorOptions} from "../validator/IValidatorOptions";

export interface IInput {
    type: TInputs;
    id: string;
    label?: string;
    attrs?: IInputAttrs;
    options?: IInputOptions;
    validator?: IValidatorOptions;
}