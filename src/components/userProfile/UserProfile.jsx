import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react';
import userImg from '../../_images/UserImg.svg';
import './UserProfile.sass';


export const UserProfile = () => {

    const [user, setUser] = useState({name: '', img: ''})

    useEffect(() => setUser({name: 'Малыш Грут', img: userImg}), [])

    return(
        <div className="userProfile">
            <p>{user.name}</p>
            <img src={user.img} />
        </div>
    )
}