import React from 'react'
import classes from './formsControls.module.css'
import { WrappedFieldProps, WrappedFieldMetaProps } from 'redux-form'

type PropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<PropsType> = ({meta, children}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "" ) }>  
            <div>
                {children}
            </div>
            <div>
                { hasError && <span>{meta.error}</span> }
            </div>
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input: React.FC<WrappedFieldProps>  = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}