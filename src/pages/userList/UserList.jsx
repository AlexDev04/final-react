import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
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
    })

    return(
        <>
            <UserHeader mode="userList" />
            <main className="userList">
                <section className="userList-list">
                    Users
                </section>
                <Pager className="userList-pager" />
            </main>
        </>
    )
})