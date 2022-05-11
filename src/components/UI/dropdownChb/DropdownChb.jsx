import React, { useEffect, useState } from "react";
import { Checkbox } from "../checkbox";
import './DropdownChb.sass';
import '../../../_styles/style.sass'
import closedDropdown from '../../../_images/closedDropdown.svg';
import openedDropdown from '../../../_images/openedDropdown.svg';


export const DropdownChb = ({children, dis, placeholder, name, className, updateData}) => {

    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState([]);

    console.log(children)

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
        console.log(value)
        let elNum = selected.indexOf(value);
        if(elNum !== -1) {
            setSelected(selected.filter(el => el !== value))
        }
        if(elNum === -1){
            setSelected([...selected, value])
        }
    }

    useEffect(() => {
        console.log(selected);
        // updateData(selected)
    }, [selected])



    return(
        <div className={`dropdownChb-outer ${className}`}>
            <div className={`${opened && 'dropdownChb'} ${dis && 'dropdownChb-dis'}`}>
                <div className={!dis && 'dropdownChb-label'} onClick={handleOpen}>
                    <p>{name}</p>
                    {!dis && <img src={img} />}
                </div>
                <div className={`dropdownChb-content ${!opened && 'hidden'}`} onClick={evt => handleChange(evt.target.getAttribute('name'))}>
                    {children.map(el => <Checkbox className="dropdownChb-content-el" text={el.props.text} />)}
                </div>
            </div>
        </div>

    )
}