import React, { useEffect, useState } from "react";
import { But } from "../";
import './Pager.sass';
import { store } from "../../../store";


export const Pager = ({className, mode, id}) => {

    const [infoTL, setInfoTL] = useState({});
    const [infoUP, setInfoUP] = useState({});
    const [infoUL, setInfoUL] = useState({});

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
    }, [store.openedUser]);

    useEffect(() => {
        setInfoUL({
            page: store.usersPag.page,
            maxPage: Math.ceil(store.usersPag.total / 10 - 1),
            total: store.usersPag.total
        })
        console.log(infoUL)
    }, [store.usersPag]);

    const back = () => {
        mode === 'taskList' && store.data.tasks.pagination(infoTL.page - 1, 10);
        mode === 'userPage' && store.data.users.id(id, infoUP.page - 1, 10);
        mode === 'userList' && store.data.users.pagination(infoUL.page - 1, 10)
    }

    const forward = () => {
        mode === 'taskList' && store.data.tasks.pagination(infoTL.page + 1, 10);
        mode === 'userPage' && store.data.users.id(id, infoUP.page + 1, 10);
        mode === 'userList' && store.data.users.pagination(infoUL.page + 1, 10)
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
                <But type="default" onClick={back} dis={infoUP.page == 0}>Назад</But>
                {/* <But></But> */}
                <But type="default" onClick={forward} dis={infoUP.page == infoUP.maxPage}>Вперед</But>
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
            {mode === 'userList' &&
            <>
            <div className="pager-left">
                <But type="default" onClick={back} dis={infoUL.page == 0}>Назад</But>
                {/* <But></But> */}
                <But type="default" onClick={forward} dis={infoUL.page == infoUL.maxPage}>Вперед</But>
            </div>
            <div className="placeholder">
                Показано 
                {infoUL.page !== infoUL.maxPage &&
                ' ' + infoUL.page + '1' + '-' + (infoUL.page + 1) + '0' + ' '
                }
                {infoUL.page === infoUL.maxPage &&
                ' ' + infoUL.page + '1' + '-' + infoUL.total + ' '
                }
                из {infoUL.total}
            </div>
            </>
            }
        </section>
    )
}