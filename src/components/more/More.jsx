import React, { useState } from "react";
import "./More.sass"

export const More = ({className}) => {

    const [open, setOpen] = useState(false)

    const handleHover = () => {
        console.log('hover')
        setOpen(true)
    }
    const handleout = () => {
        console.log('out')
        setOpen(false)
    }

    return (
        <div className={`${className} more`}>
            <div
                className="more-icon"
                onMouseOver={handleHover} 
                onMouseOut={handleout}
            >
            </div>
            <div className="more-content">
                <div>Редактировать</div>
                <div className="more-content-delete">Удалить</div>
                <div>Взять в работу</div>
                <div>На тестирование</div>
                <div>Переоткрыть</div>
                <div>Сделано</div>
            </div>
        </div>

    )
}