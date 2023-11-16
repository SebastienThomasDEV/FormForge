import {Control} from "../Control.ts";

export class Select extends Control {

    selected?: boolean;

    options: string[];

    control: HTMLSelectElement;

    constructor(name: string, value: string, label: string, options: string[]) {
        super(name, value, label);
        this.options = options;
        this.control = document.createElement('select');
        this.create()
    }

    create() {
        this.control.setAttribute('name', this.name);
        this.control.setAttribute('id', this.name);
        this.control.setAttribute('class', 'form-control');
        this.control.setAttribute('placeholder', this.label);
        this.options.forEach((option: string) => {
            const opt = document.createElement('option');
            opt.setAttribute('value', option);
            opt.innerHTML = option;
            this.control.appendChild(opt);
        });
        return this;
    }
}