import React, { useState, useReducer, useEffect } from "react";
import moment from "moment";
import { useNavigate, useParams } from "react-router";
import { Dropdown, TaskHeader, TextInput, TextZone, But, Modal } from "../../components";
import "./TaskPage.sass";
import { observer } from "mobx-react-lite";
import { modal, store } from "../../store";


export const TaskPage = observer(({mode}) => {

    // if(mode === 'create') store.openedTask = {}

    console.log(mode);

    const [commentText, setCommentText] = useState();

    const [task, setTask] = useState(store.openedTask);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        store.data.tasks.id(id);
        console.log(store.openedTask);
        console.log(task);
        if(!store.authorized) {
            navigate('/auth')
        };
        store.data.users.all();
        console.log(task)
    }, [store.openedTask])

    useEffect(() => {
        store.data.tasks.id(id);
    }, [])

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const handleOpen = () => {
        modal.open()
        forceUpdate()
    }

    const updateCommentText = (value) => {
        setCommentText(value);
    }

    const handleAddComment = () => {
        store.data.comments.add(commentText)
        store.data.tasks.id(id)
        setCommentText('')
    }

    const updateAssigned = (val, id) => {
        console.log(val, id)
        setTask({...task, assigned: val, assignedId: id })
    }

    const updateRank = (val) => {
        setTask({...task, rank: val})
    }

    const updateType = (val) => {
        setTask({...task, type: val})
    }

    const updateTitle = (val) => {
        setTask({...task, title: val})
    }

    const updateDescription = (val) => {
        setTask({...task, description: val})
    }

    const deleteCom = (comId) => {
        store.data.comments.delete(comId)
        store.data.tasks.id(id)
    }

    console.log(task)

    return(
        <>
            <TaskHeader 
                mode={mode}
                primaryBut={() => {
                if(mode === 'edit') store.data.tasks.edit(
                task.id, task.userId, task.assignedId, task.title, task.description, task.type, task.dateOfCreation, task.dateOfUpdate, task.timeInMinutes, task.status, task.rank
                )
                if(mode==='create') store.data.tasks.add(
                    task.assignedId, task.title, task.description, task.rank, task.type,
                )
                }}
                id={task.id}
            />
            <main className="taskPage">

                {/* Создание и редактирование задачи */}
                
                {mode !== 'task' &&
                <>
                    <section className="taskPage-left">
                        <label>Исполнитель</label>
                        <Dropdown 
                            name="Исполнитель" 
                            val={task.assigned}
                            valEn={task.assigned}
                            id={task.assignedId}
                            updateData={updateAssigned}
                        >
                            {store.users.map(user => <div key={user.id} name={user.username} id={user.id}>{user.username}</div>)}
                        </Dropdown>
                        <p>{task.assigned}</p>
                        <label>Тип запроса</label>
                        <Dropdown 
                            name="Тип запроса" 
                            val={task.typeRu} 
                            valEn={task.type}
                            id=''
                            updateData={updateType}
                        >
                            <div name="task">Задача</div>
                            <div name="bug">Баг</div>
                        </Dropdown>
                        <label>Приоритет</label>
                        <Dropdown 
                            name="Приоритет" 
                            val={task.rankRu} 
                            valEn={task.rank}
                            id=''
                            updateData={updateRank}
                        >
                            <div name="low">Низкий</div>
                            <div name="medium">Средний</div>
                            <div name="high">Высокий</div>
                        </Dropdown>
                    </section>
                    <hr />
                    <section className="taskPage-center">
                        <label>Название</label>
                        <TextInput 
                            type="primary" 
                            updateData={updateTitle}
                        >
                            {task.title}
                        </TextInput>
                        <label>Описание</label>
                        <TextZone 
                            type="primary" 
                            updateData={updateDescription}
                        >
                            {task.description}
                        </TextZone>
                    </section>
                    <section className="taskPage-right">
                    </section>
                </>
                }

                {/* Просмотр задачи */}

                {mode === 'task' && 
                <>
                    <Modal />
                    <section className="taskPage-left">
                        <p className="placeholder">Исполнитель</p>
                        <p>{store.openedTask.assigned}</p>
                        <p className="placeholder">Автор задачи</p>
                        <p>{store.openedTask.user}</p>
                        <p className="placeholder">Тип запроса</p>
                        <p>{store.openedTask.type}</p>
                        <p className="placeholder">Приоритет</p>
                        <p>{store.openedTask.rank}</p>
                        <p className="placeholder">Дата создания</p>
                        <p>{moment(store.openedTask.dateOfCreation).format('DD.MM.YYYY, hh:mm')}</p>
                        <p className="placeholder">Дата изменения</p>
                        <p>{moment(store.openedTask.dateOfUpdate).format('DD.MM.YYYY, hh:mm')}</p>
                        <p className="placeholder">Затрачено времени</p>
                        <p>{store.openedTask.timeInMinutes}</p>
                        <But type="primary"  onClick={handleOpen}>Сделать запись о работе</But>
                    </section>
                    <hr />
                    <section className="taskPage-center">
                        <p className="placeholder">Описание</p>
                        <p>{store.openedTask.description}</p>
                    </section>
                    <hr />
                    <section className="taskPage-right">
                        <p className="placeholder">Комментарии({store.openedTask.comments.length})</p>
                        <TextZone placeholder="Текст комментария" type="primary" updateData={updateCommentText}>{commentText}</TextZone>
                        <But type="success" onClick={handleAddComment}>Добавить комментарий</But>
                        <div className="comments">
                            {store.openedTask.comments.map(el => 
                                <div key={el.id} className="comments-item">
                                    <div className="comments-item-header">
                                        <p className="placeholder">{
                                            store.users.find(user => user.id === el.userId).username
                                        }</p>
                                        {el.userId === store.curUser.id &&
                                            <p className="comments-item-header-del" onClick={() => deleteCom(el.id)}>Удалить</p>
                                        }
                                    </div>

                                    <p>{el.text}</p>
                                </div>
                            )}
                        </div>

                        {/* <p className="placeholder">Шерлок Холмс (27.03.22 17:42)</p>
                        <p>Я так не думаю</p> */}
                    </section>
                </>
                }
            </main>
        </>
    )
})