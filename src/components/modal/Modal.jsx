import React, { useEffect, useReducer, useState } from "react";
import "./Modal.sass";
import { TextInput, Dropdown, TextZone, But } from '../'
import { observer } from "mobx-react-lite";
import { action } from "mobx";
import { modal, store } from "../../store";


export const Modal = observer(({mode}) => {

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const [user, setUser] = useState();
    useEffect(() => setUser(store.openedUser), [])
    console.log(user)

    const updateName = (value) => {
        setUser({...user, username: value})
        console.log(user)
    }

    const updateUrl = (value) => {
        setUser({...user, photoUrl: value})
    }
    
    const updateAbout = (value) => {
        setUser({...user, about: value})
    }
    const handleEditUser = () => {
        console.log(user);
        store.data.users.edit(user)
        // modal.close()
        // forceUpdate();
    }

    const handleClose = action(() => {
        modal.close()
        forceUpdate();
    })

    useEffect(() => forceUpdate(), [modal.opened])

    console.log(modal.opened)


    return(
        <>
            {mode !== 'userPage'
            ?<>
                <section className={modal.opened? 'modal': 'hidden'}>
                    <div className="modal-window">
                        <h3>Modal</h3>
                        <hr />
                        <p className="placeholder">Затрачено времени</p>
                        <TextInput type="primary">0</TextInput>
                        <p className="placeholder">Единица измерения</p>
                        <Dropdown type="primary" val="Минуты">
                            <div>Минуты</div>
                            <div>Часы</div>
                            <div>Дни</div>
                        </Dropdown>
                        <p className="placeholder">Комментарий</p>
                        <TextZone type="primary" />
                        <hr />
                        <div className="modal-window-footer">
                            <But type="primary">Добавить</But>
                            <But type="default" onClick={handleClose}>Отмена</But>
                        </div>
                    </div>
                </section>
            </>
            :<>
                <section className={modal.opened? 'modal': 'hidden'}>
                    <div className="modal-window">
                        <h3>Редактирование пользователя</h3>
                        <hr />
                        <div className="modal-window-content">
                            <p className="placeholder">Имя пользователя</p>
                            <TextInput type="primary" updateData={updateName}></TextInput>
                            <p className="placeholder">URL фотографии</p>
                            <TextInput type="primary" updateData={updateUrl}></TextInput>
                            <p className="placeholder">О себе</p>
                            <TextZone type="primary" updateData={updateAbout} />
                        </div>

                        <hr />
                        <div className="modal-window-footer">
                            <But type="primary" onClick={handleEditUser}>Сохранить</But>
                            <But type="default" onClick={handleClose}>Отмена</But>
                        </div>
                    </div>
                </section>
            </>
            }
        </>
    )
})