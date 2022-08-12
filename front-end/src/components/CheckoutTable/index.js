import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';
import CheckoutItem from '../CheckoutItem';
import { totalPrice } from '../../utils';

export default function CheckoutTable({ cart }) {
  return (
    <>
      <S.DetailTable>

        <S.TableHead>
          <S.HeaderRow>
            <S.DetailHeader>
              Item
            </S.DetailHeader>
            <S.DetailHeader>
              Descrição
            </S.DetailHeader>
            <S.DetailHeader>
              Quantidade
            </S.DetailHeader>
            <S.DetailHeader>
              Valor
            </S.DetailHeader>
            <S.DetailHeader>
              Sub-total
            </S.DetailHeader>
            <S.DetailHeader>
              Remover
            </S.DetailHeader>
          </S.HeaderRow>
        </S.TableHead>

        <S.TableBody>
          {
            cart.map(({ name, price, quantity }, index) => (
              <CheckoutItem
                key={ index }
                index={ index + 1 }
                name={ name }
                price={ price }
                quantity={ quantity }
              />
            ))
          }
        </S.TableBody>

      </S.DetailTable>
      <S.TotalPrice
        data-testid="customer_checkout__element-order-total-price"
      >
        {
          `Total ${totalPrice(cart)
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
        }
      </S.TotalPrice>
    </>
  );
}

CheckoutTable.propTypes = {
  cart: PropTypes.arrayOf({
    id: PropTypes.string,
    price: PropTypes.number,
    quant: PropTypes.number,
  }),
}.isRequired;
