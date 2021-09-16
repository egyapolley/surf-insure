import React from 'react';
import classes from './NavBar.module.css'
import {NavLink} from "react-router-dom";

function NavBar(props) {

    const activeStyle={
        color: "#fff",
        background:"rgb(21, 107, 227)"

    }
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink to="/dashboard"  activeStyle={activeStyle}>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/policies" activeStyle={activeStyle}>Policies</NavLink>
                </li>
                <li>
                    <NavLink to="/claims" activeStyle={activeStyle}>Claims</NavLink>
                </li>
                <li>
                    <NavLink to="/reports" activeStyle={activeStyle}>Reports</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
