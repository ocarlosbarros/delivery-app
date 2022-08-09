import styled from 'styled-components';

export const teste = 1;

export const Button = styled.button`
  height: 2rem;
  flex: 1;
  background-color: #2A75A3;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  
  
  :disabled {
    // background-color: #2A75A3;
    opacity: 0.5;
    color: white;
  }
  
  :hover, :disabled {
    background-color: #1da1f2;
  }
`;
