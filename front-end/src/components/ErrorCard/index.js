import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

export default function ErrorCard({ setError, testid }) {
  return (
    <S.ModalCard onClick={ () => setError(false) }>
      <S.CardHeader />
      <S.CardWrapper>
        <S.Title
          data-testid={ testid }
        >
          {'CREDENCIAIS\nINVÁLIDAS'}
        </S.Title>
        <S.Button
          type="button"
          onClick={
            () => setError(false)
          }
        >
          OK
        </S.Button>
      </S.CardWrapper>
    </S.ModalCard>
  );
}

ErrorCard.propTypes = {
  setError: PropTypes.func,
  testid: PropTypes.string,
}.isRequired;
