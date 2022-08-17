import React from 'react';
import ReactDOM from 'react-dom';
import {
  // BrowserRouter,
  Navigate,
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Login from './screens/Login';
import Register from './screens/Register';
import Products from './screens/Products';
import Checkout from './screens/Checkout';
import Orders from './screens/Orders';

const history = createBrowserHistory({ window });

const rootElement = document.getElementById('root');
ReactDOM.render(
  <HistoryRouter history={ history }>
    <Routes>
      <Route element={ <Navigate to="/login" /> } path="/" />
      <Route element={ <Login /> } path="/login" />
      <Route element={ <Register /> } path="/register" />
      <Route element={ <Products /> } path="/customer/products" />
      <Route element={ <Checkout /> } path="/customer/checkout" />
      <Route element={ <Orders />} path="/:role/orders" >
        <Route element={ <Orders />} path="/:role/orders/:id" />
      </Route>
    </Routes>
  </HistoryRouter>,
  rootElement,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
