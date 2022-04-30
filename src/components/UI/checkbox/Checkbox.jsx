import React, { useState } from 'react';
import './Checkbox.sass'


export const Checkbox = ({text, className, ticked, handleChange}) => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return(
        <div 
            className={`${className} checkbox`} 
            text={text}
            name={text}
            onClick={() => {
                handleChange(text);
                setClicked(!clicked)
            }}
        >
            <input type="checkbox" name={text} checked={clicked}></input>
            <label htmlFor={text}>{text}</label>
        </div>

    )
}