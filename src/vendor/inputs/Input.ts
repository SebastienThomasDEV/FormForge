import {Control} from "../model/Control.ts";
import {ETypes} from "../enums/ETypes.ts";
import {IInputOptions} from "../interfaces/IInputOptions.ts";

export class Input extends Control {
    type: ETypes;
    opts?: any;
    constructor(type: ETypes, name: string, label: string, opts?: IInputOptions) {
        super(name, label);
        this.type = type;
        this.opts = opts;
        this.create()
    }

    create() {
        const input = document.createElement('input');
        if (this.type === ETypes.submit) {
            input.setAttribute('type', this.type);
            input.setAttribute('value', this.label);
            input.classList.add('btn', 'btn-primary', 'w-100', 'mt-3');
            this.dom_element.appendChild(input);
            return this;
        }
        const label = document.createElement('label');
        const valid = document.createElement('span');
        valid.classList.add('valid-feedback');
        valid.innerText = 'Looks good!';
        const invalid = document.createElement('span');
        invalid.classList.add('invalid-feedback');
        invalid.innerText = 'Looks bad!';
        input.setAttribute('type', this.type);
        input.setAttribute('name', this.name);
        input.setAttribute('id', this.name);
        label.setAttribute('for', this.name);
        if (this.label === '') {
            throw new Error('You must specify a label for your input');
        } else if (this.name === '') {
            throw new Error('You must specify a name for your input');
        }
        if (this.opts) {
            const keys = Object.keys(this.opts);
            for (let i = 0; i < keys.length; i++) {
                input.setAttribute(keys[i], this.opts[keys[i]]);
            }
        }
        label.innerText = this.label;
        label.classList.add('form-label');
        input.classList.add('form-control');
        this.dom_element.appendChild(label);
        this.dom_element.appendChild(input);
        this.dom_element.appendChild(valid);
        this.dom_element.appendChild(invalid);
        return this;
    }


}