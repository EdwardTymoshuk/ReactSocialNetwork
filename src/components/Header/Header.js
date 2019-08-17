import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
        <img src="https://cdn.shopify.com/s/files/1/0926/9056/t/1/assets/logo.png?7"/>
        <h2>DICKER: the dickest social network</h2>
      </header>
    )
} 

export default Header;