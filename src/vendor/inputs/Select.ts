import {Control} from "../model/Control.ts";
import {IInputOptions} from "../interfaces/IInputOptions";

export class Select extends Control {
    constructor(name: string, label: string, opts?: IInputOptions) {
        super(name, label);
        this.opts = opts;
        this.create()
    }

    create() {

    }
}