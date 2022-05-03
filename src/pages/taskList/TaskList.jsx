import React from "react";
import { But, Dropdown, TaskHeader, TaskListItem, TextInput } from "../../components";
import "./TaskList.sass"


export const TaskList = () => {
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
                    <TaskListItem
                        type="bug"
                        taskName="Создать SPA на React"
                        userName="Малыш Грут"
                        status="test"
                        rank="high"
                    />
                </section>
                <section className="taskList-pager">
                    pager
                </section>
            </main>
        </>
    )
}