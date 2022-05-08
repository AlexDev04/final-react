import React, { useState, useEffect } from "react";
import { But, TaskStatus } from "../";
import { useNavigate } from "react-router"
import './TaskHeader.sass';
import { store } from "../../store";


export const TaskHeader = ({mode, primaryBut}) => {

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
                console.log(changeStatusText)
                changeStatusText = 'Взять в работу';
                store.data.tasks.changeStatus(task.id, 'inProgress');
                break;
            case 'inProgress':
                changeStatusText = 'Отправить на тестирование';
                console.log(changeStatusText)
                store.data.tasks.changeStatus(task.id, 'testing');
                break;
            case 'testing':
                console.log(changeStatusText)
                changeStatusText = 'Завершить';
                store.data.tasks.changeStatus(task.id, 'completed');
                break;
            default: 
                alert('hi');
                break;
        }

    }

    const navigate = useNavigate();

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
                            <But type="default" onClick={() => handleChangeStatus}>{changeStatusText}</But>
                            <But type="primary" onClick={() => navigate(`/tasks/edit/${task.id}`)}>Редактировать</But>
                            <But type="error">Удалить</But>
                        </div>
                    </>
                }
            </section>
        )
}