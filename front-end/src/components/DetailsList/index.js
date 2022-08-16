import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderDetail from '../OrderDetail';

import * as S from './styled';

export default function DetailsList() {
  const [data, setData] = useState();
  const { token: authorization } = JSON.parse(localStorage.getItem('user'));
  const { id } = useParams();

  useEffect(() => {
    const fetchOrders = async () => {
      const instance = axios.create({
        baseURL: 'http://localhost:3001/',
      });
      const endpoint = `/customer/orders/${id}`;
      const { data: {
        saleDate,
        products,
        seller,
        status,
      } } = await instance.get(endpoint, {
        headers: { authorization },
      });
      setData({
        saleDate,
        products,
        seller,
        status,
      });
    };
    fetchOrders();
  }, [authorization, id]);

  return data ? (
    <S.DetailHeader>
      <S.DetailOrderId
        data-testid="customer_order_details__element-order-details-label-order-id"
      />
      <S.DetailSeller
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        { data.seller.name }
      </S.DetailSeller>
      <S.DetailDate
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { new Date(data.saleDate).toLocaleDateString() }
      </S.DetailDate>
      <S.DetailStatus
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        { data.status }
      </S.DetailStatus>
      <S.DetailDelivered
        data-testid="customer_order_details__button-delivery-check"
      >
        Marcar como entregue
      </S.DetailDelivered>
      {
        data.products.map(({
          name,
          salesProducts,
          price,
        }, index) => (
          <OrderDetail
            key={ index }
            index={ index + 1 }
            name={ name }
            quantity={ salesProducts.quantity }
            price={ price }
          />
        ))

      }
    </S.DetailHeader>
  ) : <h1>Loading</h1>;
}
