import React from "react";
import './TextInput.sass';


export const TextInput = ({col, placeholder, disabled = false, children}) => {

    return(
        <input 
            className={`textInput-${col}`}
            value={children} 
            placeholder={placeholder}
            required
        />
    )
}