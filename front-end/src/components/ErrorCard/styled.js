import styled from 'styled-components';
import theme from '../../constants/theme';

export const Title = styled.p`
  font-weight: light;
  font-size: 1.25rem;
  color: #14171a;
  font-family: 'Inter';
`;

export const Button = styled.button`
  width: 80%;
  background-color: #1da1f2;
  color: #000;
  height: 2.5rem;
  font-weight: bold;

  background: #FFFFFF;
  border: 1px solid #000000;
  box-shadow: 0px 4px 0px 2px #000000;
`;

export const CardWrapper = styled.div`
  background-color: ${theme.yellow};
  width: 358px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid #000000;
  pointer-events: none;
`;

export const CardHeader = styled.div`
  top: 0;
  width: 358px;
  height: 54px;
  left: 0px;
  top: 0px;
  background-color: #000;
`;

export const ModalCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.3);
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  align-items: center;
  justify-content: center;
  z-index: 200;
`;
