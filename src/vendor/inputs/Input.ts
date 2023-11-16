import {Control} from "../Control.ts";
import {ETypes} from "../enums/ETypes.ts";

export class Input extends Control {

    control: HTMLDivElement;
    type: ETypes;
    constructor(type: ETypes, name: string, label: string) {
        super(name, label);
        this.type = type;
        this.control = document.createElement('div');
        this.create()
    }

    create() {
        const input = document.createElement('input');
        if (this.label === '') {
            throw new Error('You must specify a label for your input');
        } else if (this.name === '') {
            throw new Error('You must specify a name for your input');
        }
        const label = document.createElement('label');
        input.setAttribute('type', this.type);
        input.setAttribute('name', this.name);
        input.setAttribute('id', this.name);
        label.setAttribute('for', this.name);
        label.innerText = this.label;
        label.classList.add('form-label');
        input.classList.add('form-control');
        this.control.appendChild(label);
        this.control.appendChild(input);
        return this;
    }


}