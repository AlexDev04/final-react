import React from "react";
import { useParams } from "react-router-dom";
import { But, TaskStatus } from "../";
import './TaskHeader.sass'


export const TaskHeader = () => {

    const { id } = useParams();
    console.log(id)

    return(
        <section className="taskHeader">
            <div>
                <h2>Задача 1. Делаем дела</h2>
                <TaskStatus status="open" />
            </div>
            <div>
                <But type="default">Взять в работу</But>
                <But type="primary">Редактировать</But>
                <But type="error">Удалить</But>
            </div>
        </section>
    )
}