import React, { useState } from 'react';
import axios from 'axios';

import InputText from '../InputForm';

import * as S from './styled';
import ErrorCard from '../ErrorCard';
import BeerGIF from '../../images/beer.gif';
import ButtonForm from '../ButtonForm';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const NOT_FOUND = 404;

  const handleLogin = () => {
    axios.post('localhost:3001/login', { email, password }).then((res) => {
      if (res.status === NOT_FOUND) setError(true);
    });
    // setError(!error);
  };

  return (
    <S.LoginWrapper>
      <S.FormWrapper>
        <S.Form autoComplete="off">
          <InputText
            data-testid="common_login__input-email"
            value={ email }
            set={ setEmail }
          />
          <InputText
            data-testid="common_login__input-password"
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
