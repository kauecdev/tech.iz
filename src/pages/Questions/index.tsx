import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import {
  Container,
  QuestionTitle,
  AlternativesContainer,
  QuestionAlternative,
} from './styles';

const Questions: React.FC = () => {
  return (
    <Container>
      <QuestionTitle>1. Lorem ipsum</QuestionTitle>

      <AlternativesContainer>
        <QuestionAlternative>
          <span>a. Lorem Ipsum</span>
        </QuestionAlternative>

        <QuestionAlternative>
          <span>a. Lorem Ipsum</span>
        </QuestionAlternative>

        <QuestionAlternative>
          <span>a. Lorem Ipsum</span>
        </QuestionAlternative>

        <QuestionAlternative>
          <span>a. Lorem Ipsum</span>
        </QuestionAlternative>

        <QuestionAlternative>
          <span>a. Lorem Ipsum</span>
        </QuestionAlternative>
      </AlternativesContainer>

      <Link to="/">
        <FiArrowLeft size={20} />
        Voltar para página inicial
      </Link>
    </Container>
  );
};

export default Questions;
