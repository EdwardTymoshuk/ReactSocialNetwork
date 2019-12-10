import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  let zalupa;
  if (props.isAuth) {
    zalupa = <NavLink to={'/login'}>PAshol nahoj</NavLink>
  } else {
    zalupa = <NavLink to={'/login'}>Login</NavLink>
  }
    return (
        <header className={classes.header}>
        <div className={classes.appDescription}>
          <div className={classes.description}>Social network made with React/Redux</div>
          <div className={classes.logo}>SN</div>
        </div>
        <div className={classes.loginBlock}>
         <div>{zalupa}</div>
        </div>
      </header>
    )
} 

export default Header;