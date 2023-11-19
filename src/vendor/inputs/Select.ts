import {Control} from "../model/Control.ts";
import {IInputOptions} from "../interfaces/IInputOptions";

export class Select extends Control {
    opts: any
    choices: any;
    constructor(name: string, label: string, choices: any, opts?: IInputOptions) {
        super(name, label);
        this.choices = choices;
        this.opts = opts;
        this.create()
    }

    create() {
        const select = document.createElement('select');
        const label = document.createElement('label');
        const valid = document.createElement('span');
        valid.classList.add('valid-feedback');
        valid.innerText = 'Looks good!';
        const invalid = document.createElement('span');
        invalid.classList.add('invalid-feedback');
        invalid.innerText = 'Looks bad!';
        select.setAttribute('name', this.name);
        select.setAttribute('id', this.name);
        label.setAttribute('for', this.name);
        if (this.label === '') {
            throw new Error('You must specify a label for your input');
        }
        if (this.opts) {
            const keys = Object.keys(this.opts);
            for (let i = 0; i < keys.length; i++) {
                select.setAttribute(keys[i], this.opts[keys[i]]);
            }
        }
    }
}