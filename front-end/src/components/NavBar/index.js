import React from 'react';
import * as S from './styled';

export default function NavBar() {
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
          Usuário
        </S.NavItem>
        <S.NavItem
          data-testid="customer_products__element-navbar-link-logout"
        >
          Logout
        </S.NavItem>
      </S.NavList>
    </S.NavWrapper>
  );
}
