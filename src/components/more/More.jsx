import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./More.sass"

export const More = ({className, id}) => {

    const navigate = useNavigate();

    const [open, setOpen] = useState(false)

    const handleHover = () => {
        console.log('hover')
        setOpen(true)
    }
    const handleout = () => {
        console.log('out')
        setOpen(false)
    }

    const handleEdit = (id) => {
        navigate(`/tasks/edit/${id}`)
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
                <div onClick={handleEdit}>Редактировать</div>
                <div className="more-content-delete">Удалить</div>
                <div>Взять в работу</div>
                <div>На тестирование</div>
                <div>Переоткрыть</div>
                <div>Сделано</div>
            </div>
        </div>

    )
}