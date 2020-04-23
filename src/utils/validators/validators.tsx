export type FieldValidatorType = (value: string | Array<string>) => string | Array<string> | undefined

export const required: FieldValidatorType = value => {
    if (value) return undefined;
    return `Field is required`;
}

export const maxLength = (maxLength: number): FieldValidatorType => value => {
    if (value && value.length > maxLength) return `Max length is ${maxLength}`;
    return undefined;
}