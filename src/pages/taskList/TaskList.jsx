import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { But, DropdownChb, Checkbox, TaskHeader, TaskListItem, TextInput, Pager } from "../../components";
import "./TaskList.sass";
import { store } from "../../store";
import { useNavigate } from "react-router";


export const TaskList = observer(() => {

    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState({})

    const updateType = (val) => {
        setFilter({...filter, type: val})
        console.log(filter)
    }

    const updateTitle = (val) => {
        setFilter({...filter, query: val})
        console.log(filter)
    }

    const updateUsers = (val) => {
        setFilter({...filter, assignedUsers: val})
        console.log(filter)
    }

    const updateStatus = (val) => {
        setFilter({...filter, status: val})
        console.log(filter)
    }

    const updateRank = (val) => {
        setFilter({...filter, rank: val})
        console.log(filter)
    }

    const handleApply = () => {
        console.log(filter);
        store.data.tasks.pagination(0, 10, filter)
    }

    useEffect(() => {
        store.data.tasks.pagination(0, 10);
        store.data.users.all();
        console.log(store.tasksPag.data);
        setTasks(store.tasksPag.data)
    }, [])

    useEffect(() => {
        setTasks(store.tasksPag.data)
    }, [store.tasksPag.data])


    const navigate = useNavigate()
    useEffect(() => {
        // if(!store.authorized) {
        //     navigate('/auth')
        // }
        store.data.tasks.all()
    }, [])

    console.log(store.tasks.data)

    console.log(store.authorized)

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
                        className="taskList-sorting-name"
                        updateData={updateTitle}
                    />
                    <DropdownChb 
                        name="Пользователь" 
                        className="taskList-sorting-username"
                        updateData={updateUsers}
                    >
                        {store.users.map(el => <Checkbox text={el.username} valEn={el.id} />)}
                    </DropdownChb>
                    <DropdownChb 
                        name="Статус" 
                        className="taskList-sorting-status"
                        updateData={updateStatus}
                    >
                        <Checkbox text="Открыто" valEn="opened" />
                        <Checkbox text="В работе" valEn="inProgress" />
                        <Checkbox text="Тестируется" valEn="testing" />
                    </DropdownChb>
                    <DropdownChb 
                        name="Приоритет" 
                        className="taskList-sorting-priority"
                        updateData={updateRank}
                    >
                        <Checkbox text="Высокий" valEn="high" />
                        <Checkbox text="Средний" valEn="medium" />
                        <Checkbox text="Низкий" valEn="low" />
                    </DropdownChb>
                    <But 
                        type="primary" 
                        className="taskList-sorting-apply"
                        onClick={handleApply}
                    >Применить</But>
                </section>
                <section className="taskList-list">

                    {tasks && tasks.map(el =>
                    <TaskListItem
                        className={`taskList-list-item ${tasks.indexOf(el) % 2 == 0 && 'taskList-list-item-grayed'}`}
                        key={el.id}
                        type={el.type}
                        taskName={el.title}
                        userName={ store.users.find(user => user.id === el.assignedId).username}
                        status={el.status}
                        rank={el.rank}
                        id={el.id}
                        more
                    />)
                    }

                </section>
                <Pager className="taskList-pager" mode="taskList" filter={filter} />
            </main>
        </>
    )
})