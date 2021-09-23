import React, {useEffect, useState} from 'react';
import FormGroup from "../UI/FormGroup";
import classes from './Claim.module.css'
import mifiHuawei from '../../assets/huawei_mifi.png'
import routerHuawei from '../../assets/huawei_router.png'
import odu from '../../assets/odu.png'
import {getData} from "../../data";
import httpService from "../../services/httpService";
import {values} from "lodash";
import ProgressBar from "../UI/ProgressBar";


function Claims(props) {

    let {searchOptions} = props

    searchOptions = searchOptions.filter(item  =>item.value === 'policyId'||item.value ==='deviceImei')


    const [data, setData] = useState(null)
    const [searchparam, setSearchparam] = useState(searchOptions[0].value)

    const [searchValue, setSearchValue] = useState("")

    const [showProgress, setProgress] = useState(false)

    const {id: policyId} = props.match.params


    const getImageSrc = (deviceType) => {
        if (deviceType.toLowerCase().includes("mi-fi")) return mifiHuawei
        if (deviceType.toLowerCase().includes("router")) return routerHuawei
        if (deviceType.toLowerCase().includes("odu")) return odu
        return mifiHuawei
    }

    const fetchPolicy = async (searchparam, value) => {
        try {
            setProgress(true)
            const {data} = await httpService.get("/policy", {
                params: {searchparam, value}
            })

            if (data.status === 0) {
                setData(data.data)
            }
        } catch (ex) {
        } finally {
            setProgress(false)

        }


    }

    const handleClickSearch = async () => {
        console.log(searchparam,searchValue)

        if (!searchValue) return

        await fetchPolicy(searchparam,searchValue)

    }

    const handleSubmitClaim = async () => {
        const policyId = data.policyId
        try {
            setProgress(true)
            const {data: result} = await httpService.post("/policy_claim", {policyId})
            if (result.status === 0) {
                setData(result.data)

            }
        } catch (ex) {
            console.log(ex)
        } finally {
            setProgress(false)
        }


    }


    useEffect(() => {
        if (policyId) {
            fetchPolicy('policyId',policyId)
        }
    }, [policyId])


    return (
        <div>
            <FormGroup
                selectOptions={searchOptions}
                selectedDev={searchparam}
                onSelectChange={setSearchparam}
                claimId={searchValue}
                onClickSearch={handleClickSearch}
                setClaimId={setSearchValue}/>
            <ProgressBar showProgress={showProgress}/>
            {data && <div className={classes.container}>
                <div className={classes.content}>
                    <div className={classes.imgContainer}>
                        <img src={getImageSrc(data.deviceType)} alt=""/>
                    </div>
                    <div className={classes.middle}>
                        <span>{data.deviceType}</span>
                        <span><span style={{
                            marginRight: "2px",
                            color: "darkgreen",
                            fontWeight: "bold"
                        }}>{data.status}</span>|Expires: {data.dateExpired}</span>
                    </div>
                    <div>
                        <div className={classes.spanGroup}>
                            <span>Policy ID:</span>
                            <span>{data.policyId}</span>
                        </div>
                        <div className={classes.spanGroup}>
                            <span>Date issued:</span>
                            <span>{data.dateIssued}</span>
                        </div>
                        {data.dateClaimed &&    <div className={classes.spanGroup}>
                            <span>Date Claimed:</span>
                            <span>{data.dateClaimed}</span>
                        </div>}
                        <div className={classes.spanGroup}>
                            <span>Plan:</span>
                            <span>{data.planId}Yr</span>
                        </div>
                        <div className={classes.spanGroup}>
                            <span>Plan Cost:</span>
                            <span>GH&#8373; {data.cost}</span>
                        </div>
                    </div>
                </div>
                <div>
                    {data.status === "Active" && <button onClick={handleSubmitClaim}>Submit Claim</button>}

                </div>
            </div>}


        </div>
    );
}

export default Claims;
