import React from "react";
import './TaskStatus.sass';


export const TaskStatus = ({status}) => {

    let col, text;
    if(!status || status === 'open') {
        col = 'default';
        text = 'Открыто';
    }
    if(status === 'work') {
        col = 'yellow';
        text = 'В работе';
    };
    if (status === 'test') {
        col = 'yellow';
        text = 'Тестируется';
    } 
    if(status === 'done') {
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