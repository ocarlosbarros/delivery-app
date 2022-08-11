import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../utils';
import * as S from './styled';

export default function NavBar() {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  return (
    <S.NavWrapper>
      <S.NavList>
        <S.NavItem
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </S.NavItem>
        <S.NavItem
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus Pedidos
        </S.NavItem>
        <S.NavItem
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { name }
        </S.NavItem>
        <S.NavItem
          onClick={ () => {
            logout();
            navigate('/login');
          } }
          data-testid="customer_products__element-navbar-link-logout"
        >
          Logout
        </S.NavItem>
      </S.NavList>
    </S.NavWrapper>
  );
}
