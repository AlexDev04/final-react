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

    const [value, setValue] = useState('minutes')
    const [time, setTime] = useState({})

    useEffect(() => console.log(value), [value])

    const handleTime = (val) => {
        switch (value) {
            case 'minutes':
                setTime({...time, minutes: val});
                break;
            case 'hours':
                setTime({...time, hours: val});
                break;
            case 'days':
                setTime({...time, days: val})
        }
        console.log(time)
    }

    const handleComment = (val) => {
        setTime({...time, comment: val})
    }

    const handleAdd = () => {
        console.log(time.minutes, time.hours, time.days)
        console.log(time.minutes*1 + time.hours*1 * 60 + time.days*1 * 60 * 12)
        const total = time.minutes + time.hours * 60 + time.days * 60 * 12
        store.data.tasks.addWorktimme(total, time.comment)
    }

    return(
        <>
            {mode !== 'userPage'
            ?<>
                <section className={modal.opened? 'modal': 'hidden'}>
                    <div className="modal-window">
                        <h3>Modal</h3>
                        <hr />
                        <div className="modal-window-content">
                            <p className="placeholder">Затрачено времени</p>
                            <TextInput type="primary" updateData={handleTime}>0</TextInput>
                            <p className="placeholder">Единица измерения</p>
                            <Dropdown type="primary" val="Минуты" updateData={val => setValue(val)}>
                                <div name="minutes">Минуты</div>
                                <div name="hours">Часы</div>
                                <div name="days">Дни</div>
                            </Dropdown>
                            <p className="placeholder">Комментарий</p>
                            <TextZone type="primary" updateData={handleComment} />
                        </div>

                        <hr />
                        <div className="modal-window-footer">
                            <But type="primary" onClick={handleAdd}>Добавить</But>
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