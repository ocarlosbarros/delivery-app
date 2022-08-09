import React from 'react';
import ProductCard from '../ProductCard';

export default function ProductsList({ products }) {
  return (
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
  );
}
