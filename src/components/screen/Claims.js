import React, {useEffect, useState} from 'react';
import FormGroup from "../UI/FormGroup";
import classes from './Claim.module.css'
import mifiHuawei from '../../assets/huawei_mifi.png'
import routerHuawei from '../../assets/huawei_router.png'
import odu from '../../assets/odu.png'
import {getData} from "../../data";



function Claims(props) {


    const [startDate, setStartDate] = useState(new Date())
    const [data, setData] = useState(null)

    const {id:policyId} =props.match.params



    const getImageSrc=(deviceType) =>{
        if (deviceType.toLowerCase().includes("mi-fi")) return mifiHuawei
        if (deviceType.toLowerCase().includes("router")) return routerHuawei
        if (deviceType.toLowerCase().includes("odu")) return odu
        return  mifiHuawei
    }

    useEffect(()=>{
        if (policyId){
            const data =getData().find(item =>item.policyId === policyId)
            setData(data)
        }
    },[policyId])


    return (
        <div>
            <FormGroup setStartDate={setStartDate} startDate={startDate}/>
            {data &&  <div className={classes.container}>
                <div className={classes.content}>
                    <div className={classes.imgContainer}>
                        <img src={getImageSrc(data.deviceType)} alt=""/>
                    </div>
                    <div className={classes.middle}>
                        <span>{data.deviceType}</span>
                        <span><span style={{marginRight: "2px", color: "darkgreen", fontWeight: "bold"}}>{data.status}</span>|Expires: {data.dateExpired}</span>
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
                        <div className={classes.spanGroup}>
                            <span>Plan length:</span>
                            <span>{data.planLength}Yr</span>
                        </div>
                        <div className={classes.spanGroup}>
                            <span>Plan:</span>
                            <span>GH&#8373; {data.plan}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <button>Submit Claim</button>
                </div>
            </div>}


        </div>
    );
}

export default Claims;