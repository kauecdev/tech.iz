import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Inputs: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <Container>
      <input {...rest} />

      <input type="radio" name="isCorrect" id="isCorrect" />
    </Container>
  );
};

export default Inputs;
