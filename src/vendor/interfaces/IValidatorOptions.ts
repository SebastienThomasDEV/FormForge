export interface IValidatorOptions {
    allowEmpty?: boolean;
    allowSpecialChars?: boolean;
    message?: string;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
}