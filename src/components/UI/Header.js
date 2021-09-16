import React from 'react';
import Logo from "./Logo";
import NavBar from "./NavBar";
import classes from './Header.module.css'

function Header(props) {
    return (
        <header className={classes.header}>
            <Logo />
            <NavBar />
        </header>
    );
}

export default Header;
