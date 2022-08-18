import styled from 'styled-components';
import theme from '../../constants/theme';

export const teste = 1;

export const Button = styled.button`
  width: 319px;
  height: 57.87px;
  background-color: ${theme.green};
  border: 2px solid #000000;
  color: #000;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: -4px 4px 0px #000000;
  cursor: pointer;

  :disabled {
    opacity: 0.5;
    cursor: auto;
  }
`;
