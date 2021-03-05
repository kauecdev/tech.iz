import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import IAlternative from '../../utils/IAlternative';

import api from '../../services/api';

import {
  Container,
  QuestionTitle,
  AlternativesContainer,
  QuestionAlternative,
} from './styles';

import Modal from '../../components/Modal';

interface IQuestions {
  code: number;
  question: string;
  answers: [IAlternative];
}

const Questions: React.FC = () => {
  const history = useHistory();

  const [modal, setModal] = useState(false);

  const [questions, setQuestions] = useState<IQuestions[]>([]);
  const [questionText, setQuestionText] = useState('');
  const [alternatives, setAlternatives] = useState<IAlternative[]>([]);
  const [questionNumber, setQuestionNumber] = useState(1);

  const [correctQuestion, setCorrectQuestion] = useState(false);

  useEffect(() => {
    async function fetchQuestionsAndAlternatives(): Promise<void> {
      const response = await api.get('/questions');

      const questionsResponse = response.data;

      const firstQuestionText = questionsResponse[0].question;
      const firstQuestionAlternatives = questionsResponse[0].answers;

      setQuestions(questionsResponse);
      setQuestionText(firstQuestionText);
      setAlternatives(firstQuestionAlternatives);
    }
    fetchQuestionsAndAlternatives();
  }, []);

  const verifyCorrectAnswer = useCallback(
    (e) => {
      const alternativeTargetText = e.target.textContent;

      const alternativeTextSpliced = alternativeTargetText.slice(3);

      const matchedAlternative = alternatives.find(
        (alternative) => alternative.answer === alternativeTextSpliced,
      );

      if (matchedAlternative?.correct) {
        setCorrectQuestion(true);
      } else {
        setModal(true);
        setTimeout(() => {
          history.push('/');
        }, 2500);
      }
    },
    [alternatives, history],
  );

  const handleNextQuestion = useCallback(() => {
    setCorrectQuestion(false);
    setQuestionText(questions[1].question);
    setAlternatives(questions[1].answers);
  }, [questions]);

  return (
    <Container>
      <Modal type="error" modalOn={modal}>
        Você errou! Tente novamente.
      </Modal>
      <QuestionTitle>
        {questionNumber}. {questionText}
      </QuestionTitle>

      <AlternativesContainer>
        {alternatives.map((alternative) => {
          return (
            <QuestionAlternative
              key={alternative.id}
              onClick={verifyCorrectAnswer}
            >
              <span>a. {alternative.answer}</span>
            </QuestionAlternative>
          );
        })}
      </AlternativesContainer>

      <div className="bottom-links">
        <Link to="/">
          <FiArrowLeft size={20} />
          Voltar para página inicial
        </Link>
        {correctQuestion && (
          <>
            <span>
              Parabéns, você acertou! Clique no botão ao lado para continuar.
            </span>
            <button type="button" onClick={handleNextQuestion}>
              Avançar
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default Questions;
