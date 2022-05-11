import React, { useEffect, useState } from "react";
import { But } from "../";
import './Pager.sass';
import { store } from "../../../store";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";


export const Pager = ({className}) => {

    console.log(store.tasksPag)

    const [info, setInfo] = useState({});

    useEffect(() => {
        setInfo({page: store.tasksPag.page, maxPage: Math.ceil(info.total/10 - 1), total: store.tasksPag.total});
        console.log(info)
    }, [store.tasksPag])

    const back = () => {
        store.data.tasks.pagination(info.page - 1, 10)
    }

    const forward = () => {
        store.data.tasks.pagination(info.page + 1, 10)
    }


    return(
        <section className={`${className} pager`}>
            <div className="pager-left">
                <But type="default" onClick={back} dis={info.page == 0}>Назад</But>
                {/* <But></But> */}
                <But type="default" onClick={forward} dis={info.page == info.maxPage}>Вперед</But>
            </div>
            <div className="placeholder">
                Показано 
                {info.page !== info.maxPage &&
                ' ' + info.page + '1' + '-' + (info.page + 1) + '0' + ' '
                }
                {info.page === info.maxPage &&
                ' ' + info.page + '1' + '-' + info.total + ' '
                }
                из {info.total}
            </div>
        </section>
    )
}