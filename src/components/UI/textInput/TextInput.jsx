import React, { useState } from "react";
import './TextInput.sass';


export const TextInput = ({type, placeholder, children, className, updateData, info}) => {

    let dis;
    type === 'disabled'? dis = true: dis = false;

    if(children === undefined) children = '';

    const [text, setText] = useState(children)

    const handleChange = (evt) => {
        evt.preventDefault();
        setText(evt.target.value);
        evt.target.focus();
        updateData(evt.target.value)
    }

    return(
        <input 
            className={`textInput-${type} ${className}`}
            value={text}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={dis}
            type={info}
            required
        />
    )
}