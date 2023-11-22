import {Control} from "../model/Control.ts";
import {Builder} from "../model/Builder";
import {IInput} from "../interfaces/IInput";

export class Input extends Control {
    private _control: HTMLDivElement;
    private readonly config: IInput;

    constructor(config: IInput) {
        super(config.id, config.label);
        this.config = config;
        this._control = document.createElement('div');
        this.build(this.config);
    }

    build(config: IInput) {
        this._control = Builder.buildControl(config, this._control);
        return this;
    }

    getControl() {
        return this._control;
    }


}