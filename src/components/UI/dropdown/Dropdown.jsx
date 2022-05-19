import React, { useEffect, useState, useReducer } from "react";
import './Dropdown.sass';
import '../../../_styles/style.sass'
import closedDropdown from '../../../_images/closedDropdown.svg';
import openedDropdown from '../../../_images/openedDropdown.svg';


export const Dropdown = ({children, name, dis, className, val, valEn, id, updateData}) => {

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState({ru: '', en: ''});

    useEffect(() => {
        setSelected({ru: '', en: ''});
        console.log(val, valEn, id);
        setSelected({ru: val , en: valEn, id: id})
    })

    // useEffect(() => setSelected({ru: val , en: valEn, id: id}), [val, valEn, id])

    const ChildrenEl = () => 
        React.Children.map(children, child => 
            React.cloneElement(child, {
                className: `${child.props.className} dropdown-content-el ${selected !== undefined? child.props.children === selected.ru && 'dropdown-content-el-active': ''}`
            })
        );

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

    const handleChange = (evt) => {
        if(!dis)setSelected({ru: evt.target.innerHTML, en: evt.target.getAttribute('name'), id: evt.target.id})
        console.log({ru: evt.target.innerHTML, en: evt.target.getAttribute('name'), id: evt.target.id})
        console.log(selected.id)
        console.log(evt.target.innerHTML, evt.target.id)
        if(evt.target.id !== '') updateData(evt.target.innerHTML, evt.target.id)
        else if(evt.target.id === '') updateData(evt.target.getAttribute('name'))
    }
    console.log(selected)

    return(
        <div className={`dropdown-outer ${className}`}  >
            <div className={`${opened && 'dropdown'} ${dis && 'dropdown-dis'}`} onClick={handleOpen}>
                <div className={`${!dis && 'dropdown-label'} ${opened && 'dropdown-label-active'} ${selected && 'dropdown-label-active'}`}>
                    <p>{selected.ru || name}</p>
                    {!dis && <img src={img} />}
                </div>
                <div className={`dropdown-content ${!opened && 'hidden'}`} onClick={handleChange}>
                    <ChildrenEl />
                </div>
            </div>
        </div>
    )
}