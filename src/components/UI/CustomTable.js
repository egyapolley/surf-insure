import React from 'react';
import classes from './CustomTable.module.css'
import {Link} from "react-router-dom";


function CustomTable({data,onSort,sortColumn}) {


    const getClasses =status =>{
        let color =""
        // eslint-disable-next-line default-case
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

    const handleSort =column=>{
        // eslint-disable-next-line no-use-before-define
        const sortColumnTemp = {...sortColumn}

            if (column ===sortColumnTemp.path ){
                sortColumnTemp.orderBy = sortColumnTemp.orderBy ==='asc'?"desc":"asc"
            }else {
                sortColumnTemp.path = column
                sortColumnTemp.orderBy="asc"
            }
           onSort(sortColumnTemp)


    }

    const displaySortImage =(column) =>{
        const {path, orderBy} = sortColumn
        if (column ===path){
            if (orderBy === 'asc'){
                return <i class="fas fa-sort-up sort"/>
            }else {
                return <i className="fas fa-sort-down sort"/>
            }
        }

    }






    return (
        <div className={classes.content}>
            <table>
                <thead>
                <tr>
                    <th onClick={()=>handleSort("deviceType")}>Device Type {displaySortImage("deviceType")}</th>
                    <th onClick={()=>handleSort("policyId")}>Policy ID {displaySortImage("policyId")}</th>
                    <th onClick={()=>handleSort("planLength")}>Plan Length(Yr) {displaySortImage("planLength")}</th>
                    <th onClick={()=>handleSort("dateIssued")}>Date Issued {displaySortImage("dateIssued")}</th>
                    <th onClick={()=>handleSort("dateExpired")}>Date Expired {displaySortImage("dateExpired")}</th>
                    <th onClick={()=>handleSort("status")}>Status {displaySortImage("status")}</th>
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
