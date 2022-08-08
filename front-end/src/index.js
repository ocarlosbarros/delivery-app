import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Login from './screens/Login';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route element={ <Navigate to="/login" /> } path="/" />
      <Route element={ <Login /> } path="/login" />
    </Routes>
  </BrowserRouter>,
  rootElement,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
