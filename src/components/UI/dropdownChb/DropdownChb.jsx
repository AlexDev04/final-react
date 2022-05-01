import React, { useState } from "react";
import { Checkbox } from "../checkbox";
import './DropdownChb.sass';
import '../../../_styles/style.sass'
import closedDropdown from '../../../_images/closedDropdown.svg';
import openedDropdown from '../../../_images/openedDropdown.svg';


export const DropdownChb = ({children, dis, placeholder, name}) => {

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
        if(!dis) setOpened(!opened)
    }

    const handleChange = (value) => {
        let elNum = selected.indexOf(value);
        if(elNum !== -1) {
            setSelected(selected.filter(el => el !== value))
        }
        if(elNum === -1){
            setSelected([...selected, value])
        }

    }
    console.log(selected)


    return(
        <div className={`${opened && 'dropdownChb'} ${dis && 'dropdownChb-dis'}`}>
            <div className={!dis && 'dropdownChb-label'} onClick={handleOpen}>
                <p>{name}</p>
                {!dis && <img src={img} />}
            </div>
            <div className={`dropdownChb-content ${!opened && 'hidden'}`} >
                {children.map(child => 
                    <Checkbox
                        className="dropdownChb-content-el"
                        handleChange={handleChange}
                        key={child.props.text}
                        text={child.props.text}
                    />
                )}
            </div>
        </div>
    )
}