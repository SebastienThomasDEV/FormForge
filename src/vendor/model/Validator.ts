// import {Form} from "./Form";
// import {Control} from "./Control";
import {IValidatorOptions} from "../interfaces/IValidatorOptions";
import {Control} from "./Control";

export class Validator {
    // @ts-ignore
    static controlCheck(type: string, token: string, opts?: IValidatorOptions): boolean {
        let valid = false;
        if (token === '') {
            return valid;
        }
        switch (type) {
            case 'email':
                valid = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$').test(token);
                break;
            case 'password':
                valid = new RegExp('^[a-zA-Z0-9._-]{6,}$').test(token);
                break;
            case 'text':
                valid = new RegExp('^[a-zA-Z0-9._-]{3,}$').test(token);
                break;
            case 'number':
                valid = new RegExp('^[0-9]{1,}$').test(token);
                break;
            case 'tel':
                valid = new RegExp('^[0-9]{10}$').test(token);
                break;
            case 'date':
                valid = new RegExp('^[0-9]{4}-[0-9]{2}-[0-9]{2}$').test(token);
                break;
            default:
                valid = false;
                break;
        }
        return valid;
    }

    static formCheck(controls: Control[]): boolean {
        let valid = true;
        controls.forEach((control) => {
            if (control instanceof HTMLInputElement) {
                if (!Validator.controlCheck(control.type, control.value)) {
                    valid = false;
                }
            }
        });
        return valid;
    }
}