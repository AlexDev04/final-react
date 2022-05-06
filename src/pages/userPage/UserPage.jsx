import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { TaskListItem, UserHeader, Pager } from '../../components';
import './UserPage.sass';
import userImg from '../../_images/UserImg.svg';
import { store } from '../../store';


export const UserPage = () => {

    const navigate = useNavigate()
    // useEffect(() => {
    //     if(!store.authorized) {
    //         navigate('/auth')
    //     }
    // })

    return(
        <>
            <UserHeader mode="user" />
            <main className="userPage">
                <div className="userPage-left">
                    <img src={userImg} />
                    <h3 className="placeholder">О себе</h3>
                    <p>Разработчик.
                        <br />
                        Реалист.
                        <br />
                        Очаровательное маленькое дерево.
                    </p>
                </div>
                <hr />
                <div className="userPage-right">
                    <h3 className="placeholder">Задачи</h3>
                    <section className="userPage-right-tasks">
                        <TaskListItem type="bug" taskName="Задача" status="done" rank="high" />
                    </section>
                    <Pager />
                </div>
            </main>
        </>

    )
}