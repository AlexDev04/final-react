import { observer } from "mobx-react-lite";
import { action } from "mobx";
import React, { useEffect } from "react";
import { But, Dropdown, TaskHeader, TaskListItem, TextInput, Pager } from "../../components";
import "./TaskList.sass";
import { store } from "../../store";
import { useNavigate } from "react-router";


export const TaskList = observer(() => {

    const navigate = useNavigate()
    useEffect(() => {
        if(!store.authorized) {
            navigate('/auth')
        }
        store.data.tasks.all()
    }, [])

    console.log(store.tasks)

    console.log(store.authorized)

    return(
        <>
            <TaskHeader mode="taskList" />
            <main className="main taskList">
                <section className="taskList-sorting">
                    <Dropdown name="Тип" className="taskList-sorting-type">
                        <div>Задача</div>
                        <div>Баг</div>
                    </Dropdown>
                    <TextInput
                        placeholder="Название задачи"
                        type="primary"
                        className="taskList-sorting-name" />
                    <Dropdown name="Пользователь" className="taskList-sorting-username">
                        <div>Малыш Грут</div>
                    </Dropdown>
                    <Dropdown name="Статус" className="taskList-sorting-status">
                        <div>Открыто</div>
                        <div>В работе</div>
                        <div>Тестируется</div>
                    </Dropdown>
                    <Dropdown name="Приоритет" className="taskList-sorting-priority">
                        <div>Высокий</div>
                        <div>Средний</div>
                        <div>Низкий</div>
                    </Dropdown>
                    <But type="primary" className="taskList-sorting-apply">Применить</But>
                </section>
                <section className="taskList-list">

                    { store.tasks.map(el =>
                    <TaskListItem
                        type={el.type}
                        taskName={el.title}
                        userName={el.userId}
                        status={el.status}
                        rank={el.rank}
                        more
                    />)
                    }

                </section>
                <Pager className="taskList-pager" />
            </main>
        </>
    )
})