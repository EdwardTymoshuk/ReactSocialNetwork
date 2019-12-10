import React from 'react';
import {reduxForm, Field} from 'redux-form';
import { Input } from '../common/formsControls/formsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import {login} from '../../redux/authReducer';
import {Redirect} from 'react-router-dom';
import classes from '../common/formsControls/formsControls.module.css';

const LoginForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field name={'email'} 
            placeholder={'Login'} 
            component={Input}
            validate={required}
            />
        </div>
        <div>
          <Field name={'password'} 
            placeholder={'Password'}
            type="password" 
            component={Input}
            validate={required}
            />
        </div>
        <div>
          <Field name={'rememberMe'} component={'input'} type={'checkbox'}/>
          <span>Remember me</span>
        </div>
        {props.error && <div className={classes.formError}>
          {props.error}
        </div>}
        <div>
          <button>Login</button>
        </div>
      </form>
    )
} 

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Redirect to ={'/profile'} />
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);