import React from 'react';
import './MainHeader.sass';
import logo from '../../_images/Logo.svg';
import { Navigation, UserProfile } from '../';
import { useLocation, useNavigate } from 'react-router';
import { observer } from 'mobx-react-lite';
import { store } from '../../store';


export const MainHeader = observer(() => {

    const navigate = useNavigate();

    const { pathname } = useLocation();

    const home = () => {
        navigate('/')
    }

    return(
        <header className="mainHeader">
            <img src={logo} onClick={home} />
            {!pathname.startsWith('/auth') &&
            <>
                <Navigation />
                <UserProfile />
            </>
            }

        </header>
    )
})