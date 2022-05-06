import React, { useEffect, useReducer } from "react";
import "./Modal.sass";
import { TextInput, Dropdown, TextZone, But } from '../'
import { observer } from "mobx-react-lite";
import { action } from "mobx";
import { modal } from "../../store";


export const Modal = observer(() => {

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const handleClose = action(() => {
        modal.close()
        forceUpdate();
    })

    useEffect(() => forceUpdate(), [modal.opened])

    console.log(modal.opened)


    return(
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
    )
})