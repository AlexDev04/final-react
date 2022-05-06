import React, { useState } from "react";
import './Authorization.sass';
import { But, TextInput } from '../../components';
import { store } from '../../store'
import { useNavigate } from "react-router";
import { observer } from "mobx-react-lite";
import { action } from "mobx";


export const Authorization = observer(() => {

    const navigate = useNavigate();

    const [authData, setAuthData] = useState({});

    const updateLogin = (value) => {
        setAuthData({...authData, login: value})
    };

    const updatePassword = (value) => {
        setAuthData({...authData, password: value})
    };

    const handleAuth = action(() => {
        store.data.users.login(authData)
    });

    console.log(store.authorized)
    store.authorized && navigate('/');

    return(
        <section className="auth">
            <div className="auth-window">
                <h2>Авторизация</h2>
                <p className="placeholder">Логин</p>
                <TextInput type="primary" updateData={updateLogin} />
                <p className="placeholder">Пароль</p>
                <TextInput type="primary" updateData={updatePassword} info="password" />
                <But type="success" onClick={handleAuth}>Вход</But>
            </div>
        </section>
    )
})