import styled from 'styled-components';

// Exportando o Form
export const Form = styled.form`
  display: flex;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #201d1d;
  border-radius: 5px;
  width: 100%;
  max-width: 450px;
  gap: 30px 0px;

  h1 {
    color: white;
    font-size: 20px;
    font-weight: light;
  }

  p {
    color: white;
    font-size: 16px;
    font-weight: bold;
  }

  a {
    color: white;
    font-size: 14px;
  }
`;

// Exportando o SubContainerSign
export const SubContainerSign = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px 20px;
  align-items: center;
`;

// Adicionando o Container
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
`;
