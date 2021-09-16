import React from 'react';

function Logo(props) {

    const style = {
        letterSpacing:4,
        color:"#156be3",
        textAlign:"center",
        marginBottom:"15px",
        userSelect:"none",
        textShadow:"3px 0 #fff"

    }

    return (
        <h1 style={style}>
            KERRLY
        </h1>
    );
}

export default Logo;
