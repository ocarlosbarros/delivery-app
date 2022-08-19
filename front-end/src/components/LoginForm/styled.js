import styled from 'styled-components';
import theme from '../../constants/theme';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  margin: auto;
  padding: 0 1rem;
  gap: 10px;
  justify-content: center;
  align-items: flex-end;
  z-index: 100;
`;

export const FormWrapper = styled.section`
  height: 100vh;
  width: 60vw;
  padding: 0 4rem;
  display: flex;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #efede4;
`;

export const RightWrapper = styled.img`
  border-radius: 32px;
  padding: 1rem;
  height: 100vh;
  width: 40vw;
`;

export const Ellipse = styled.figure`
  position: fixed;
  border-radius: 100%;
  margin: 0;
  overflow: hidden;

  :nth-child(1) {
    background: ${theme.pink};
    width: 250px;
    height: 250px;
    top: -125px;
    left: 30%;
  }

  :nth-child(2) {
    background: ${theme.yellow};
    width: 200px;
    height: 200px;
    top: 30%;
    right: 30px;
  }

  :nth-child(3) {
    background: ${theme.blue};
    width: 100px;
    height: 100px;
    bottom: 30px;
    right: 50%;
  }

  :nth-child(4) {
    background: ${theme.green};
    width: 250px;
    height: 250px;
    bottom: -125px;
    left: -125px;
  }
`;
