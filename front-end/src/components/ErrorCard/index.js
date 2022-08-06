import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

export default function ErrorCard({ setError }) {
  return (
    <S.ModalCard onClick={ () => setError(false) }>
      <S.CardWrapper>
        <S.Title data-testid="common_login__element-invalid-email">Error</S.Title>
        <S.Subtitle>Email/Senha inválidos</S.Subtitle>
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
  setError: PropTypes.func.isRequired,
};
