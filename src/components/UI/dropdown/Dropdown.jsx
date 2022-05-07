import React, { useState } from "react";
import './Dropdown.sass';
import '../../../_styles/style.sass'
import closedDropdown from '../../../_images/closedDropdown.svg';
import openedDropdown from '../../../_images/openedDropdown.svg';


export const Dropdown = ({children, name, dis, className, val}) => {

    const ChildrenEl = () => 
        React.Children.map(children, child => 
            React.cloneElement(child, {
                className: `${child.props.className} dropdown-content-el ${selected !== undefined? child.props.children === selected && 'dropdown-content-el-active': ''}`

            })
        );

    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState(val);

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
        if(!dis)setOpened(!opened)
    }
    // console.log(opened)

    const handleChange = (evt) => {
        if(!dis)setSelected(evt.target.innerHTML)
        console.log(evt.target.innerHTML)
    }
    console.log(selected)

    return(
        <div className={`dropdown-outer ${className}`}  >
            <div className={`${opened && 'dropdown'} ${dis && 'dropdown-dis'}`} onClick={handleOpen}>
                <div className={`${!dis && 'dropdown-label'} ${opened && 'dropdown-label-active'} ${selected && 'dropdown-label-active'}`}>
                    <p>{selected || name}</p>
                    {!dis && <img src={img} />}
                </div>
                <div className={`dropdown-content ${!opened && 'hidden'}`} onClick={handleChange}>
                    <ChildrenEl />
                </div>
            </div>
        </div>
    )
}