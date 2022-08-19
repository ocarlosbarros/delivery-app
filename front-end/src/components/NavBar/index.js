import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../utils';
import * as S from './styled';

export default function NavBar() {
  const local = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const path = window.location.pathname.split('/')[2];

  useEffect(() => {
    if (!local) navigate('/login');
  }, [local, navigate]);

  return local && (
    <S.NavWrapper>
      <S.Header>DIECISIETE</S.Header>
      <S.NavList>
        {
          local.role === 'customer' && (
            <>
              <S.NavItem
                selected={ path === 'products' }
                onClick={ () => {
                  navigate('/customer/products');
                } }
                data-testid="customer_products__element-navbar-link-products"
              >
                Produtos
              </S.NavItem>
              <S.NavItem
                selected={ path === 'orders' }
                onClick={ () => {
                  navigate(`/${local.role}/orders`);
                } }
                data-testid="customer_products__element-navbar-link-orders"
              >
                Meus Pedidos
              </S.NavItem>
            </>
          )
        }
        {
          local.role === 'seller' && (
            <S.NavItem
              selected={ path === 'orders' }
              onClick={ () => {
                navigate(`/${local.role}/orders`);
              } }
              data-testid="customer_products__element-navbar-link-orders"
            >
              Pedidos
            </S.NavItem>
          )
        }
        {
          local.role === 'administrator' && (
            <S.NavItem
              onClick={ () => {
                navigate('/admin/manage');
              } }
              data-testid="customer_products__element-navbar-link-orders"
            >
              Gerenciar usuários
            </S.NavItem>
          )
        }
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
          Sair
        </S.NavItem>
      </S.NavList>
    </S.NavWrapper>
  );
}
