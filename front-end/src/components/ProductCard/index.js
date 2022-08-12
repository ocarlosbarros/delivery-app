import React, { useState, useEffect, useContext } from 'react';
import { string, number } from 'prop-types';

import * as S from './styled';
import { CartContext } from '../../context/CartContext';

export default function ProductCard({ image, name, price, id }) {
  const [qty, setQty] = useState(0);
  const { setCart } = useContext(CartContext);

  useEffect(() => {
    let cartArray = JSON.parse(localStorage.getItem('cart'));

    const exist = cartArray.some((item) => item.id === id);

    if (!exist && qty > 0) {
      localStorage.setItem('cart', JSON.stringify(
        [...cartArray, { id, name, price, quantity: qty }],
      ));
      setCart([...cartArray, { id, name, price, quantity: qty }]);
    } else {
      cartArray = JSON.parse(localStorage.getItem('cart'));
      const cartReplace = cartArray.map((item) => {
        if (item.id === id) {
          item.quantity = qty;
        }
        return item;
      }).filter((item) => item.quantity !== 0);
      localStorage.setItem('cart', JSON.stringify(cartReplace));
      setCart(cartReplace);
      // setCart((previous) => [...previous, { id, price, quantity: qty }]);
    }
  }, [qty, id, price, name, setCart]);

  const handleIncrement = () => {
    setQty((previousValue) => {
      const current = previousValue + 1;
      return current;
    });
  };

  const handleDecrement = () => {
    setQty((previousValue) => {
      const current = previousValue - 1;
      return current <= 0 ? 0 : current;
    });
  };

  return (
    <S.CardWrapper>

      <S.ProductImage
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ image }
      />

      <S.ProductName
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </S.ProductName>

      <S.ProductPrice
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { price.replace('.', ',') }
      </S.ProductPrice>

      <S.QtyWrapper>
        <S.NegativeButton
          onClick={ handleDecrement }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </S.NegativeButton>
        <S.QtyInput
          type="number"
          value={ qty }
          onChange={ ({ target: { value } }) => {
            if (value > 0) setQty(parseInt(value, 10));
          } }
          data-testid={ `customer_products__input-card-quantity-${id}` }
        />
        <S.PositiveButton
          onClick={ handleIncrement }
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          +
        </S.PositiveButton>
      </S.QtyWrapper>

    </S.CardWrapper>
  );
}

ProductCard.propTypes = {
  image: string,
  name: string,
  price: number,
  id: number,
}.isRequired;
