import React from "react";
import'./But.sass';


export const But = ({type, children}) => {

    let dis;
    type === 'disabled'? dis = true: dis = false;

    return(
        <button className={`but-${type}`} disabled={dis}>{children}</button>
    )
}