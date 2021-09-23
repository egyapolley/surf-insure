import React from 'react';
import classes from "./Refresh.module.css";

function Refresh({onClick}) {
    return (
        <div className={classes.container}>
           <button onClick={onClick}> <i className="fas fa-sync-alt"/></button>
        </div>
    );
}

export default Refresh;
