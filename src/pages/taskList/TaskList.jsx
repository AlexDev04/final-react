import { observer } from "mobx-react-lite";
import { action } from "mobx";
import React, { useEffect, useState } from "react";
import { But, DropdownChb, Checkbox, TaskHeader, TaskListItem, TextInput, Pager } from "../../components";
import "./TaskList.sass";
import { store } from "../../store";
import { useNavigate } from "react-router";


export const TaskList = observer(() => {

    const [filter, setFilter] = useState({})

    const navigate = useNavigate()
    useEffect(() => {
        if(!store.authorized) {
            navigate('/auth')
        }
        store.data.tasks.all()
    }, [])

    console.log(store.tasks)

    console.log(store.authorized)

    const updateType = (val) => {
        setFilter({...filter, type: val})
        console.log(filter)
    }

    return(
        <>
            <TaskHeader mode="taskList" />
            <main className="main taskList">
                <section className="taskList-sorting">
                    <DropdownChb name="Тип" className="taskList-sorting-type" updateData={updateType}>
                        <Checkbox text="Задача" valEn="task" />
                        <Checkbox text="Баг" valEn="bug" />
                    </DropdownChb>
                    <TextInput
                        placeholder="Название задачи"
                        type="primary"
                        className="taskList-sorting-name" />
                    <DropdownChb name="Пользователь" className="taskList-sorting-username">
                        <Checkbox text="Малыш Грут" valEn="Малыш Грут" />
                    </DropdownChb>
                    <DropdownChb name="Статус" className="taskList-sorting-status">
                        <Checkbox text="Открыто" valEn="opened" />
                        <Checkbox text="В работе" valEn="inProgress" />
                        <Checkbox text="Тестируется" valEn="testing" />
                    </DropdownChb>
                    <DropdownChb name="Приоритет" className="taskList-sorting-priority">
                        <Checkbox text="Высокий" valEn="high" />
                        <Checkbox text="Средний" valEn="middle" />
                        <Checkbox text="Низкий" valEn="low" />
                    </DropdownChb>
                    <But type="primary" className="taskList-sorting-apply">Применить</But>
                </section>
                <section className="taskList-list">

                    { store.tasks.map(el =>
                    <TaskListItem
                        key={el.id}
                        type={el.type}
                        taskName={el.title}
                        userName={el.userId}
                        status={el.status}
                        rank={el.rank}
                        id={el.id}
                        more
                    />)
                    }

                </section>
                <Pager className="taskList-pager" />
            </main>
        </>
    )
})