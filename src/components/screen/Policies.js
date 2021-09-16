import React, {useEffect, useState} from 'react';
import FormGroup from "../UI/FormGroup";
import classes from "./Policies.module.css";
import {getData} from "../../data";
import {Link} from "react-router-dom";
import CustomTable from "../UI/CustomTable";


function Policies(props) {
    const [startDate, setStartDate] =useState(new Date())

    const [data, setData] =useState([])



    useEffect(()=>{
        setData(getData)
    },[data])

    return (
        <div>
            <FormGroup setStartDate={setStartDate} startDate={startDate}/>
            <CustomTable data={data} />

        </div>
    );
}

export default Policies;
