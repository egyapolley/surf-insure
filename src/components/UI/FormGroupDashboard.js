import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import CustomDatePicker from "./CustomDatePicker";
import classes from './FormGroupDashboard.module.css'



function FormGroupDashboard({startDate, setStartDate,
                       endDate, setEndDate,
                       onClickSearch,
                       selectOptions, onSelectChange,selectedDev,claimId,setClaimId}) {



    return (
        <div>
            <div className={classes.formGroup}>
                <div className={classes.dateGroup}>
                    <div className={classes.date}>
                        <CustomDatePicker label="Start Date" selected={startDate}
                                          onChange={date => setStartDate(date)}/>
                    </div>
                    <div className={classes.date}>
                        <CustomDatePicker label="End Date" selected={endDate} onChange={date => setEndDate(date)}/>
                    </div>
                </div>
                <div className={classes.list}>
                    <select value={selectedDev}  onChange={event =>onSelectChange(event.target.value) }>
                        <option value="">Plans</option>
                        {selectOptions.map(option =><option key={option.value} value={option.value}>{option.label}</option>)}
                    </select>
                    <div>
                        <button className={classes.searchBtn} onClick={onClickSearch}><i className="fas fa-arrow-alt-circle-right"/></button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default FormGroupDashboard;
