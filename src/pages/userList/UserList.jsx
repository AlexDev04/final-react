import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { UserHeader, Pager } from "../../components";
import { store } from "../../store";
import { useNavigate } from "react-router";
import './UserList.sass';


export const UserList = observer(() => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        store.data.users.pagination(0, 10);
        console.log(store.usersPag.data)
        setUsers(store.usersPag.data)
    }, [])

    useEffect(() => {
        setUsers(store.usersPag.data)
    }, [store.usersPag.data])

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
                {users && users.map(el => 
                <article 
                    key={el.id} 
                    onClick={() => handleNav(el.id)}
                    className={`${users.indexOf(el) % 2 == 0 && 'userList-list-item-grayed'} userList-list-item`}
                >
                    {el.username}
                </article>)}
            </section>
                <Pager className="userList-pager" mode="userList" />
            </main>
        </>
    )
})