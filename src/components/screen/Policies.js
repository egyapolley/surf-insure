import React, {useEffect, useState} from 'react';
import FormGroup from "../UI/FormGroup";
import {getData} from "../../data";
import CustomTable from "../UI/CustomTable";
import  _ from 'lodash'



function Policies(props) {

    const {deviceTypes} =props

    const today =new Date()
    const lastMonth =new Date().setMonth(today.getMonth()-2)

    const [startDate, setStartDate] =useState(today)
    const [endDate, setEndDate] =useState(lastMonth)

    const [selectedDev, onSelectDev] =useState("")

    const [data, setData] =useState([])

    const [sortColumn, setSortColumn] = useState({
        path: "dateIssued",
        orderBy: "asc"
    })




    useEffect(()=>{
        setData(getData)
    },[data])

    const sortedData = _.orderBy(data,[sortColumn.path],sortColumn.orderBy)

    return (
        <div>
            <FormGroup
                setStartDate={setStartDate}
                startDate={startDate}
                endDate={endDate}
                selectedDev={selectedDev}
                onSelectChange={onSelectDev}
                selectOptions={deviceTypes}
                setEndDate={setEndDate}/>
            <CustomTable data={sortedData} onSort={setSortColumn} sortColumn={sortColumn}/>

        </div>
    );
}

export default Policies;
