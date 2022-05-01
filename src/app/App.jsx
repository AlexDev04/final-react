import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainHeader } from '../components';
import { Authorization, TaskList, TaskPage, UserList, UserPage, NotFound } from '../pages';
import './App.sass'


export const App = () => {

    return(
        <div id="app">
            <BrowserRouter>
            <MainHeader />
                <Routes>
                    <Route path="/auth" element={<Authorization />} />
                    <Route path="/tasks">
                        <Route path="" element={<TaskList />} />
                        <Route path=":id" element={<TaskPage />} />
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