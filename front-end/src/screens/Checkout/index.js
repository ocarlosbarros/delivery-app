import React from 'react';
import { CartProvider } from '../../context/CartContext';
import AddressForm from '../../components/AddressForm';
import CheckoutTable from '../../components/CheckoutTable';
import NavBar from '../../components/NavBar';

export default function Checkout() {
  return (
    <CartProvider>
      <NavBar />
      <h2>Finalizar Pedido</h2>
      <CheckoutTable />
      <h2>Detalhes e endereço para entrega</h2>
      <AddressForm />
    </CartProvider>
  );
}
