import styled from 'styled-components';
import imgBackground from '../../assets/livraria.jpeg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 25px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${imgBackground}) no-repeat center;
  background-size: cover;
`;
