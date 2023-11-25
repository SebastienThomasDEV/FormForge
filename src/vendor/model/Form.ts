import {Control} from "./Control.ts";
// import {IFormOptions} from "./../interfaces/IFormOptions.ts";
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
        return this;
    }

    add(control: TControls) {
        if (control.id === '' || control.label === '') {
            throw new Error('You must specify valid parameters for your control');
        } else if (control.id === undefined || control.label === undefined) {
            throw new Error('Some parameters are missing for your control');
        }
        for (let i = 0; i < this.controls.length; i++) {
            if (this.controls[i].id === control.id) {
                throw new Error('You cannot have two controls with the same id');
            }
        }
        this.controls.push(control);
        this._form.querySelector('#body')!.appendChild(control.control);
        return this;
    }

    wrap(controls: TControls[]) {
        const wrapper = document.createElement('div');
        for (let i = 0; i < controls.length; i++) {
            controls[i].control.classList.add('col-12', 'col-md');
            wrapper.appendChild(controls[i].control);
            this.controls.push(controls[i]);
            if (controls[i].label === '' || controls[i].id === '') {
                throw new Error('You must specify valid parameters for your control');
            } else if (controls[i].label === undefined || controls[i].id === undefined) {
                throw new Error('Some parameters are missing for your control');
            }
        }
        wrapper.classList.add('row');
        this._form.querySelector('#body')!.appendChild(wrapper);
        return this;
    }


    // private check() {
    //     this.controls.forEach((control: Control) => {
    //         control.dom_element.addEventListener('focusin', (e: FocusEvent) => {
    //             const target = e.target as HTMLInputElement;
    //             const keys = Object.keys(this.values);
    //             if (!control.checked) {
    //                 // @ts-ignore
    //                 target.addEventListener('input', (e: Event) => {
    //                     control.checked = true;
    //                     for (let i = 0; i < keys.length; i++) {
    //                         if (keys[i] === target.name) {
    //                             this.values[keys[i]] = target.value;
    //                         }
    //                     }
    //                     if (Validator.inputCheck(target, control.validator)) {
    //                         target.classList.remove('is-invalid');
    //                         target.classList.add('is-valid');
    //                     } else {
    //                         target.classList.remove('is-valid');
    //                         target.classList.add('is-invalid');
    //                     }
    //                     if (target.value === '') {
    //                         target.classList.remove('is-valid');
    //                         target.classList.add('is-invalid');
    //                     }
    //                 });
    //                 // @ts-ignore
    //                 target.addEventListener('blur', (e: Event) => {
    //                     setTimeout(() => {
    //                         target.classList.remove('is-valid');
    //                     }, 1000)
    //                     for (let i = 0; i < keys.length; i++) {
    //                         if (keys[i] === target.name) {
    //                             this.values[keys[i]] = target.value;
    //                         }
    //                     }
    //                 });
    //             }
    //         });
    //     });
    // }

}