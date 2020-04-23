import React from 'react'
import { reduxForm, Field, InjectedFormProps, WrappedFieldProps } from 'redux-form'
import { Input } from '../common/formsControls/formsControls'
import { required, FieldValidatorType } from '../../utils/validators/validators'
import classes from '../common/formsControls/formsControls.module.css'

type LoginFormValuesType = {
  email: string
  password: string
  rememberMe: boolean
}
type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>


type LoginFieldType = {
  name: LoginFormValuesTypeKeys
  placeholder?: string 
  type?: string
  component: React.FC<WrappedFieldProps> | React.ComponentClass | React.FC
  validate?: FieldValidatorType
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType>> = ({ handleSubmit, error }) => {
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field<LoginFieldType>
            name={'email'}
            placeholder={'Email'}
            component={Input}
            validate={required}
          />
        </div>
        <div>
          <Field<LoginFieldType>
            name={'password'}
            placeholder={'Password'}
            type="password"
            component={Input}
            validate={required}
          />
        </div>
        <div>
          <Field<LoginFieldType> name={'rememberMe'} component={Input} type={'checkbox'} />
          <span>Remember me</span>
        </div>
        {error && <div className={classes.formError}>
          {error}
        </div>}
        <div>
          <button>Login</button>
        </div>
      </form>
    )
  }
  const LoginReduxForm = reduxForm<LoginFormValuesType>({form:'login'})(LoginForm)

  export default LoginReduxForm