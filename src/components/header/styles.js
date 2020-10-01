import styled from 'styled-components';

export const Container = styled.div`
  background: black;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 50px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    height: 100%;
  }

  button {
    background: #ff9000;
    border-radius: 6px;
    border: 0;
    width: 50px;
    margin-left: 10px;
  }
  span {
    margin-right: 20px;
  }

  svg {
    transition: color 0.2s;
    &:hover {
      color: #ff9000;
    }
  }
`;
