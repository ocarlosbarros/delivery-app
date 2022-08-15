import React from 'react';
import { string, number } from 'prop-types';

import * as S from './styled';

export default function OrderDetail({ index, status, date, totalPrice }) {
  const newDate = new Date(date);
  return (
    <S.DetailCard>
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
          data-test-id={ `customer_orders__element-order-date-${index}` }
        >
          { newDate.toLocaleDateString() }
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

OrderDetail.propTypes = {
  index: number,
  status: string,
  date: string,
  totalPrice: string,
}.isRequired;
