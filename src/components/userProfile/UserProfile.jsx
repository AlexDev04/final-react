import { observer } from 'mobx-react-lite';
import React, { useState, useEffect } from 'react';
import { store } from '../../store';
import './UserProfile.sass';
import { useNavigate } from 'react-router';


export const UserProfile = observer(() => {

    const navigate = useNavigate();

    const [user, setUser] = useState({username: '', img: '', id: ''});
    useEffect(() => setUser({username: store.curUser.username, img: store.curUser.photoUrl, id: store.curUser.id}), [store.curUser.username, store.curUser.img, store.curUser.id]);

    const handleUser = () => {
        console.log('to user page');
        navigate(`/users/${user.id}`)
    }

    const handleLogout = () => {
        console.log('log out');
        store.data.users.logout();
        navigate('/auth')
    }

    return(
        <div className="userProfile">
            <p>{user.username}</p>
            <div className="userProfile-icon">
                <img src={user.img} />
            </div>
            <div className="userProfile-content">
                <p onClick={handleUser}>Посмотреть профиль</p>
                <p className="userProfile-content-out" onClick={handleLogout}>Выйти из системы</p>
            </div>
        </div>
    )
})