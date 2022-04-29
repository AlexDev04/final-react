import React, { useState } from "react";
import '../_styles/TextZone.sass';


export const TextZone = ({col, placeholder, children}) => {

    let dis;
    col === 'disabled'? dis = true: dis = false;

    if(children === undefined) children = '';

    const [text, setText] = useState(children)

    const handleChange = (evt) => {
        evt.preventDefault();
        setText(evt.target.value);
        evt.target.focus();
    }

    return(
        <textarea 
            className={`textArea-${col}`}
            value={text}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={dis}
            required
        />
    )
}