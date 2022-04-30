import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import './_styles/style.sass'
import './_styles/null.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);