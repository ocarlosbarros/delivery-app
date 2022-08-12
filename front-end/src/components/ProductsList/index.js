import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';
import { CartContext } from '../../context/CartContext';
import { totalPrice } from '../../utils';

export default function ProductsList({ products }) {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const disabled = cart.length === 0;

  return (
    <>
      {
        products.length > 0 && products
          .map(({ id, name, price, url_image: image }, index) => (
            <ProductCard
              key={ index }
              id={ id }
              name={ name }
              price={ price }
              image={ image }
            />
          ))
      }
      <div>
        <p
          data-testid="customer_products__checkout-bottom-value"
        >
          {
            totalPrice(cart)
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
          }
        </p>
        <button
          type="button"
          onClick={ () => navigate('/customer/checkout') }
          disabled={ disabled }
          data-testid="customer_products__button-cart"
        >
          Finalizar compra
        </button>
      </div>
    </>
  );
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    url_image: PropTypes.string,
  }),
}.isRequired;
