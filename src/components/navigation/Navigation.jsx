import React, { useState } from 'react';
import { useLocation } from 'react-router';
import {  NavLink } from 'react-router-dom';
import './Navigation.sass';

export const Navigation = () => {

    const { pathname } = useLocation();
    const path = pathname.slice(0,6);
    
    return(
        <nav className="navigation">
            <NavLink
                to="/" 
                className={`navigation-link ${path === '/tasks' && 'navigation-link-active'}`} 
            >
                <p>Задачи</p>
            </NavLink>
            <NavLink 
                to="/users" 
                className={`navigation-link ${path === '/users' && 'navigation-link-active'}`} 
            >
                <p>Пользователи</p>
            </NavLink>
        </nav>
    )
}