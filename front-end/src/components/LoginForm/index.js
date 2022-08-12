import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import InputText from '../InputForm';

import * as S from './styled';
import ErrorCard from '../ErrorCard';
import BeerGIF from '../../images/beer.gif';
import ButtonForm from '../ButtonForm';
import { isValidLogin, saveLogin } from '../../utils';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const NOT_FOUND = 404;

  const disabled = !isValidLogin({ email, password });
  const instance = axios.create({
    baseURL: 'http://localhost:3001/',
  });

  const handleLogin = async () => {
    /* localStorage.setItem('CART', JSON.stringify([]));
    navigate('/customer/products'); */
    try {
      const { data: { email: Email, name, role, token } } = await instance
        .post('/login', { email, password });
      localStorage.setItem('cart', JSON.stringify([]));

      saveLogin({ Email, name, role, token });

      navigate('/customer/products');
    } catch (e) {
      if (e.response.status === NOT_FOUND) setError(true);
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <S.FormContainer>
      <S.FormWrapper>
        <S.Form autoComplete="off">
          <InputText
            placeholder="Email"
            testid="common_login__input-email"
            value={ email }
            set={ setEmail }
          />
          <InputText
            placeholder="Senha"
            testid="common_login__input-password"
            value={ password }
            set={ setPassword }
          />
          <div
            style={ {
              display: 'flex',
              flexDirection: 'row-reverse',
              gap: '1rem',
            } }
          >
            <ButtonForm
              disabled={ disabled }
              click={ handleLogin }
              type="button"
              testid="common_login__button-login"
              value="LOGIN"
            />
            <ButtonForm
              click={ handleRegister }
              testid="common_login__button-register"
              type="button"
              value="AINDA NÃO TENHO CONTA"
            />
          </div>
        </S.Form>
        {error && <ErrorCard
          testid="common_login__element-invalid-email"
          setError={ setError }
          message="Email/Senha inválidos"
        />}
      </S.FormWrapper>
      <S.RightWrapper src={ BeerGIF } />
    </S.FormContainer>
  );
}
