import { observer } from 'mobx-react-lite';
import React, { useState, useEffect } from 'react';
import { store } from '../../store';
import userImg from '../../_images/UserImg.svg';
import './UserProfile.sass';
import { useNavigate } from 'react-router';


export const UserProfile = observer(() => {

    const navigate = useNavigate();

    const [user, setUser] = useState({name: '', img: '', id: ''});

    useEffect(() => setUser({name: store.curUser.username, img: userImg, id: store.curUser.id}), []);

    const handleUser = () => {
        navigate(`/users/${user.id}`)
    }

    return(
        <div className="userProfile" onClick={handleUser}>
            <p>{user.name}</p>
            <img src={user.img} />
        </div>
    )
})