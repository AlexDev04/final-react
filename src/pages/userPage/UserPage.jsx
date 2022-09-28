import React, { useState, useEffect, useReducer } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate, useParams } from 'react-router';
import { TaskListItem, UserHeader, Pager, Modal } from '../../components';
import './UserPage.sass';
import { store } from '../../store';


export const UserPage = observer(() => {

    const [tasks, setTasks] = useState([]);

    const navigate = useNavigate()
    useEffect(() => {
        // if(!store.authorized) {
        //     navigate('/auth')
        // }
    }, []);

    const { id } = useParams();
    useEffect(() => {
        store.data.users.id(id, 0, 10)
    }, [])

    useEffect(() => {
        console.log(store.openedUser.tasks)
        setTasks(store.openedUser.tasks.data)
        console.log(tasks)
    }, [store.openedUser.tasks])

    let userImg = store.openedUser.photoUrl
    if(userImg === null) userImg = 'https://cdn-icons-png.flaticon.com/512/149/149995.png'


    return(
        <>
            <Modal mode="userPage" />
            <UserHeader mode="user" user={store.openedUser} />
            <main className="userPage">
                <div className="userPage-left">
                    <div className="userPage-left-img">
                        <img src={userImg} />
                    </div>
                    <h3 className="placeholder">О себе</h3>
                    <p>
                        {store.openedUser.about}
                    </p>
                </div>
                <hr />
                <div className="userPage-right">
                    <h3 className="placeholder">Задачи</h3>
                    <section className="userPage-right-tasks">
                        {tasks && tasks.map(el => 
                        <TaskListItem
                            className={tasks.indexOf(el) % 2 == 0 && 'userPage-right-tasks-item-grayed'}
                            type={el.type}
                            taskName={el.title}
                            status={el.status}
                            rank={el.rank}
                            id={el.id}
                        />)}
                    </section>
                    <Pager mode="userPage" id={id} />
                </div>
            </main>
        </>

    )
})