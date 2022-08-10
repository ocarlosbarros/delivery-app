import styled from 'styled-components';

export const teste = 1;

export const CartButton = styled.button`
  display: flex;
  flex-direction: row;
  height: 2rem;
  flex: 1;
  background-color: #2A75A3;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  
  :hover, :disabled {
    background-color: #1da1f2;
  }
`;
