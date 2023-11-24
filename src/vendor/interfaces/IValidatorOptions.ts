export interface IValidatorOptions {
    allowEmpty?: boolean;
    allowSpecialChars?: boolean;
    message?: string;
    minLength?: number;
    maxLength?: number;
    customPattern?: string;
}