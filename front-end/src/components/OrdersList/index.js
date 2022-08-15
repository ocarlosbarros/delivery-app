import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderDetail from '../OrderDetail';

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const { token: authorization } = JSON.parse(localStorage.getItem('user'));
  const { id } = useParams();

  useEffect(() => {
    const fetchOrders = async () => {
      const instance = axios.create({
        baseURL: 'http://localhost:3001/',
      });
      const { data } = await instance.get(`/customer/orders/${id}`, {
        headers: { authorization },
      });
      setOrders(data);
    };
    fetchOrders();
  }, [authorization, id]);
  return (
    orders.map(({
      status,
      saleDate,
      totalPrice,
    }, index) => (
      <OrderDetail
        key={ index }
        index={ index + 1 }
        status={ status }
        date={ saleDate }
        totalPrice={ totalPrice }
      />
    ))
  );
}
