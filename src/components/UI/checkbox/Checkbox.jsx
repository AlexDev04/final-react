import React, { useCallback, useState } from 'react';
import './Checkbox.sass'


export const Checkbox = ({className, text, valEn}) => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        console.log(clicked);
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
            />
            <label htmlFor={text} name={valEn}>{text}</label>
        </div>

    )
}