import React, {useEffect, useReducer, useState} from "react";
import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router"; 
import { But } from '../';
import { modal, store } from "../../store";
import './UserHeader.sass';
import { action } from "mobx";

export const UserHeader = observer(({mode}) => {
    
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => setUser(store.openedUser), [store.openedUser])

    console.log(store.openedUser.id)
    console.log(store.curUser.id)

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const handleOpen = action(() => {
        modal.open()
        forceUpdate()
        console.log(modal.opened)
    })

    return(
        <section className="userHeader">
            {mode === 'user'
            ?<>
                <div>
                    <h2>{store.openedUser.username}</h2>
                </div>
                <div>
                    <But type="default" onClick={() => navigate(`/tasks/create`)}>Добавить задачу</But>
                    {store.openedUser.id === store.curUser.id &&
                        <But type="primary" onClick={handleOpen}>Редактировать</But>
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