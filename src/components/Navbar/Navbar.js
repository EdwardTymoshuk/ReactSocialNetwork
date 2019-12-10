import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
        <ul>
          <li className={`${classes.item} ${classes.active}`}>
            <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
          </li>       
          <li className={`${classes.item} ${classes.active}`}>
            <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
          </li>       
          <li className={classes.item}>
            <NavLink to="/dialogs" activeClassName={classes.active}>Message</NavLink>
            </li>       
          <li className={classes.item}>
            <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
           </li>     
          <li className={classes.item}>
            <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
          </li>   
          <li className={classes.item}>
            <NavLink to="/settings" activeClassName={classes.active}>Setings</NavLink>
          </li>  
        </ul>
      </nav>
    )
}

export default Navbar;