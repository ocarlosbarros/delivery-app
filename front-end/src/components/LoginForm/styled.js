import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  margin: auto;
  padding: 0 1rem;
  gap: 1rem;
  justify-content: center;
`;

export const FormWrapper = styled.section`
  height: 100vh;
  width: 60vw;
  padding: 0 4rem;
  display: flex;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #efede4;
`;

export const RightWrapper = styled.img`
  border-radius: 32px;
  padding: 1rem;
  height: 100vh;
  width: 40vw;
`;
