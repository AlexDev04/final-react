import React, {useEffect, useReducer, useState} from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router"; 
import { But } from '../';
import { store } from "../../store";
import './UserHeader.sass';

export const UserHeader = observer(({mode}) => {
    
    const [user, setUser] = useState({});

    useEffect(() => setUser(store.openedUser), [store.openedUser])

    console.log(store.openedUser)

    return(
        <section className="userHeader">
            {mode === 'user'
            ?<>
                <div>
                    <h2>{store.openedUser.username}</h2>
                </div>
                <div>
                    <But type="default">Добавить задачу</But>
                    {store.openedUser.id === store.curUser.id &&
                        <But type="primary">Редактировать</But>
                    }
                </div>
            </>
            :<>
                <div>
                    <h2>Пользоваетли</h2>
                </div>
                <div>
                </div>
            </>
        }

        </section>
    )
})