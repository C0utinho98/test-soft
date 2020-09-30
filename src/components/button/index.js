import React from 'react';
import { Container } from './styles';

export const Button = ({ children, ...rest }) => {
  return (
    <Container>
      <button type="button" {...rest}>
        {children}
      </button>
    </Container>
  );
};
