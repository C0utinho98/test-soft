import styled from 'styled-components';

export const DivInput = styled.div`
  margin: 20px 0;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(24, 22, 31, 0.3);
  padding: 20px;
  border-radius: 8px;
`;

export const Info = styled.li`
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-radius: 4px;
  background: #232129;

  svg {
    color: #333;
    transition: color 0.2s;
    &:hover {
      color: #ff9000;
    }
  }
`;

export const NoMeetups = styled.text`
  margin: 300px auto;
  color: rgba(255, 255, 255, 0.6);
`;
