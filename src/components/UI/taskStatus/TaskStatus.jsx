import React from "react";
import './TaskStatus.sass';


export const TaskStatus = ({status}) => {

    let col, text;
    if(!status || status === 'opened') {
        col = 'default';
        text = 'Открыто';
    }
    if(status === 'inProgress') {
        col = 'yellow';
        text = 'В работе';
    };
    if (status === 'testing') {
        col = 'yellow';
        text = 'Тестируется';
    } 
    if(status === 'complete') {
        col = 'green';
        text = 'Сделано';
    }

    if(status === 'error') {
        col = 'red';
        text = 'Не сделано';
    }


    return(
        <div className={`status-${col}`}>
            {text}
        </div>
    )
}