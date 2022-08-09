import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

export default function ErrorCard({ setError, testid, message }) {
  return (
    <S.ModalCard onClick={ () => setError(false) }>
      <S.CardWrapper>
        <S.Title
          data-testid={ testid }
        >
          Error
        </S.Title>
        <S.Subtitle>{ message }</S.Subtitle>
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
