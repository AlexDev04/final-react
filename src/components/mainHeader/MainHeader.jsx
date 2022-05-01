import React from 'react';
import './MainHeader.sass';
import logo from '../../_images/Logo.svg';
import { Navigation, UserProfile } from '../';


export const MainHeader = () => {
    return(
        <header className="mainHeader">
            <img src={logo} />
            <Navigation />
            <UserProfile />
        </header>
    )
}