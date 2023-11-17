import {Control} from "./Control.ts";
import {IFormOptions} from "./../interfaces/IFormOptions.ts";

export class Form {
    private readonly action: string;
    private readonly method: string;
    private readonly _form: HTMLFormElement;
    private readonly controls: any[];
    private readonly opts?: any;
    private readonly title: string;

    constructor(action: string, method: string, title: string,opts?: IFormOptions) {
        this.action = action;
        this.method = method;
        this.title = title;
        this.controls = [];
        this.opts = opts;
        this._form = document.createElement('form');
        this.build();
    }

    render() {
        document.body.appendChild(this._form)
        return this;
    }

    build() {
        if (this.controls.length < 0) {
            throw new Error('No controls added yet to your form, try to add some');
        }
        const title = document.createElement('h2');
        title.textContent = this.title;
        title.classList.add('h2', 'fw-bold', 'border-bottom', 'border-secondary', 'text-primary', 'pb-2');
        this._form.appendChild(title);
        this._form.setAttribute('action', this.action);
        this._form.setAttribute('method', this.method);
        if (this.opts) {
            const keys = Object.keys(this.opts);
            for (let i = 0; i < keys.length; i++) {
                this._form.setAttribute(keys[i], this.opts[keys[i]]);
            }
        }
        this._form.classList.add('p-4', 'bg-light','m-3','rounded', 'd-flex', 'flex-column', 'gap-2', 'shadow-lg');
        return this;
    }

    add(control: Control) {
        this.controls.push(control);
        this._form.appendChild(control.dom_element);
        return this;
    }

    wrap(control: Control[]) {
        const wrapper = document.createElement('div');
        for (let i = 0; i < control.length; i++) {
            control[i].dom_element.classList.add('col-12', 'col-md');
            wrapper.appendChild(control[i].dom_element);
        }
        wrapper.classList.add('row');
        this._form.appendChild(wrapper);
        return this;
    }




}