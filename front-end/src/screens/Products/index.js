import React, { useState } from 'react';
import axios from 'axios';
import ProductsList from '../../components/ProductsList';
import NavBar from '../../components/NavBar';
import { CartProvider } from '../../context/CartContext';
/* import arrMock from '../../mock/ProductsMock'; */

export default function Products() {
  const [products, setProducts] = useState([]);

  const instance = axios.create({
    baseURL: 'http://localhost:3001/',
  });
  useState(() => {
    try {
      instance.get('/customer/products')
        .then((result) => {
          setProducts(result.data);
        });
      /* setProducts(arrMock); */
    } catch (e) {
      if (e.response.status === NOT_FOUND) setError(true);
    }
  }, []);

  return (
    <CartProvider>
      <NavBar />
      <ProductsList products={ products } />
    </CartProvider>
  );
}
