import React from "react";
import { useParams } from "react-router";
import { Dropdown, TaskHeader, TextInput, TextZone, But } from "../../components"
import "./TaskPage.sass"


export const TaskPage = ({mode}) => {

    console.log(mode)

    return(
        <>
            <TaskHeader mode={mode} />
            <main className="taskPage">
                {mode !== 'task' &&
                <>
                    <section className="taskPage-left">
                        <label>Исполнитель</label>
                        <Dropdown name="Исполнитель">
                            <div>Малыш Грут</div>
                            <div>Евгений онегин</div>
                        </Dropdown>
                        <label>Тип запроса</label>
                        <Dropdown name="Тип запроса">
                            <div>Задача</div>
                            <div>Баг</div>
                        </Dropdown>
                        <label>Приоритет</label>
                        <Dropdown name="Приоритет">
                            <div>Низкий</div>
                            <div>Средний</div>
                            <div>Высокий</div>
                        </Dropdown>
                    </section>
                    <hr />
                    <section className="taskPage-center">
                        <label>Название</label>
                        <TextInput type="primary" placeholder="Название" />
                        <label>Описание</label>
                        <TextZone type="primary" placeholder="описание" />
                    </section>
                    <section className="taskPage-right">
                    </section>
                </>
                }
                {mode === 'task' && 
                <>
                    <section className="taskPage-left">
                        <p className="taskPage-placeholder">Исполнитель</p>
                        <p>Евгений Онегин</p>
                        <p className="taskPage-placeholder">Автор задачи</p>
                        <p>Доктор Ватсон</p>
                        <p className="taskPage-placeholder">Тип запроса</p>
                        <p>Задача</p>
                        <p className="taskPage-placeholder">Приоритет</p>
                        <p>Низкий</p>
                        <p className="taskPage-placeholder">Дата создания</p>
                        <p>01.12.2021 12:12</p>
                        <p className="taskPage-placeholder">Дата изменения</p>
                        <p>01.12.2021 12:20</p>
                        <p className="taskPage-placeholder">Затрачено времени</p>
                        <p>0 часов 0 минут</p>
                        <But type="primary">Сделать запись о работе</But>
                    </section>
                    <hr />
                    <section className="taskPage-center">
                        <p className="taskPage-placeholder">Описание</p>
                        <p>Какой-то текст задачи, например, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet consectetur dolor, nec consectetur nisl mattis ut. Proin ac sapien at elit lacinia semper. Nullam vestibulum rutrum efficitur. Sed et egestas ante, id ullamcorper ante. Maecenas porta sem ultrices libero tempus, eu laoreet turpis bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed laoreet est et nisi tristique, ut hendrerit tellus pulvinar. Proin eget elit a mauris convallis molestie nec vel nisi. Etiam accumsan porta velit et convallis. Maecenas euismod scelerisque lectus, non varius velit condimentum non. Vestibulum luctus risus et metus volutpat, at sodales massa gravida.</p>
                    </section>
                    <hr />
                    <section className="taskPage-right">
                        <p className="taskPage-placeholder">Комментарии(1)</p>
                        <TextZone placeholder="Текст комментария" type="primary" />
                        <But type="success">Добавить комментарий</But>
                        <p className="taskPage-placeholder">Шерлок Холмс (27.03.22 17:42)</p>
                        <p>Я так не думаю</p>
                    </section>
                </>
                }
            </main>
        </>
    )
}