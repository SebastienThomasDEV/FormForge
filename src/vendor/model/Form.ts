import {Control} from "./Control.ts";
import {IFormOptions} from "./../interfaces/IFormOptions.ts";
import {Validator} from "./Validator";
import {TControls} from "../types/TControls";

export class Form {
    private readonly action: string;
    private readonly method: string;
    private readonly _form: HTMLFormElement;
    private readonly controls: any[];
    private readonly opts?: any;
    private readonly title: string;
    private values: any = {};

    constructor(action: string, method: string, title: string, opts?: IFormOptions) {
        this.action = action;
        this.method = method;
        this.title = title;
        this.controls = [];
        this.opts = opts;
        this._form = document.createElement('form');
        this.build();
    }

    render() {
        this.check();
        document.body.appendChild(this._form)
        const submit = document.createElement('button');
        submit.setAttribute('type', 'submit');
        submit.classList.add('btn', 'btn-primary');
        submit.innerText = 'Submit';
        submit.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this._form.reset();
            if (Validator.formCheck(this.controls)) {
                console.log(this.values);
            }
        })
        this._form.appendChild(submit);
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
        this._form.classList.add('p-4', 'bg-light', 'm-3', 'rounded', 'd-flex', 'flex-column', 'gap-2', 'shadow-lg');
        if (this.opts) {
            const keys = Object.keys(this.opts);
            for (let i = 0; i < keys.length; i++) {
                this._form.setAttribute(keys[i], this.opts[keys[i]]);
            }
        }
        return this;
    }

    add(control: TControls) {
        this.values[control.name] = '';
        this.controls.push(control);
        this._form.appendChild(control.dom_element);
        return this;
    }

    wrap(control: Control[]) {
        const wrapper = document.createElement('div');
        for (let i = 0; i < control.length; i++) {
            control[i].dom_element.classList.add('col-12', 'col-md');
            this.values[control[i].name.replace(' ', '_')] = '';
            wrapper.appendChild(control[i].dom_element);
            this.controls.push(control[i]);
            if (control[i].name === '') {
                throw new Error('You must specify a name for your input');
            } else if (control[i].label === '') {
                throw new Error('You must specify a label for your input');
            }

        }
        wrapper.classList.add('row');
        this._form.appendChild(wrapper);
        return this;
    }


    private check() {
        this.controls.forEach((control: Control) => {
            control.dom_element.addEventListener('focusin', (e: FocusEvent) => {
                const target = e.target as HTMLInputElement;
                const keys = Object.keys(this.values);
                if (!control.checked) {
                    // @ts-ignore
                    target.addEventListener('input', (e: Event) => {
                        control.checked = true;
                        for (let i = 0; i < keys.length; i++) {
                            if (keys[i] === target.name) {
                                this.values[keys[i]] = target.value;
                            }
                        }
                        if (Validator.controlCheck(target.type, target.value)) {
                            target.classList.remove('is-invalid');
                            target.classList.add('is-valid');
                        } else {
                            target.classList.remove('is-valid');
                            target.classList.add('is-invalid');
                        }
                        if (target.value === '') {
                            target.classList.remove('is-valid');
                            target.classList.add('is-invalid');
                        }
                    });
                    // @ts-ignore
                    target.addEventListener('blur', (e: Event) => {
                        setTimeout(() => {
                            target.classList.remove('is-valid');
                        }, 1000)
                        for (let i = 0; i < keys.length; i++) {
                            if (keys[i] === target.name) {
                                this.values[keys[i]] = target.value;
                            }
                        }
                    });
                }
            });
        });
    }

}