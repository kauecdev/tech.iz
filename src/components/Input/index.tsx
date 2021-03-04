import React, { InputHTMLAttributes } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error: boolean;
  errorText: string;
}

const Input: React.FC<InputProps> = ({ error, errorText, ...rest }) => {
  return (
    <Container>
      <input {...rest} />

      {error && (
        <Error title={errorText}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
