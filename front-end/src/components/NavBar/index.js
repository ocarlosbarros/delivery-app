import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../utils';
import * as S from './styled';

export default function NavBar() {
  const local = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  useEffect(() => {
    if (!local) navigate('/login');
  }, [local, navigate]);

  return local && (
    <S.NavWrapper>
      <S.NavList>
        <S.NavItem
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </S.NavItem>
        <S.NavItem
          onClick={ () => {
            navigate(`/customer/orders/${local.id}`);
          } }
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus Pedidos
        </S.NavItem>
        <S.NavItem
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { local.name }
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
