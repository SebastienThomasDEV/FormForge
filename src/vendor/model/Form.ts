import {Control} from "./Control.ts";
// import {IFormOptions} from "./../interfaces/IFormOptions.ts";
import {Validator} from "./Validator";
import {TControls} from "../types/TControls";
import {Builder} from "./Builder";
import {IForm} from "../interfaces/IForm";

export class Form {
    private _form: HTMLFormElement;
    private readonly config: IForm;
    private readonly controls: Control[] = [];
    private values: any = {};

    constructor(config: IForm) {
        this.config = config;
        this._form = document.createElement('form');
        this.build(this.config);
    }

    render(element: HTMLElement) {
        element.appendChild(this._form);
        return this;
    }

    getConfig() {
        return this.config;
    }

    getControls() {
        return this.controls;
    }

    getValues() {
        return this.values;
    }

    getForm() {
        return this._form;
    }


    build(config: IForm) {
        this._form = Builder.buildForm(config, this._form);
        // if (this.config.controls) {
        //     const keys = Object.keys(this.opts);
        //     for (let i = 0; i < keys.length; i++) {
        //         this._form.setAttribute(keys[i], this.opts[keys[i]]);
        //     }
        // }
        return this;
    }

    add(control: TControls) {
        this.controls.push(control);
        this._form.querySelector('#body')!.appendChild(control.getControl());
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