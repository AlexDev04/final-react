import React from "react";
import { But, TaskStatus } from "../";
import './TaskHeader.sass'


export const TaskHeader = ({mode}) => {

    console.log(mode)

        return(
            <section className="taskHeader">
                {mode === 'taskList' && 
                    <>
                        <div>
                            <h2>Задачи</h2>
                        </div>
                        <div>
                            <But type="primary" addTask>Добавить задачу</But>
                        </div>
                    </>
                }

                {mode === 'edit' &&
                    <>
                        <div>
                            <h2>Редактирование</h2>
                        </div>
                        <div>
                            <But type="primary">Сохранить</But>
                            <But type="default">Отмена</But>
                        </div>
                    </>
                }
                {mode === 'create' &&
                    <>
                        <div>
                            <h2>Создание</h2>
                        </div>
                        <div>
                            <But type="primary">Сохранить</But>
                            <But type="default">Отмена</But>
                        </div>
                    </>
                }

                {mode === 'task' &&
                    <>
                        <div>
                            <h2>Задача 1. Делаем дела</h2>
                            <TaskStatus status="open" />
                        </div>
                        <div>
                            <But type="default">Взять в работу</But>
                            <But type="primary">Редактировать</But>
                            <But type="error">Удалить</But>
                        </div>
                    </>
                }
            </section>
        )
}