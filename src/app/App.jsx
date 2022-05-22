import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { MainHeader } from '../components';
import { Authorization, TaskList, TaskPage, UserList, UserPage, NotFound } from '../pages';
import './App.sass'


export const App = () => {

    const { id } = useParams();
    console.log(id)

    return(
        <div id="app">
            <BrowserRouter>
            <MainHeader />
                <Routes>
                    <Route path="/auth" element={<Authorization />} />
                    <Route path="/tasks">
                        <Route path="" element={<TaskList />} />
                        <Route path=":id" element={<TaskPage mode="task" />} />
                        <Route path="edit/:id" element={<TaskPage mode="edit" />} />
                        <Route path="create" element={<TaskPage mode="create" />} />
                    </Route>
                    <Route path="/users">
                        <Route path="" element={<UserList />} />
                        <Route path=":id" element={<UserPage />} />
                    </Route>
                    <Route path="/" element={<Navigate to="/tasks" replace />} />
                    <Route path ="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}