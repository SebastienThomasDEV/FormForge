// import {Form} from "./Form";
// import {Control} from "./Control";
import {IValidatorOptions} from "../interfaces/IValidatorOptions";
// import {Control} from "./Control";
// import {Input} from "../inputs/Input";

export class Validator {
    // @ts-ignore
    static checkInput(input: HTMLInputElement, config?: IValidatorOptions): boolean {
        let valid = true;
        if (config) {
            console.log(config);
            if (input.value === '' && !config.allowEmpty) {
                console.log('empty and not allowed');
                return !valid;
            } else if (input.value === '' && config.allowEmpty) {
                console.log('empty but allowed');
                return true;
            }
            if (config.minLength) {
                if (input.value.length < config.minLength) {
                    console.log('too short');
                    return !valid;
                }
            }
            if (config.maxLength) {
                if (input.value.length > config.maxLength) {
                    console.log('too long');
                    return !valid;
                }
            }
            if (config.customPattern) {
                const pattern = new RegExp(config.customPattern);
                if (!pattern.test(input.value)) {
                    console.log('pattern not respected');
                    return !valid;
                }
            }
        }

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