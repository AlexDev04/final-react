import { observer } from "mobx-react-lite";
import { action } from "mobx";
import React, { useEffect, useState } from "react";
import { UserHeader, Pager } from "../../components";
import { store } from "../../store";
import { useNavigate } from "react-router";
import './UserList.sass';


export const UserList = observer(() => {

    const navigate = useNavigate()
    useEffect(() => {
        if(!store.authorized) {
            navigate('/auth')
        }
        store.data.users.all()
    }, [])

    const handleNav = (id) => {
        navigate(`/users/${id}`)
    }

    return(
        <>
            <UserHeader mode="userList" />
            <main className="userList">
            <section className="userList-list">
                {store.users.map(el => <article key={el.id} onClick={() => handleNav(el.id)}>{el.username}</article>)}
            </section>
                <Pager className="userList-pager" />
            </main>
        </>
    )
})