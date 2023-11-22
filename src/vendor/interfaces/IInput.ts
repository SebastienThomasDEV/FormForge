import {IInputOptions} from "./IInputOptions";
import {TInputs} from "../types/TInputs";
import {IInputAttrs} from "./IInputAttrs";

export interface IInput {
    type: TInputs;
    id: string;
    label: string;
    attrs?: IInputAttrs;
    options?: IInputOptions;

}