import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderDetail from '../OrderDetail';
import { totalPrice } from '../../utils';

import * as S from './styled';

export default function DetailsList() {
  const [data, setData] = useState();
  const { token: authorization } = JSON.parse(localStorage.getItem('user'));
  const { id, role } = useParams();

  const total = totalPrice(data ? data.products
    .map(({ price, salesProducts: { quantity } }) => ({ price, quantity })) : 0);

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
        data-testid={ `${role}_order_details__element-order-details-label-order-id` }
      >
        { `Pedido ${id}` }
      </S.DetailOrderId>
      <S.DetailDate
        data-testid={ `${role}_order_details__element-order-details-label-order-date` }
      >
        { new Date(data.saleDate).toLocaleDateString('pt-BR') }
      </S.DetailDate>
      {
        role === 'customer' ? (
          <S.DetailSeller
            data-testid={
              `${role}_order_details__element-order-details-label-seller-name`
            }
          >
            { data.seller.name }
          </S.DetailSeller>
        ) : (
          <S.DetailPrepareOrder
            type="button"
            data-testid={
              `${role}_seller_order_details__button-preparing-check`
            }
          >
            Preparar Pedido
          </S.DetailPrepareOrder>
        )
      }
      <S.DetailStatus
        data-testid={
          `${role}_order_details__element-order-details-label-delivery-status`
        }
      >
        { data.status }
      </S.DetailStatus>
      <S.DetailDelivered
        data-testid={ `${role}_order_details__button-delivery-check` }
        disabled={ data.status === 'Pendente' }
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
            role={ role }
            key={ index }
            index={ index + 1 }
            name={ name }
            quantity={ salesProducts.quantity }
            price={ price }
          />
        ))

      }
      <S.DetailTotalPrice
        data-testid="customer_order_details__element-order-total-price"
      >
        { (total)
          .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
      </S.DetailTotalPrice>
    </S.DetailHeader>
  ) : <h1>Loading</h1>;
}
