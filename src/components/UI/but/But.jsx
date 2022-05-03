import React from "react";
import { useNavigate } from "react-router";
import'./But.sass';


export const But = ({type, children, dis, addTask}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        console.log('click')
        if(addTask) navigate('/tasks/create')
    }

    if(type === undefined) type = 'default'
    return(
        <button 
            className={`but-${type}`} 
            disabled={dis}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}