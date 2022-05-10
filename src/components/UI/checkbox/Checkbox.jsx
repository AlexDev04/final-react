import React, { useState } from 'react';
import './Checkbox.sass'


export const Checkbox = ({className, text, valEn}) => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked);
        console.log(clicked)
    }

    return(
        <div 
            className={`checkbox ${className}`}
            text={text}
            name={valEn}
            onClick={handleClick}
        >
            <input
                type="checkbox" 
                name={valEn} 
                checked={clicked}
                onChange={handleClick}
            />
            <label htmlFor={text} name={valEn}>{text}</label>
        </div>

    )
}