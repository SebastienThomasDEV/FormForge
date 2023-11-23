// import {Form} from "./Form";
// import {Control} from "./Control";
import {IValidatorOptions} from "../interfaces/IValidatorOptions";
import {Control} from "./Control";
import {Input} from "../inputs/Input";

export class Validator {
    // @ts-ignore
    static inputCheck(input: Input, config: IValidatorOptions): boolean {
        let valid = false;
        const control = input.control as HTMLInputElement;
        if (control.value === '' && !config.allowEmpty) {
            return valid;
        } else if (control.value === '' && config.allowEmpty) {
            return true;
        }
        if (config.minLength) {
            if (control.value.length < config.minLength) {
                return valid;
            }
        } else if (config.maxLength) {
            if (control.value.length > config.maxLength) {
                return valid;
            }
        } else if (config.custonPattern) {
            const pattern = new RegExp(config.custonPattern);
            if (!pattern.test(control.value)) {
                return valid;
            }
        } else if (config.allowSpecialChars) {
            const pattern = new RegExp(/^[a-zA-Z0-9]+$/);
            if (!pattern.test(control.value)) {
                return valid;
            }
        }
        valid = true;

        return valid;
    }
    //
    // static formCheck(controls: Control[]): boolean {
    //     let valid = true;
    //     controls.forEach((control) => {
    //         if (control instanceof HTMLInputElement) {
    //             if (!Validator.inputCheck(control.type, control.value)) {
    //                 valid = false;
    //             }
    //         }
    //     });
    //     return valid;
    // }
}