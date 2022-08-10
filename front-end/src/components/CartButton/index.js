import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styled';

export default function CartButton() {
  const navigate = useNavigate();

  return (
    <S.CartButton
      type="button"
      onClick={ () => navigate('/customer/checkout') }
    >
      <h2>Carrinho</h2>
      <h2>{ valorTotal }</h2>
    </S.CartButton>
  );
}
