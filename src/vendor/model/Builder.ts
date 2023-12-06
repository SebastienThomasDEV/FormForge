import {IForm} from "../interfaces/IForm";
import {IInput} from "../interfaces/IInput";
import {Validator} from "./Validator";

export class Builder {
    static buildForm(config: IForm, form: HTMLFormElement): HTMLFormElement {
        form.setAttribute('id', config.id);
        form.setAttribute('class', config.class);
        if (config.options) {
            for (const [key, value] of Object.entries(config.options)) {
                form.setAttribute(key, value);
            }
        }
        if (config.title) {
            const title = document.createElement('h2');
            title.textContent = config.title;
            title.classList.add('h2', 'fw-bold', 'border-bottom', 'border-secondary', 'text-primary', 'pb-2');
            form.appendChild(title);
        }
        form.classList.add('p-4', 'bg-light', 'm-3', 'rounded', 'd-flex', 'flex-column', 'gap-2', 'shadow-lg');
        form.classList.add('needs-validation');
        const body = document.createElement('div');
        body.id = 'body';
        form.appendChild(body);
        const submit = document.createElement('button');
        submit.setAttribute('type', 'submit');
        submit.classList.add('btn');
        submit.classList.add('btn-primary');
        submit.innerText = config.options?.submitLabel ?? 'Submit';
        form.appendChild(submit);
        return form;
    }


    static buildControl(config: IInput, control: HTMLElement): any {
        control.classList.add('col-12', 'col-md');
        let input = document.createElement('input');
        input.setAttribute('type', config.type);
        input.setAttribute('id', config.id);
        input.setAttribute('name', config.id);
        input.setAttribute('class', 'form-control');
        input.setAttribute('aria-describedby', `${config.id}Help`);
        control.appendChild(this.buildLabel(config));
        if (config.options) control = this.buildOptions(config, input, control)
        control.appendChild(input);
        if (config.validator?.disabled) control = this.buildValidation(config, input, control)
        // switch (config.type) {
        //     case 'text':
        //         input.setAttribute('type', config.type);
        //         input.setAttribute('id', config.id);
        //         input.setAttribute('name', config.id);
        //         input.setAttribute('class', 'form-control');
        //         input.setAttribute('aria-describedby', `${config.id}Help`);
        //         control.appendChild(this.buildLabel(config));
        //         if (config.options) control = this.buildOptions(config, input, control)
        //         control.appendChild(input);
        //         if (config.validator?.enable) control = this.buildValidation(config, input, control)
        //         break;
        //     case 'email':
        //         const email = document.createElement('input');
        //         email.setAttribute('type', config.type);
        //         email.setAttribute('id', config.id);
        //         email.setAttribute('name', config.id);
        //         email.setAttribute('class', 'form-control');
        //         email.setAttribute('aria-describedby', `${config.id}Help`);
        //         control.appendChild(this.buildLabel(config));
        //         control.appendChild(email);
        //         if (config.options) control = this.buildOptions(config, input, control)
        //         if (config.validator?.enable) control = this.buildValidation(config, input, control)
        //         break;
        //     case 'password':
        //         const password = document.createElement('input');
        //         password.setAttribute('type', config.type);
        //         password.setAttribute('id', config.id);
        //         password.setAttribute('name', config.id);
        //         password.setAttribute('class', 'form-control');
        //         password.setAttribute('aria-describedby', `${config.id}Help`);
        //         control.appendChild(this.buildLabel(config));
        //         control.appendChild(password);
        //         if (config.options) control = this.buildOptions(config, input, control)
        //         if (config.validator?.enable) control = this.buildValidation(config, input, control)
        //         break;
        //     case 'textarea':
        //         const textarea = document.createElement('textarea');
        //         textarea.setAttribute('id', config.id);
        //         textarea.setAttribute('name', config.id);
        //         textarea.setAttribute('class', 'form-control');
        //         textarea.setAttribute('aria-describedby', `${config.id}Help`);
        //         control.appendChild(this.buildLabel(config));
        //         control.appendChild(textarea);
        //         if (config.options) control = this.buildOptions(config, textarea, control)
        //         if (config.validator?.enable) control = this.buildValidation(config, input, control)
        //         break;
        //     case 'checkbox':
        //         // changer le design
        //         const checkbox = document.createElement('input');
        //         checkbox.setAttribute('type', config.type);
        //         checkbox.setAttribute('id', config.id);
        //         checkbox.setAttribute('name', config.id);
        //         checkbox.setAttribute('aria-describedby', `${config.id}Help`);
        //         const label = this.buildLabel(config);
        //         label.classList.add('form-check-label');
        //         checkbox.classList.add('form-check-input');
        //         control.appendChild(checkbox);
        //         control.appendChild(label);
        //         if (config.options) control = this.buildOptions(config, checkbox, control)
        //         if (config.validator?.enable) control = this.buildValidation(config, input, control)
        //         break;
        //     case 'number':
        //         const number = document.createElement('input');
        //         number.setAttribute('type', config.type);
        //         number.setAttribute('id', config.id);
        //         number.setAttribute('name', config.id);
        //         number.setAttribute('class', 'form-control');
        //         number.setAttribute('aria-describedby', `${config.id}Help`);
        //         control.appendChild(this.buildLabel(config));
        //         control.appendChild(number);
        //         if (config.options) control = this.buildOptions(config, number, control)
        //         if (config.validator?.enable) control = this.buildValidation(config, input, control)
        //         break;
        //     case 'date':
        //         const date = document.createElement('input');
        //         date.setAttribute('type', config.type);
        //         date.setAttribute('id', config.id);
        //         date.setAttribute('name', config.id);
        //         date.setAttribute('class', 'form-control');
        //         date.setAttribute('aria-describedby', `${config.id}Help`);
        //         control.appendChild(this.buildLabel(config));
        //         control.appendChild(date);
        //         if (config.options) control = this.buildOptions(config, date, control)
        //         if (config.validator?.enable) control = this.buildValidation(config, input, control)
        //         break;

        // }
        return control;
    }

    static buildOptions(config: IInput, input: any, control: any): any {
        if (config.options) {
            if (config.options.helperText) {
                input.onfocus = () => {
                    document.getElementById(`${config.id}Help`)!.classList.remove('d-none');
                }
                input.onblur = () => {
                    document.getElementById(`${config.id}Help`)!.classList.add('d-none');
                }
                const helper = document.createElement('small');
                helper.classList.add('text-muted', 'd-none', 'mx-3');
                helper.textContent = config.options.helperText;
                helper.id = `${config.id}Help`;
                control.appendChild(helper);
            }
        }
        return control;
    }


    static buildValidation(config: IInput, input: any, control: any): any {
        const error = document.createElement('span');
        error.classList.add('invalid-feedback');
        error.textContent = config.validator?.errorMessage || 'Invalid input !';
        control.appendChild(error);
        const valid = document.createElement('span');
        valid.classList.add('valid-feedback');
        valid.textContent = config.validator?.validMessage || 'Valid input !';
        control.appendChild(valid);
        // call validator to check input
        input.oninput = () => {
            console.log(Validator.checkInput(input, config.validator));
            if (Validator.checkInput(input, config.validator)) {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            }
            if (input.value === '') {
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
            }
        }
        return control;
    }

    static buildLabel(config: IInput): HTMLLabelElement {
        const label = document.createElement('label');
        label.classList.add('form-label');
        label.textContent = config.label;
        return label;
    }
}