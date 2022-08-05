import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

export default function ButtonForm({ type, testid, click, value }) {
  return (
    <S.Button
      data-testid={ testid }
      type={ type }
      onClick={ click }
    >
      { value }
    </S.Button>
  );
}

ButtonForm.propTypes = {
  type: PropTypes.string,
  testid: PropTypes.string,
  click: PropTypes.func,
  value: PropTypes.string,
}.isRequired;
