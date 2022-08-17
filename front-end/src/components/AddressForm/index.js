import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

import * as S from './styled';

export default function AddressForm() {
  const [sellers, setSellers] = useState([]);
  const [user, setUser] = useState({});
  const [sellerId, setSellerId] = useState();
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const { cart: products } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSellers = async () => {
      const instance = axios.create({
        baseURL: 'http://localhost:3001/',
      });
      const { data } = await instance.get('/register/sellers');
      if (data) {
        await setSellers(() => {
          setSellerId(Number(data[0].id));
          return data;
        });
      }
    };
    fetchSellers();
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  const handleSale = async (e) => {
    e.preventDefault();
    const { id, token: authorization } = user;
    const instance = axios.create({
      baseURL: 'http://localhost:3001/',
    });

    const sale = {
      id,
      sellerId,
      deliveryAddress,
      deliveryNumber,
      products,
    };

    const { data: { id: orderId } } = await instance
      .post('/customer/orders', sale, { headers: { authorization } });
    navigate(`/customer/orders/${orderId}`);
  };

  return (
    <S.AddressDetailForm>
      <S.Label>
        <p>P. Vendedora Reponsável</p>
        <S.SellerDropDown
          data-testid="customer_checkout__select-seller"
          value={ sellerId }
          onChange={ (e) => setSellerId(e.target.value) }
        >
          {
            sellers.map(({ id }, index) => (
              <option
                key={ index }
                value={ id }
              >
                {index + 1}
              </option>
            ))
          }
        </S.SellerDropDown>
      </S.Label>

      <S.Label>
        <p>Endereço</p>
        <S.AddressInput
          value={ deliveryAddress }
          onChange={ ({ target: { value } }) => setDeliveryAddress(value) }
          data-testid="customer_checkout__input-address"
        />
      </S.Label>

      <S.Label>
        <p>Número</p>
        <S.NumberInput
          value={ deliveryNumber }
          onChange={ ({ target: { value } }) => setDeliveryNumber(value) }
          data-testid="customer_checkout__input-addressNumber"
        />
      </S.Label>
      <S.FinishButton
        onClick={ handleSale }
        data-testid="customer_checkout__button-submit-order"
      >
        Finalizar
      </S.FinishButton>
    </S.AddressDetailForm>
  );
}
