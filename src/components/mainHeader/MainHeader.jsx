import React from 'react';
import './MainHeader.sass';
import logo from '../../_images/Logo.svg';
import { Navigation, UserProfile } from '../';
import { useNavigate } from 'react-router';


export const MainHeader = () => {

    const navigate = useNavigate();

    const home = () => {
        navigate('/')
    }

    return(
        <header className="mainHeader">
            <img src={logo} onClick={home} />
            <Navigation />
            <UserProfile />
        </header>
    )
}