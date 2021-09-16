import React from 'react';
import classes from './Card.module.css'

function Card({name, value, label,...style}) {
    return (
        <div style={{...style}} className={classes.container}>
            <div className={classes.box}>
             <span style={{textTransform:'uppercase', fontWeight:"bold"}}> {label}</span>
            </div>
            <div className={classes.middle}>

            </div>
            <div className={classes.box}>
              <span style={{textTransform:'uppercase', fontWeight:"bold"}}>  {value}</span>
            </div>

        </div>
    );
}


export default Card;
