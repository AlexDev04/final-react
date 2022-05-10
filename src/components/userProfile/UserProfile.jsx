import { observer } from 'mobx-react-lite';
import React, { useState, useEffect } from 'react';
import { store } from '../../store';
import './UserProfile.sass';
import { useNavigate } from 'react-router';


export const UserProfile = observer(() => {

    const navigate = useNavigate();

    const [user, setUser] = useState({username: '', img: '', id: ''});
    useEffect(() => setUser({username: store.curUser.username, img: userImg, id: store.curUser.id}), [store.authorized]);

    const handleUser = () => {
        navigate(`/users/${user.id}`)
    }

    console.log(store.curUser.photoUrl)
    const userImg = store.curUser.photoUrl

    return(
        <div className="userProfile" onClick={handleUser}>
            <p>{user.username}</p>

            <div>
                <img src={user.img} />
            </div>
        </div>
    )
})