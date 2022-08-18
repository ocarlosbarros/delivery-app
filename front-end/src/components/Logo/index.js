import React from 'react';

import * as S from './styled';

import diecisiete from '../../images/diecisiete.svg';

export default function Logo() {
  return (
    <S.LogoWrapper>
      <S.Image src={ diecisiete } />
    </S.LogoWrapper>
  );
}
