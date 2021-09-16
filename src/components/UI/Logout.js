import React from 'react';
import classes from './Logout.module.css'

function Logout(props) {

    const handleLogOut = () => {
        localStorage.clear();
        window.location = "/"
    }

    return (
            <div className={classes.logoutContainer}>
                <button onClick={handleLogOut}><i
                    className="fa fa-power-off"/>&nbsp;LogOut
                </button>
        </div>
    );
}

export default Logout;
