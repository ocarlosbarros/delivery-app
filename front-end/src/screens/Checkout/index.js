import React from 'react';
import AddressForm from '../../components/AddressForm';
import CheckoutTable from '../../components/CheckoutTable';
import NavBar from '../../components/NavBar';

import * as S from './styled';

export default function Checkout() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  return (
    <>
      <NavBar />
      <h2>Finalizar Pedido</h2>
      <CheckoutTable cart={ cart } />
      <h2>Detalhes e endereço para entrega</h2>
      <AddressForm />
      <S.FinishButton
        data-testid="customer_checkout__button-submit-order"
      >
        Finalizar
      </S.FinishButton>
    </>
  );
}
