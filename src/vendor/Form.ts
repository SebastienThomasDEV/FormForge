import {Control} from "./Control.ts";

export class Form {
    private action: string;
    private method: string;
    public form: HTMLFormElement;
    private controls: any[];

    constructor(action: string, method: string) {
        this.action = action;
        this.method = method;
        this.controls = [];
        this.form = document.createElement('form');
    }

    render() {
        for (let i = 0; i < this.controls.length; i++) {
            // checker si le control est un input et qu'il n'as pas le même name qu'un autre
            this.form.appendChild(this.controls[i].control);
        }
        document.body.appendChild(this.form)
        return this;
    }

    build() {
        if (this.controls.length < 0) {
            throw new Error('No controls added yet to your form, try to add some');
        }
        this.form.setAttribute('action', this.action);
        this.form.setAttribute('method', this.method);
        this.form.setAttribute('id', 'form');
        this.form.setAttribute('class', 'form');
        return this;
    }

    add(control: Control) {
        this.controls.push(control);
        return this;
    }


}