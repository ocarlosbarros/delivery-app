import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OrderCheckout from '../OrderCheckout';

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const { token: authorization } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchOrders = async () => {
      const instance = axios.create({
        baseURL: 'http://localhost:3001/',
      });
      const endpoint = '/customer/orders';
      const { data } = await instance.get(endpoint, {
        headers: { authorization },
      });
      setOrders(data.length ? data : [data]);
    };
    fetchOrders();
  }, [authorization]);

  return (
    orders.map(({
      status,
      saleDate,
      totalPrice,
      id,
    }, index) => (
      <OrderCheckout
        id={ id }
        key={ index }
        index={ index + 1 }
        status={ status }
        date={ saleDate }
        totalPrice={ totalPrice }
      />
    ))
  );
}
