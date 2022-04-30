import React, { useState } from "react";
import './Dropdown.sass';
import '../../../_styles/style.sass'
import closedDropdown from '../../../_images/closedDropdown.svg';
import openedDropdown from '../../../_images/openedDropdown.svg';


export const Dropdown = ({children, dis, placeholder, name}) => {

    const ChildrenEl = () => 
        React.Children.map(children, child => 
            React.cloneElement(child, {
                className: `${child.props.className} dropdown-content-el ${selected !== undefined? child.props.children === selected && 'dropdown-content-el-active': ''}`

            })
        );

    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState();

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

    const handleChange = (evt) => {
        setSelected(evt.target.innerHTML)
        console.log(evt.target.innerHTML)
    }
    console.log(selected)

    return(
        <div className={opened && 'dropdown'} onClick={handleOpen}>
            <div className="dropdown-label">
                <p>{name}</p>
                <img src={img} />
            </div>
            <div className={`dropdown-content ${!opened && 'hidden'}`} onClick={handleChange}>
                <ChildrenEl />
            </div>
        </div>
    )
}