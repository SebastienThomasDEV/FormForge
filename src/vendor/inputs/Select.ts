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
        const invalid = document.createElement('span');
        valid.innerText = 'Looks good!';
        invalid.innerText = 'Looks bad!';
        valid.classList.add('valid-feedback');
        select.classList.add('form-select');
        label.classList.add('form-label');
        label.innerText = this.label;
        for (const choice of this.choices) {
            const option = document.createElement('option');
            option.setAttribute('value', choice.value);
            option.innerText = choice.label;
            select.appendChild(option);
        }
        for (let i = 0; i < this.choices.length; i++) {
            const option = document.createElement('option');
            option.setAttribute('value', this.choices[i].value);
            option.innerText = this.choices[i].label;
            select.appendChild(option);
        }
        invalid.classList.add('invalid-feedback');
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
        this.dom_element.appendChild(label);
        this.dom_element.appendChild(select);
        this.dom_element.appendChild(valid);
        this.dom_element.appendChild(invalid);
    }
}