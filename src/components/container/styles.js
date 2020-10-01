import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    border-radius: 4px;
  }
`;
