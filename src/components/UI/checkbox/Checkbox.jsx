import React, { useState } from 'react';
import './Checkbox.sass'


export const Checkbox = ({className, text, ticked, handleChange}) => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return(
        <div 
            className={`checkbox ${className}`}
            text={text}
            name={text}
            onClick={() => {
                handleChange(text);
                setClicked(!clicked)
            }}
        >
            <input
                type="checkbox" 
                name={text} 
                checked={clicked}
            />
            <label htmlFor={text}>{text}</label>
        </div>

    )
}