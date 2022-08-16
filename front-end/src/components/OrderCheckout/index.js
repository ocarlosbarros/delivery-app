import React from 'react';
import { useNavigate } from 'react-router-dom';
import { string, number } from 'prop-types';

import * as S from './styled';

export default function OrderCheckout({ index, id, status, date, totalPrice }) {
  const navigate = useNavigate();
  return (
    <S.DetailCard
      onClick={ () => {
        navigate(`${id}`);
      } }
    >
      <S.DetailId
        data-testid={ `customer_orders__element-order-id-${index}` }
      >
        { index }
      </S.DetailId>
      <S.DetailStatus
        data-testid={ `customer_orders__element-delivery-status-${index}` }
      >
        { status }
      </S.DetailStatus>

      <S.DatePriceWrapper>
        <S.DetailDate
          data-testid={ `customer_orders__element-order-date-${index}` }
        >
          { new Date(date).toLocaleDateString() }
        </S.DetailDate>
        <S.DetailPrice
          data-testid={ `customer_orders__element-card-price-${index}` }
        >
          { (Number(totalPrice))
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
        </S.DetailPrice>
      </S.DatePriceWrapper>

    </S.DetailCard>
  );
}

OrderCheckout.propTypes = {
  index: number,
  status: string,
  date: string,
  totalPrice: string,
}.isRequired;
