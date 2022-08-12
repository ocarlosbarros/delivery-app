import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

export default function CheckoutItem({ index, name, price, quantity, remove }) {
  return (
    <S.ItemRow>
      <S.ItemColumn
        data-testid={ `customer_checkout__element-order-table-item-number-${index - 1}` }
      >
        {
          index
        }
      </S.ItemColumn>
      <S.DescriptionColumn
        data-testid={ `customer_checkout__element-order-table-name-${index - 1}` }
      >
        {
          name
        }
      </S.DescriptionColumn>
      <S.QuantityColumn
        data-testid={ `customer_checkout__element-order-table-quantity-${index - 1}` }
      >
        {
          quantity
        }
      </S.QuantityColumn>
      <S.PriceColumn
        data-testid={ `customer_checkout__element-order-table-unit-price-${index - 1}` }
      >
        {
          (Number(price)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        }
      </S.PriceColumn>
      <S.SubTotalColumn
        data-testid={ `customer_checkout__element-order-table-sub-total-${index - 1}` }
      >
        {
          (quantity * price)
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        }
      </S.SubTotalColumn>
      <S.RemoveColumn
        onClick={ () => remove(index - 1) }
        data-testid={ `customer_checkout__element-order-table-remove-${index - 1}` }
      >
        Remover
      </S.RemoveColumn>
    </S.ItemRow>
  );
}

CheckoutItem.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  quant: PropTypes.number,
  remove: PropTypes.func,
}.isRequired;
