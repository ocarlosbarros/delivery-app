import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import InputText from '../InputForm';

import * as S from './styled';
import ErrorCard from '../ErrorCard';
import { isValidLogin, saveLogin } from '../../utils';
import LoginButtonForm from '../LoginButtonForm';
import RegisterButtonForm from '../RegisterButtonForm';
import Logo from '../Logo';
import Trail from '../Trail';
import DottedBox from '../DottedBox';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const local = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (local) {
      const { role } = local;
      const resource = role === 'customer' ? 'products' : 'orders';
      return navigate(`/${role}/${resource}`);
    }
  }, [local, navigate]);

  const NOT_FOUND = 404;

  const disabled = !isValidLogin({ email, password });
  const instance = axios.create({
    baseURL: 'http://localhost:3001/',
  });

  const handleLogin = async () => {
    try {
      const { data: { email: Email, name, role, token, id } } = await instance
        .post('/login', { email, password });
      localStorage.setItem('cart', JSON.stringify([]));

      saveLogin({ email: Email, name, role, token, id });

      if (role === 'customer') return navigate('/customer/products');
      return navigate('/seller/orders');
    } catch (e) {
      if (e.response.status === NOT_FOUND) setError(true);
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <S.FormContainer>
      <S.Ellipse />
      <S.Ellipse />
      <S.Ellipse />
      <S.Ellipse />
      <Logo />
      <Trail />
      <S.FormWrapper>
        <S.Form autoComplete="off">
          <DottedBox />
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
          <LoginButtonForm
            disabled={ disabled }
            click={ handleLogin }
            type="button"
            testid="common_login__button-login"
            value="LOGIN"
          />
          <RegisterButtonForm
            className="register"
            click={ handleRegister }
            testid="common_login__button-register"
            type="button"
            value="AINDA NÃO TENHO CONTA"
          />
        </S.Form>
        {error && <ErrorCard
          testid="common_login__element-invalid-email"
          setError={ setError }
          message="Email/Senha inválidos"
        />}
      </S.FormWrapper>
    </S.FormContainer>
  );
}
