import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import CustomDatePicker from "./CustomDatePicker";
import classes from './FormGroup.module.css'



function FormGroup({onClickSearch, selectOptions, onSelectChange,selectedDev,claimId,setClaimId}) {

    const getPlaceHolder = (value) => {
        const selectOption =selectOptions.find(item => item.value ===value)
        return selectOption.label

    }



    return (
        <div>
            <div className={classes.formGroup}>
                <div className={classes.searchGroup}>
                    <label htmlFor="">Search with:</label>
                    <select value={selectedDev}  onChange={event =>onSelectChange(event.target.value) }>
                        {selectOptions.map(option =><option key={option.value} value={option.value}>{option.label}</option>)}
                    </select>
                </div>
                <div className={classes.group}>
                    <input type="text"
                           placeholder={`Enter ${selectedDev?getPlaceHolder(selectedDev):selectOptions[0].label}`}
                           value={claimId}
                           onChange={event => setClaimId(event.target.value)}/>

                    <div>
                        <button className={classes.searchBtn} onClick={onClickSearch}><i className="fas fa-arrow-alt-circle-right"/></button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default FormGroup;
