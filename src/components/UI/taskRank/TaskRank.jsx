import React from "react";
import './TaskRank.sass'
import low from '../../../_images/low.svg';
import mid from '../../../_images/mid.svg';
import high from '../../../_images/high.svg';

export const TaskRank = ({rank}) => {

    let img, txt;
    switch (rank) {
        case 'low':
            img = low;
            txt = 'Низкий';
            break;
        case 'medium':
            img = mid;
            txt = 'Средний';
            break;
        case 'high':
            img = high;
            txt = 'Высокий';
            break;
    }

    return(
        <div className={`rank-${rank}`}>
            <img src={img} />
            <p>{txt}</p>
        </div>
    )
}