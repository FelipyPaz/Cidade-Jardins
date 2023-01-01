import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Login}  from './containers/Login/index';
import {Register} from './containers/Register/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);

