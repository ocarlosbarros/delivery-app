import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function SelectForm({ testid, options, set }) {
  return (
    <S.SelectField
      onChange={ ({ target: { value } }) => set(value) }
      data-testid={ testid }
    >
      {
        options.map((option, index) => (
          <option key={ index }>{ option }</option>
        ))
      }
    </S.SelectField>
  );
}

SelectForm.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
}.isRequired;
