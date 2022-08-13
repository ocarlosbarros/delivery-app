import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';
import CheckoutItem from '../CheckoutItem';
import { totalPrice } from '../../utils';
import { CartContext } from '../../context/CartContext';

export default function CheckoutTable() {
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')));
  }, [setCart]);

  const handleDelete = (i) => {
    const newCart = cart.filter((_item, index) => index !== i);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };
  // const localCart = JSON.parse(localStorage.getItem('cart'));
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
                remove={ handleDelete }
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
