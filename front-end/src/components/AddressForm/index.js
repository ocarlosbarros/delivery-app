import React from 'react';

import * as S from './styled';

export default function AddressForm() {
  return (
    <S.AddressDetailForm>
      <S.Label>
        <p>P. Vendedora Reponsável</p>
        <S.SellerDropDown data-testid="customer_checkout__select-seller">
          <option>1</option>
        </S.SellerDropDown>
      </S.Label>

      <S.Label>
        <p>Endereço</p>
        <S.AddressInput data-testid="customer_checkout__input-address" />
      </S.Label>

      <S.Label>
        <p>Número</p>
        <S.NumberInput data-testid="customer_checkout__input-addressNumber" />
      </S.Label>
    </S.AddressDetailForm>
  );
}
