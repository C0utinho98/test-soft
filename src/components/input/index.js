import React, { useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error } from './styles';

export const Input = ({ Icon, inputRef, error, msgError, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container isFocused={isFocused} isError={error}>
      {Icon && <Icon size={20} />}
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
