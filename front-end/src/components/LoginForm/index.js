import React, { useState } from 'react';
import * as S from './styled';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <S.FormWrapper>
      <S.Form>
        <input
          data-testid="common_login__input-email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />
        <input
          data-testid="common_login__input-password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
        <button type="button" data-testid="common_login__button-login">
          Login
        </button>
        <button data-testid="common_login__button-register" type="button">
          Ainda não tenho conta
        </button>
      </S.Form>
    </S.FormWrapper>
  );
}
