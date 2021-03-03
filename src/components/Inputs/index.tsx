import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isCorrect: boolean;
}

const Inputs: React.FC<InputProps> = ({ isCorrect, ...rest }) => {
  return (
    <Container>
      <input {...rest} />
    </Container>
  );
};

export default Inputs;
