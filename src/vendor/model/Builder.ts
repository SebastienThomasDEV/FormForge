import {IForm} from "../interfaces/IForm";
import {IInput} from "../interfaces/IInput";

export class Builder {
    static buildForm(config: IForm, form: HTMLFormElement): HTMLFormElement {
        form.setAttribute('id', config.id);
        form.setAttribute('class', config.class);
        if (config.options) {
            for (const [key, value] of Object.entries(config.options)) {
                form.setAttribute(key, value);
            }
        }
        const title = document.createElement('h2');
        title.textContent = config.title;
        title.classList.add('h2', 'fw-bold', 'border-bottom', 'border-secondary', 'text-primary', 'pb-2');
        form.appendChild(title);
        form.classList.add('p-4', 'bg-light', 'm-3', 'rounded', 'd-flex', 'flex-column', 'gap-2', 'shadow-lg');
        form.classList.add('needs-validation');
        const body = document.createElement('div');
        body.id = 'body';
        form.appendChild(body);
        const submit = document.createElement('button');
        submit.setAttribute('type', 'submit');
        submit.classList.add('btn');
        submit.classList.add('btn-primary');
        submit.innerText = 'Submit';
        form.appendChild(submit);
        return form;
    }


    static buildControl(config: IInput, control: HTMLElement): any {
        control.classList.add('col-12', 'col-md');
        const label = document.createElement('label');
        label.setAttribute('for', config.id);
        label.classList.add('form-label');
        label.textContent = config.label;
        control.appendChild(label);
        switch (config.type) {
            case 'text':
                const input = document.createElement('input');
                input.setAttribute('type', config.type);
                input.setAttribute('id', config.id);
                input.setAttribute('name', config.id);
                input.setAttribute('class', 'form-control');
                input.setAttribute('aria-describedby', `${config.id}Help`);
                control.appendChild(input);
                if (config.attrs) {
                    for (const [key, value] of Object.entries(config.attrs)) {
                        input.setAttribute(key, value);
                    }
                }
                if (config.options) {
                    if (config.options.helperText) {
                        input.onfocus = () => {
                            document.getElementById(`${config.id}Help`)!.classList.remove('d-none');
                        }
                        input.onblur = () => {
                            document.getElementById(`${config.id}Help`)!.classList.add('d-none');
                        }
                        const helper = document.createElement('small');
                        helper.classList.add('form-text', 'text-muted');
                        helper.textContent = config.options.helperText;
                        helper.id = `${config.id}Help`;
                        control.appendChild(helper);
                    }
                }
                break;
            case 'email':
                const email = document.createElement('input');
                email.setAttribute('type', config.type);
                email.setAttribute('id', config.id);
                email.setAttribute('name', config.id);
                email.setAttribute('class', 'form-control');
                email.setAttribute('aria-describedby', `${config.id}Help`);
                control.appendChild(email);
                if (config.attrs) {
                    for (const [key, value] of Object.entries(config.attrs)) {
                        email.setAttribute(key, value);
                    }
                }
                if (config.options) {
                    if (config.options.helperText) {
                        email.onfocus = () => {
                            document.getElementById(`${config.id}Help`)!.classList.remove('d-none');
                        }
                        email.onblur = () => {
                            document.getElementById(`${config.id}Help`)!.classList.add('d-none');
                        }
                        const helper = document.createElement('small');
                        helper.classList.add('form-text', 'text-muted');
                        helper.textContent = config.options.helperText;
                        helper.id = `${config.id}Help`;
                        control.appendChild(helper);
                    }
                }
                break;
            case 'password':
                const password = document.createElement('input');
                password.setAttribute('type', config.type);
                password.setAttribute('id', config.id);
                password.setAttribute('name', config.id);
                password.setAttribute('class', 'form-control');
                password.setAttribute('aria-describedby', `${config.id}Help`);
                control.appendChild(password);
                if (config.attrs) {
                    for (const [key, value] of Object.entries(config.attrs)) {
                        password.setAttribute(key, value);
                    }
                }
            // case 'password':
            // case 'number':
            // case 'date':
            // case 'time':
            // case 'datetime-local':
            // case 'color':

        }
        // if (opts) {
        //     if (opts.required) {
        //         control.setAttribute('required', '');
        //     }
        //     if (opts.placeholder) {
        //         control.setAttribute('placeholder', opts.placeholder);
        //     }
        //     if (opts.value) {
        //         control.setAttribute('value', opts.value);
        //     }
        //     if (opts.label) {
        //         const label = document.createElement('label');
        //         label.setAttribute('for', name);
        //         label.innerText = opts.label;
        //         control.parentNode!.insertBefore(label, control);
        //     }
        //     if (opts.options) {
        //         for (let i = 0; i < opts.options.length; i++) {
        //             const option = document.createElement('option');
        //             option.setAttribute('value', opts.options[i].value);
        //             option.innerText = opts.options[i].text;
        //             control.appendChild(option);
        //         }
        //     }
        //
        //
        // }
        return control;


    }
}