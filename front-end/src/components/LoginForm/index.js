import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import InputText from '../InputForm';

import * as S from './styled';
import ErrorCard from '../ErrorCard';
import BeerGIF from '../../images/beer.gif';
import ButtonForm from '../ButtonForm';
import { isValid } from '../../utils';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const NOT_FOUND = 404;

  const disabled = isValid({ email, password });
  const instance = axios.create({
    baseURL: 'http://localhost:3001/',
  });

  const handleLogin = async () => {
    try {
      await instance.post('/login', { email, password });
      navigate('/customer/products');
      // history.push('/customer/products');
    } catch (e) {
      if (e.response.status === NOT_FOUND) setError(true);
    }
    // setError(!error);
  };

  return (
    <S.LoginWrapper>
      <S.FormWrapper>
        <S.Form autoComplete="off">
          <InputText
            testid="common_login__input-email"
            value={ email }
            set={ setEmail }
          />
          <InputText
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
              testid="common_login__button-register"
              type="button"
              value="AINDA NÃO TENHO CONTA"
            />
          </div>
        </S.Form>
        {error && <ErrorCard setError={ setError } />}
      </S.FormWrapper>
      <S.RightWrapper src={ BeerGIF } />
    </S.LoginWrapper>
  );
}
