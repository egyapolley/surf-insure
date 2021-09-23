import React, {useEffect, useState} from 'react';
import FormGroup from "../UI/FormGroup";
import {getData} from "../../data";
import CustomTable from "../UI/CustomTable";
import classes from './Policies.module.css'
import _ from 'lodash'

import Pagination from "../UI/Pagination";
import httpService from "../../services/httpService";
import Refresh from "../UI/Refresh";
import ProgressBar from "../UI/ProgressBar";

const pageLength = 20

const paginate = (data, pageNumber, pageLength) => {
    const offset = (pageNumber - 1) * pageLength
    return data.slice(offset).slice(0, pageLength)
}


function Policies(props) {

    const {searchOptions} = props



    const [data, setData] = useState([])

    const [searchparam, setSearchparam] = useState(searchOptions[0].value)
    const [searchValue, setSearchValue] = useState("")



    const [currentPage, setCurrentPage] = useState(1)

    const [sortColumn, setSortColumn] = useState({
        path: "dateIssued",
        orderBy: "asc"
    })

    const [showProgress, setProgress] = useState(false)


    const totalCount = data.length

    const handleClickSearch=async ()=>{

        console.log(searchValue,searchparam)
        if (!searchValue) return
        const {data} = await httpService.get("/policy", {
            params:{
                searchparam,
                value:searchValue
            }
        })
        if (data.status ===0){
            const{data:result} =data
            if (Array.isArray(result)){
                setData(result)
            }else {
                setData([result])
            }
        }



    }


    const fetchPolicies = async () =>{
        setProgress(true)
        try {
            const {data} = await httpService.get("/policies")
            if (data.status === 0) {
                let {data: result} = data
                setData(result)
            }
        } catch (ex) {
            console.log(ex)
        } finally {
            setProgress(false)
        }

    }






    useEffect(() => {
        fetchPolicies()

    }, [])


    const onRefresh =async () =>{
        await fetchPolicies()
    }



    const sortedData = _.orderBy(data, [sortColumn.path], sortColumn.orderBy)
    const paginatedData=paginate(sortedData,currentPage,pageLength)


    return (
        <div>
            <FormGroup
                selectedDev={searchparam}
                onSelectChange={setSearchparam}
                claimId={searchValue}
                onClickSearch={handleClickSearch}
                setClaimId={setSearchValue}
                selectOptions={searchOptions}/>
            <Refresh onClick={onRefresh}/>
            <ProgressBar showProgress={showProgress}/>
            <CustomTable data={paginatedData} onSort={setSortColumn} sortColumn={sortColumn}/>
            <div className={classes.paginateContainer}>
                {totalCount > 0 && <Pagination totalCount={totalCount} pageLength={pageLength} onClick={setCurrentPage}
                                           currentPage={currentPage}/>}
            </div>


        </div>
    );
}

export default Policies;
