import styled from 'styled-components';

export const Title = styled.p`
  font-weight: bold;
  font-size: 1.25rem;
  color: #14171a;
  font-family: Helvetica;
`;

export const Subtitle = styled.p`
  color: #657786;
  font-size: 1rem;
  font-family: Helvetica;
`;

export const Button = styled.button`
  width: 80%;
  background-color: #1da1f2;
  color: white;
  border: none;
  border-radius: 32px;
  height: 2.5rem;
  font-weight: bold;

  :hover, :active, :focus, :checked {
    background-color: #136ea5;
    border: none;
  }
`;

export const CardWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const ModalCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.3);
  display: flex;
  position: absolute;
  left: 0;
  align-items: center;
  justify-content: center;
`;
