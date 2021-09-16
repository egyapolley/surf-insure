import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const ExampleCustomInput = React.forwardRef(({ value, onClick,label }, ref) => (

    <>
        <label htmlFor="date">{label}</label>
        <input type="text" id="date" value={value} onClick={onClick} ref={ref} onChange={()=>{}}/>
    </>

));


function CustomDatePicker({onChange,selected,label}) {
    return <DatePicker onChange={onChange} selected={selected} customInput={<ExampleCustomInput label={label}/>}/>
}

export default CustomDatePicker;
