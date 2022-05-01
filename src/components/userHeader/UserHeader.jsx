import React from "react";
import { useParams } from "react-router"; 
import { But } from '../';
import './UserHeader.sass';

export const UserHeader = () => {

    const { id } = useParams();
    console.log(id)

    return(
        <section className="userHeader">
            <div>Малыш Грут</div>
            <div>
                <But type="default">Добавить задачу</But>
                <But type="primary">Редактировать</But>
            </div>
        </section>
    )
}