import React, { useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { Container, Error } from './styles';
import { Tooltip } from '../tooltip';

export const Input = ({ Icon, inputRef, error, msgError, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container isFocused={isFocused} isError={error}>
      {Icon && (
        <Tooltip title={rest.placeholder}>
          <Icon size={20} />
        </Tooltip>
      )}
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
        ref={inputRef}
      />
      {error && (
        <Error title={msgError}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

Input.propTypes = {
  Icon: PropTypes.func,
  inputRef: PropTypes.func,
  error: PropTypes.bool,
  msgError: PropTypes.string,
};
