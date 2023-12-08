import {Control} from "../model/Control";
import {IFormOptions} from "./IFormOptions";

export interface IForm {
    id : string;
    class : string;
    title?: string;
    controls? : Control[];
    options? : IFormOptions;
    values? : any;
}