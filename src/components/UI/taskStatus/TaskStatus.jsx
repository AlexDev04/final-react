import React from "react";
import '../_styles/TaskStatus.sass';


export const TaskStatus = ({status}) => {

    let col, text;
    if(!status || status === 'none') {
        col = 'default';
        text = 'Нет данных';
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