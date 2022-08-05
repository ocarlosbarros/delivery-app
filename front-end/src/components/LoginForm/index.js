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
        <input
          data-testid="common_login__button-login"
          type="button"
          value="Login"
        />
        <input
          data-testid="common_login__button-register"
          type="button"
          value="Ainda não tenho conta"
        />
      </S.Form>
    </S.FormWrapper>
  );
}
