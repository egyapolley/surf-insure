import React, {useEffect, useState} from 'react';
import FormGroup from "../UI/FormGroup";
import {getData} from "../../data";
import CustomTable from "../UI/CustomTable";
import classes from './Policies.module.css'
import _ from 'lodash'

import Pagination from "../UI/Pagination";

const pageLength = 20

const paginate = (data, pageNumber, pageLength) => {
    const offset = (pageNumber - 1) * pageLength
    return data.slice(offset).slice(0, pageLength)
}


function Policies(props) {

    const {deviceTypes} = props

    const today = new Date()
    const lastMonth = new Date().setMonth(today.getMonth() - 2)

    const [startDate, setStartDate] = useState(today)
    const [endDate, setEndDate] = useState(lastMonth)
    const [selectedDev, onSelectDev] = useState("")
    const [data, setData] = useState([])

    const [claimId, setClaimId] =useState("")

    const [currentPage, setCurrentPage] = useState(1)

    const [sortColumn, setSortColumn] = useState({
        path: "dateIssued",
        orderBy: "asc"
    })

    const totalCount = data.length

    const handleClickSearch=()=>{

        if (!claimId) return
        const data=getData().filter(item=>item.policyId===claimId)
        setData(data)
    }


    useEffect(() => {
        setData(getData)
    }, [])



    const sortedData = _.orderBy(data, [sortColumn.path], sortColumn.orderBy)
    const paginatedData=paginate(sortedData,currentPage,pageLength)


    return (
        <div>
            <FormGroup
                setStartDate={setStartDate}
                startDate={startDate}
                endDate={endDate}
                selectedDev={selectedDev}
                onSelectChange={onSelectDev}
                claimId={claimId}
                onClickSearch={handleClickSearch}
                setClaimId={setClaimId}
                selectOptions={deviceTypes}
                setEndDate={setEndDate}/>
            <CustomTable data={paginatedData} onSort={setSortColumn} sortColumn={sortColumn}/>
            <div className={classes.paginateContainer}>
                {totalCount && <Pagination totalCount={totalCount} pageLength={pageLength} onClick={setCurrentPage}
                                           currentPage={currentPage}/>}
            </div>


        </div>
    );
}

export default Policies;
