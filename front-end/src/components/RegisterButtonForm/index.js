import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

export default function RegisterButtonForm({
  type, testid, click, value, disabled, className }) {
  return (
    <S.Button
      className={ className }
      disabled={ disabled }
      data-testid={ testid }
      type={ type }
      onClick={ click }
    >
      { value }
    </S.Button>
  );
}

RegisterButtonForm.propTypes = {
  type: PropTypes.string,
  testid: PropTypes.string,
  click: PropTypes.func,
  value: PropTypes.string,
}.isRequired;
