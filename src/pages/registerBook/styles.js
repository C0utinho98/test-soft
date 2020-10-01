import styled from 'styled-components';

export const Content = styled.form`
  width: 100%;
  height: 100%;
  background: rgba(24, 22, 31, 0.3);
  padding: 20px;
  border-radius: 8px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-top: 10px;
  height: 65px;
  u {
    padding-left: 5px;
    cursor: pointer;
    font-size: 13px;
  }
  transition: color 0.2s;

  div {
    display: flex;
    cursor: pointer;
    align-items: center;
    &:hover {
      color: #ff9000;
    }
  }
`;
