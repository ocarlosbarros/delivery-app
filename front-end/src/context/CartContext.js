import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const value = useMemo(() => ({ cart, setCart }), [cart, setCart]);

  return <CartContext.Provider value={ value }>{ children }</CartContext.Provider>;
}

export { CartProvider, CartContext };

CartProvider.propTypes = {
  children: PropTypes.objectOf(),
}.isRequired;
