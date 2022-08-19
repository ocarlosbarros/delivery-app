import React from 'react';
import { string } from 'prop-types';
import * as S from './styled';
import LoginButtonForm from '../LoginButtonForm';

export default function UserCard({ id, name, email, role }) {
  return (
    <S.CardWrapper>
      <S.UserId
        data-testid={ `admin_manage__element-user-table-item-number-${id}` }
      >
        { id }
      </S.UserId>
      <S.UserName
        data-testid={ `admin_manage__element-user-table-name-${id}` }
      >
        { name }
      </S.UserName>
      <S.UserEmail
        data-testid={ `admin_manage__element-user-table-email-${id}` }
      >
        { email }
      </S.UserEmail>
      <S.UserRole
        data-testid={ `admin_manage__element-user-table-role-${id}` }
      >
        { role }
      </S.UserRole>
      <LoginButtonForm
        testid={ `admin_manage__element-user-table-remove-${id}` }
        type="submit"
        value="Excluir"
      />
    </S.CardWrapper>
  );
}

UserCard.propTypes = {
  id: string,
  name: string,
  email: string,
  role: string,
}.isRequired;
