import React from 'react';
import classes from './CustomTable.module.css'
import {Link} from "react-router-dom";

function CustomTable({data}) {


    const getClasses =status =>{
        let color =""
        switch (status){
            case "Active":
                color="darkgreen"
                break
            case "Expired":
                color="red"
                break
            case "Claimed":
                color="black"
                break
        }

        return color
    }






    return (
        <div className={classes.content}>
            <table>
                <thead>
                <tr>
                    <th>Device Type</th>
                    <th>Policy ID</th>
                    <th>Plan Length(Yr)</th>
                    <th>Date Issued</th>
                    <th>Date Expired</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map(item => <tr key={item.id}>
                        <td>{item.deviceType}</td>
                        <td><Link to={`/claims/${item.policyId}`}>{item.policyId}</Link></td>
                        <td>{item.planLength}</td>
                        <td>{item.dateIssued}</td>
                        <td>{item.dateExpired}</td>
                        <td style={{color:getClasses(item.status)}}>{item.status}</td>
                    </tr>)
                }

                </tbody>
            </table>

        </div>
    );
}

export default CustomTable;
