import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderCheckout from '../OrderCheckout';

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const { token: authorization } = JSON.parse(localStorage.getItem('user'));
  const { role } = useParams();

  useEffect(() => {
    const fetchOrders = async () => {
      const instance = axios.create({
        baseURL: 'http://localhost:3001/',
      });
      const endpoint = `/${role}/orders`;
      const { data } = await instance.get(endpoint, {
        headers: { authorization },
      });
      console.table(data);
      setOrders(data.length ? data : [data]);
    };
    fetchOrders();
  }, [authorization, role]);

  return (
    orders.map(({
      status,
      saleDate,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      id,
    }, index) => (
      <OrderCheckout
        role={ role }
        id={ id }
        key={ index }
        index={ index + 1 }
        status={ status }
        date={ saleDate }
        address={ `${deliveryAddress}, ${deliveryNumber}` }
        totalPrice={ totalPrice }
      />
    ))
  );
}
