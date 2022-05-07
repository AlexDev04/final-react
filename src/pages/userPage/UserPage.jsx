import React, { useState, useEffect, useReducer } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate, useParams } from 'react-router';
import { TaskListItem, UserHeader, Pager, Modal } from '../../components';
import './UserPage.sass';
import userImg from '../../_images/UserImg.svg';
import { store } from '../../store';


export const UserPage = observer(() => {

    const navigate = useNavigate()
    // useEffect(() => {
    //     if(!store.authorized) {
    //         navigate('/auth')
    //     }
    // })


    const { id } = useParams();
    useEffect(() => {store.data.users.id(id)}, [])
    console.log(store.openedUser)


    return(
        <>
            <Modal mode="userPage" />
            <UserHeader mode="user" user={store.openedUser} />
            <main className="userPage">
                <div className="userPage-left">
                    <img src={userImg} />
                    <h3 className="placeholder">О себе</h3>
                    <p>
                        {store.openedUser.about}
                    </p>
                </div>
                <hr />
                <div className="userPage-right">
                    <h3 className="placeholder">Задачи</h3>
                    <section className="userPage-right-tasks">
                        {/* <TaskListItem type="bug" taskName="Задача" status="done" rank="high" /> */}
                    </section>
                    <Pager />
                </div>
            </main>
        </>

    )
})