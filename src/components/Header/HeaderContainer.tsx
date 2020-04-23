import React from 'react'
import Header from './Header'
import {logout} from '../../redux/authReducer'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'

type MapStateType = {
  isAuth: boolean
  login: string
}

const HeaderContainer: React.FC<MapStateType> = (props) => {
      return (
        <Header {...props}/>
      )
    }

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect<MapStateType>(mapStateToProps, {logout})(HeaderContainer)