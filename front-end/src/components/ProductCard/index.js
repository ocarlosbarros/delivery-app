import React, { useState } from 'react';
import { string, number } from 'prop-types';

import * as S from './styled';

export default function ProductCard({ image, name, price, id }) {
  const [qty, setQty] = useState(0);
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
          onClick={ () => {
            setQty((previousValue) => {
              const current = previousValue - 1;
              return current <= 0 ? 0 : current;
            });
          } }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </S.NegativeButton>
        <S.QtyInput
          value={ qty }
          readOnly
          data-testid={ `customer_products__input-card-quantity-${id}` }
        />
        <S.PositiveButton
          onClick={ () => {
            setQty((previousValue) => {
              const current = previousValue + 1;
              return current;
            });
          } }
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
