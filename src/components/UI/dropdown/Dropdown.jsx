import React, { useState } from "react";
import { Checkbox } from "../checkbox";
import './Dropdown.sass';
import '../../../_styles/style.sass'
import closedDropdown from '../../../_images/closedDropdown.svg';
import openedDropdown from '../../../_images/openedDropdown.svg';


export const Dropdown = ({children, dis, placeholder, name}) => {

    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState([]);

    let img;
    switch (opened) {
        case false:
            img = closedDropdown;
            break;
        case true:
            img = openedDropdown;
            break;
    }

    const handleOpen = () => {
        setOpened(!opened)
    }
    // console.log(opened)

    const handleChange = (value) => {
        let elNum = selected.indexOf(value);
        if(elNum !== -1) {
            setSelected(selected.filter(el => el !== value))
        }
        if(elNum === -1){
            setSelected([...selected, value])
        }

    }
    if(selected) console.log(selected)


    return(
        <div className={opened && 'dropdown'} onClick={handleOpen}>
            <div className="dropdown-label">
                <p>{name}</p>
                <img src={img} />
            </div>
            <div className={`dropdown-content ${!opened && 'hidden'}`} >
                {children.map(child => 
                    <Checkbox
                        handleChange={handleChange}
                        key={child.props.text}
                        text={child.props.text}
                    />
                )}
            </div>
        </div>
    )
}