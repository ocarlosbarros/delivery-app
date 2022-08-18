import styled from 'styled-components';

export const teste = 1;

export const InputField = styled.input.attrs({
  type: 'text',
})`
  width: 319px;
  height: 54px;
  padding-left: 16px;
  font-size: 1rem;
  font-family: 'Inter';
  background: #FFFFFF;
  border: 1px solid #000000;
  letter-spacing: 0.05rem;

  /* SHADOW */
  box-shadow: -4px 4px 0px #000000;
  border-radius: 0px;

  ::placeholder {
    color: #000;
  }
`;
