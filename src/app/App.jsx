import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Authorization, TaskList, TaskPage, UserList, UserPage, NotFound } from '../pages';
import './App.sass'


export const App = () => {

    return(
        <div id="app">
                    <BrowserRouter>
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
                <Route path ="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
        </div>
    )
}