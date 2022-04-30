import React, { useState } from "react";
import '../_styles/Dropdown.sass'


export const Dropdown = ({children, dis, hiddenTxt}) => {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    console.log(open)

    return(
        <div className={`dropdown ${open && 'dropdown-open'}`}>
            <select
                disabled={dis} 
                className="dropdown-select" 
                defaultValue={hiddenTxt} 
                onClick={handleClick}
            >
                <option disabled>{hiddenTxt}</option>
                {children}
            </select>
        </div>
    )
}