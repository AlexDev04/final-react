import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./More.sass"
import { store } from "../../store";

export const More = ({className, id, mode}) => {
    
    console.log(mode)

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

    const handleEdit = () => {
        navigate(`/tasks/edit/${id}`)
    }

    const handleInWork = () => {
        store.data.tasks.changeStatus(id, 'inProgress')
    }

    const handleTest = () => {
        store.data.tasks.changeStatus(id, 'testing')
    }

    const handleReOpen = () => {
        store.data.tasks.changeStatus(id, 'opened')
    }

    const handleComplete = () => {
        store.data.tasks.changeStatus(id, 'complete')
    }

    const handleDelete = () => {
        store.data.tasks.delete(id)
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
                <div className="more-content-delete" onClick={handleDelete}>Удалить</div>
                {mode === 'opened' &&
                <>
                    <div onClick={handleInWork}>Взять в работу</div>
                    <div onClick={handleComplete}>Сделано</div>
                </>
                }
                {mode === 'inProgress' && 
                <>
                    <div onClick={handleTest}>На тестирование</div>
                    <div onClick={handleReOpen}>Переоткрыть</div>
                    <div onClick={handleComplete}>Сделано</div>
                </>
                }
                {mode === 'testing' && 
                <>
                    <div onClick={handleReOpen}>Переоткрыть</div>
                    <div onClick={handleComplete}>Сделано</div>
                </>
                }
                {mode === 'complete' && 
                    <div onCLick={handleReOpen}>Переоткрыть</div>
                }



            </div>
        </div>

    )
}