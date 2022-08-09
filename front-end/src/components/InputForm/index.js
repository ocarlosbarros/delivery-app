import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function InputText({ testid, value, set, placeholder }) {
  return (
    <S.InputField
      placeholder={ placeholder }
      data-testid={ testid }
      value={ value }
      onChange={ (e) => set(e.target.value) }
    />
  );
}

InputText.propTypes = {
  testid: PropTypes.string,
  value: PropTypes.string,
  set: PropTypes.func,
}.isRequired;
