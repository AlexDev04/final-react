import React, { useState, useEffect } from "react";
import { But, TaskStatus } from "../";
import { useNavigate } from "react-router"
import './TaskHeader.sass';
import { store } from "../../store";


export const TaskHeader = ({mode, primaryBut, id}) => {

    console.log(id)
    
    const navigate = useNavigate();

    const [task, setTask] = useState({});

    useEffect(() => {
        setTask(store.openedTask);
        console.log(task.status)
    }, [store.openedTask])

    let changeStatusText;
    const handleChangeStatus = () => {
        console.log(`status is ${task.status}`);
        switch(task.status) {
            case 'opened':
                store.data.tasks.changeStatus(task.id, 'inProgress');
                store.data.tasks.id(id);
                break;
            case 'inProgress':
                store.data.tasks.changeStatus(task.id, 'testing');
                store.data.tasks.id(id);
                break;
            case 'testing':
                store.data.tasks.changeStatus(task.id, 'complete');
                store.data.tasks.id(id);
                break;
            case 'complete':
                store.data.tasks.changeStatus(task.id, 'opened');
                store.data.tasks.id(id);
                break;
        }
    }

    switch(task.status) {
        case 'opened':
            changeStatusText = 'Взять в работу';
            break;
        case 'inProgress':
            changeStatusText = 'Отправить на тестирование';
            break;
        case 'testing':
            changeStatusText = 'Завершить';
            break;
        case 'complete':
            changeStatusText = 'Переоткрыть';
            break;
    }

        return(
            <section className="taskHeader">
                {mode === 'taskList' && 
                    <>
                        <div>
                            <h2>Задачи</h2>
                        </div>
                        <div>
                            <But type="primary" onClick={() => navigate('/tasks/create')}>Добавить задачу</But>
                        </div>
                    </>
                }

                {mode === 'edit' &&
                    <>
                        <div>
                            <h2>Редактирование</h2>
                        </div>
                        <div>
                            <But type="primary" onClick={primaryBut}>Сохранить</But>
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
                            <But type="primary" onClick={primaryBut}>Сохранить</But>
                            <But type="default">Отмена</But>
                        </div>
                    </>
                }

                {mode === 'task' &&
                    <>
                        <div>
                            <h2>{task.title}</h2>
                            <TaskStatus status={task.status} />
                        </div>
                        <div>
                            <But type="default" onClick={handleChangeStatus}>{changeStatusText}</But>
                            <But type="primary" onClick={() => navigate(`/tasks/edit/${task.id}`)}>Редактировать</But>
                            <But type="error">Удалить</But>
                        </div>
                    </>
                }
            </section>
        )
}