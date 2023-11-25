import {Control} from "../model/Control.ts";
import {Builder} from "../model/Builder";
import {IInput} from "../interfaces/IInput";

export class Input extends Control {
    private readonly config: IInput;

    constructor(config: IInput) {
        super(config.id, config.label);
        this.config = config;
        this.config.validator = {
            enable: this.config.validator?.enable ?? true,
        }
        this.control = document.createElement('div');
        this.build(this.config);
    }

    build(config: IInput) {
        this.control = Builder.buildControl(config, this.control!);
        return this;
    }

    getControl() {
        return this.control;
    }


}