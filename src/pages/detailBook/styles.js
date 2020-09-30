import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(24, 22, 31, 0.3);
  padding: 20px;
  border-radius: 8px;
`;

export const Detail = styled.div`
  display: flex;
  background: #232129;
  padding: 10px;
  margin-bottom: 10px;
  strong {
    width: 20%;
    min-width: 120px;
    border-right: 2px solid #666360;
    margin-right: 5px;
  }

  span {
    min-width: 150px;
  }
`;
