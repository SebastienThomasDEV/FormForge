export interface IValidatorOptions {
    allowEmpty?: boolean
    errorMessage?: string;
    validMessage?: string;
    allowSpecialChars?: boolean;
    message?: string;
    minLength?: number;
    maxLength?: number;
    customPattern?: string;
}