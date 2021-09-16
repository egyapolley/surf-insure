import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import CustomDatePicker from "./CustomDatePicker";
import classes from './FormGroup.module.css'



function FormGroup({startDate, setStartDate,
                       endDate, setEndDate,
                       onClickSearch,
                       selectOptions, onSelectChange,selectedDev,claimId,setClaimId}) {



    return (
        <div>
            <div className={classes.formGroup}>
                <div>
                    <input type="text"
                           placeholder="Search with claim ID"
                           value={claimId}
                           onChange={event => setClaimId(event.target.value)}/>
                </div>
                <div>
                    <select value={selectedDev}  onChange={event =>onSelectChange(event.target.value) }>
                        <option value="">Device Type</option>
                        {selectOptions.map(option =><option key={option.value} value={option.value}>{option.label}</option>)}
                    </select>
                </div>
                <div className={classes.dateGroup}>
                    <div className={classes.date}>
                        <CustomDatePicker label="Start Date" selected={startDate}
                                          onChange={date => setStartDate(date)}/>
                    </div>
                    <div className={classes.date}>
                        <CustomDatePicker label="End Date" selected={endDate} onChange={date => setEndDate(date)}/>
                    </div>
                </div>
            </div>
            <div>
                <button className={classes.searchBtn} onClick={onClickSearch}><i className="fas fa-sign-in-alt"/>Search</button>
            </div>
        </div>
    );
}

export default FormGroup;
