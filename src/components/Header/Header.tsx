import React from 'react'
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom'

type PropsType = {
  isAuth: boolean
  login: string | null
}

const Header: React.FC< PropsType> = (props) => {
    return (
        <header className={classes.header}>
        <div className={classes.appDescription}>
          <div className={classes.description}>Social network made with React/Redux</div>
          <div className={classes.logo}>SN</div>
        </div>
        <div className={classes.loginBlock}>
         <div>{props.isAuth ? `Hello, ${props.login}` : <NavLink to={'/login'}>Login</NavLink>}</div>
        </div>
      </header>
    )
} 

export default Header