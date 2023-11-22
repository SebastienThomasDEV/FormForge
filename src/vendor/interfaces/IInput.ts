import {IInputOptions} from "./IInputOptions";
import {TInputs} from "../types/TInputs";

export interface IInput {
    type: TInputs;
    id: string;
    label: string;
    options?: IInputOptions;

}