export interface IValidatorOptions {
    disabled?: boolean;
    allowEmpty?: boolean
    errorMessage?: string;
    validMessage?: string;
    allowSpecialChars?: boolean;
    message?: string;
    minLength?: number;
    maxLength?: number;
    overridePattern?: string;
}