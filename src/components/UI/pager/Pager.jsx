import React, { useEffect, useState } from "react";
import { But } from "../";
import './Pager.sass';
import { store } from "../../../store";


export const Pager = ({className, mode, id}) => {

    const [infoTL, setInfoTL] = useState({});
    const [infoUP, setInfoUP] = useState({});

    useEffect(() => {
        setInfoTL({page: store.tasksPag.page, maxPage: Math.ceil(store.tasksPag.total / 10 - 1), total: store.tasksPag.total});
        console.log(infoTL)
    }, [store.tasksPag]);

    useEffect(() => {
        console.log(store.openedUser.tasks)
        setInfoUP({
            page: store.openedUser.tasks.page,
            maxPage: Math.ceil(store.openedUser.tasks.total / 10 - 1),
            total: store.openedUser.tasks.total
        })
        console.log(infoUP)
    }, [store.openedUser])

    const back = () => {
        mode == 'taskList' && store.data.tasks.pagination(infoTL.page - 1, 10);
        mode === 'userPage' && store.data.users.id(id, infoUP.page - 1, 10)
    }

    const forward = () => {
        mode == 'taskList' && store.data.tasks.pagination(infoTL.page + 1, 10);
        mode === 'userPage' && store.data.users.id(id, infoUP.page + 1, 10)
    }


    return(
        <section className={`${className} pager`}>

            {mode === 'taskList' &&
            <>
                <div className="pager-left">
                    <But type="default" onClick={back} dis={infoTL.page == 0}>Назад</But>
                    {/* <But></But> */}
                    <But type="default" onClick={forward} dis={infoTL.page == infoTL.maxPage}>Вперед</But>
                </div>
                <div className="placeholder">
                    Показано 
                    {infoTL.page !== infoTL.maxPage &&
                    ' ' + infoTL.page + '1' + '-' + (infoTL.page + 1) + '0' + ' '
                    }
                    {infoTL.page === infoTL.maxPage &&
                    ' ' + infoTL.page + '1' + '-' + infoTL.total + ' '
                    }
                    из {infoTL.total}
                </div>
            </>
            }
            {mode === 'userPage' && 
            <>
            <div className="pager-left">
                <But type="default" onClick={back} dis={infoTL.page == 0}>Назад</But>
                {/* <But></But> */}
                <But type="default" onClick={forward} dis={infoTL.page == infoTL.maxPage}>Вперед</But>
            </div>
            <div className="placeholder">
                Показано 
                {infoUP.page !== infoUP.maxPage &&
                ' ' + infoUP.page + '1' + '-' + (infoUP.page + 1) + '0' + ' '
                }
                {infoUP.page === infoUP.maxPage &&
                ' ' + infoUP.page + '1' + '-' + infoUP.total + ' '
                }
                из {infoUP.total}
            </div>
        </>
            }
        </section>
    )
}