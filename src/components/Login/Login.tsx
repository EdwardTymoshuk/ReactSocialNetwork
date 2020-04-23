import LoginReduxForm from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'
import { AppStateType } from '../../redux/redux-store'
import { LoginFormValuesType } from './LoginForm';

type MapStatePropsType = {
  isAuth: boolean
}
type MapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void
}

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  const onSubmit = (formData: LoginFormValuesType) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)