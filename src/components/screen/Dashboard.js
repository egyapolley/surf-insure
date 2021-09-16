import React, {useEffect, useState} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import classes from './Dashboard.module.css'
import FormGroup from "../UI/FormGroup";
import {Link} from "react-router-dom";

import {getData} from "../../data";
import Card from "../UI/Card";


function Dashboard(props) {

    const {deviceTypes} =props

    const today =new Date()
    const lastMonth =new Date().setMonth(today.getMonth()-2)

    const [startDate, setStartDate] =useState(today)
    const [endDate, setEndDate] =useState(lastMonth)

    const [data, setData] =useState([])
    const [selectedDev, onSelectDev] =useState("")


    useEffect(()=>{
        setData(getData)
    },[data])
    return (
        <div>
            <FormGroup
                setStartDate={setStartDate}
                startDate={startDate}
                endDate={endDate}
                selectOptions={deviceTypes}
                selectedDev={selectedDev}
                onSelectChange={onSelectDev}
                setEndDate={setEndDate}/>
            <div className={classes.content}>
                <div className={classes.card}>
                    <Card name="policy_sold"  value="2010"  label="POLICY SOLD"/>
                    <Link to="/policies">View Policies</Link>
                </div>

               <div className={classes.card}>
                   <Card name="policy_sold"  value="100,500"  label="REVENUE (GH&#8373;)"/>
                   <a href="">View Revenue</a>
               </div>
                <Card name="policy_sold"  value="63"  label="NO. OF CLAIMS"/>
                <Card name="policy_sold"  value="80,891"  label="PROFITS (GH&#8373;)"/>
                <Card name="policy_sold"  value="100,100"  label="PRODUCTS VALUE COVERED (GH&#8373;)"/>
            </div>
            <div className={classes.chart}>

            </div>


        </div>
    );
}

export default Dashboard;
