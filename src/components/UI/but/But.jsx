import React from "react";
import'./But.sass';


export const But = ({type, children, dis, onClick}) => {

    if(type === undefined) type = 'default'
    if(dis) type = 'disabled'
    return(
        <button 
            className={`but-${type}`} 
            disabled={dis}
            onClick={onClick}
        >
            {children}
        </button>
    )
}