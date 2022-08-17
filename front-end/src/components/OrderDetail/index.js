import React from 'react';
import { string, number } from 'prop-types';

import * as S from './styled';

export default function OrderDetail({
  index, name, quantity, price, role,
}) {
  return (
    <S.DetailCard>
      <S.DetailId
        data-testid={ `${role}_order_details__element-order-table-item-number-${index}` }
      >
        { index }
      </S.DetailId>
      <S.DetailName
        data-testid={ `${role}_order_details__element-order-table-name-${index}` }
      >
        { name }
      </S.DetailName>

      <S.DatePriceWrapper>
        <S.DetailQuantity
          data-test-id={ `${role}_order_details__element-order-table-quantity-${index}` }
        >
          { quantity }
        </S.DetailQuantity>
        <S.DetailUnitPrice
          data-testid={
            `${role}_order_details__element-order-table-unit-price-${index}`
          }
        >
          { (Number(price))
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
        </S.DetailUnitPrice>
        <S.DetailSubTotal
          data-testid={
            `${role}_order_details__element-order-table-sub-total-${index}`
          }
        >
          { (Number(price) * quantity)
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
        </S.DetailSubTotal>
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
