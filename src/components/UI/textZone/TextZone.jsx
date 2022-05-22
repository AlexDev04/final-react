import React, { useState, useEffect } from "react";
import './TextZone.sass';


export const TextZone = ({type, placeholder, children, updateData}) => {

    let dis;
    type === 'disabled'? dis = true: dis = false;

    if(children === undefined) children = '';

    const [text, setText] = useState(children)

    useEffect(() => {
        setText(children)
    })

    const handleChange = (evt) => {
        evt.preventDefault();
        setText(evt.target.value);
        evt.target.focus();
        updateData(evt.target.value)
    }

    return(
        <textarea 
            className={`textZone-${type}`}
            value={text}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={dis}
            required
        />
    )
}