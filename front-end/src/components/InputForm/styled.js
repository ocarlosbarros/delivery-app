import styled from 'styled-components';

export const teste = 1;

export const InputField = styled.input.attrs({
  type: 'text',
})`
  height: 2rem;
  border: 1px solid #c4c4c4;
  padding-left: 16px;
  font-size: 1rem;
  font-family: Helvetica, sans-serif;
  border-radius: 4px;

  :hover, :focus {
    border: 1px solid #1da1f2;
  }
`;
