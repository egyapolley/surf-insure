import React from 'react';
import classes from './ProgressBar.module.css'

import progressBar from "../../assets/ajax-loader.gif"

function ProgressBar({showProgress}) {
    if (!showProgress) return  null
    return (
        <div className={classes.progressBar} ><img src={progressBar} alt="Processing"/></div>
    );
}

export default ProgressBar;
