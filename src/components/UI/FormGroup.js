import React,{useState} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import CustomDatePicker from "./CustomDatePicker";
import classes from './FormGroup.module.css'



function FormGroup({startDate,setStartDate}) {
    return (
        <div>
            <div className={classes.formGroup}>
                <div className="">
                    <input type="text" placeholder="Search with claim ID" id="search"/>
                </div>
                <div className="">
                    <label htmlFor="product"></label>
                    <select name="" id="product">
                        <option value="">Device Type</option>
                    </select>
                </div>
                <div className={classes.dateGroup}>
                    <div className={classes.date}>
                        <CustomDatePicker label="Start Date" selected={startDate} onChange={date =>setStartDate(date)} />
                    </div>
                    <div className={classes.date}>
                        <CustomDatePicker label="End Date" selected={startDate} onChange={date =>setStartDate(date)} />
                    </div>
                </div>
            </div>
            <div>
                <button className={classes.searchBtn}><i className="fas fa-sign-in-alt"/>Search</button>
            </div>
        </div>
    );
}

export default FormGroup;
