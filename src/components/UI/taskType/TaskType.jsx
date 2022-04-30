import React from "react";
import "../_styles/TaskType.sass"


export const TaskType = ({type}) => {

    let col;
    if(type === 'task') col = '#00D1FF';
    if (type === 'bug') col = '#EB4F4F';

    return(
        <div className="square" style={{backgroundColor: col}}>
            <div className="square-circle" />
        </div>
    )
}