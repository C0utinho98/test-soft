import React from 'react';
import PropTypes from 'prop-types';
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

Button.propTypes = {
  children: PropTypes.node,
};
