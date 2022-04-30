import React from "react";
import './TaskRank.sass'
import low from '../../../_images/low.svg';
import mid from '../../../_images/mid.svg';
import high from '../../../_images/high.svg';

export const TaskRank = ({rank}) => {

    let img;
    switch (rank) {
        case 'low':
            img = low;
            break;
        case 'mid':
            img = mid;
            break;
        case 'high':
            img = high;
            break;
    }

    return(
        <div className={`rank-${rank}`}>
            <img src={img} />
            <p>{rank}</p>
        </div>
    )
}