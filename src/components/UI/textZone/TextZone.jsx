import React, { useState } from "react";
import './TextZone.sass';


export const TextZone = ({type, placeholder, children}) => {

    let dis;
    type === 'disabled'? dis = true: dis = false;

    if(children === undefined) children = '';

    const [text, setText] = useState(children)

    const handleChange = (evt) => {
        evt.preventDefault();
        setText(evt.target.value);
        evt.target.focus();
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