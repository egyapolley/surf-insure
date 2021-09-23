import React from 'react';
import classes from './Pagination.module.css'
import _ from 'lodash'

function Pagination(props) {
    const {onClick,currentPage,totalCount,pageLength}=props
    const numOfPages=Math.ceil(totalCount/pageLength)
    if (numOfPages<=1) return null

    const pages = _.range(1,numOfPages+1)
    console.log("pages", pages)


    return (
        <div className={classes.container}>
            {pages.map(page => <span key={page}
                                     onClick={() => onClick(page)}
                                     className={page === currentPage?classes.active:""}>{page}</span>)}
        </div>
    );
}

export default Pagination;
