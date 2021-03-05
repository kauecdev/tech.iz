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
  const [questionNumber, setQuestionNumber] = useState(0);

  const [correctQuestion, setCorrectQuestion] = useState(false);

  const shuffleArray = useCallback(
    (array: Array<IAlternative>): Array<IAlternative> => {
      return array.sort(() => Math.random() - 0.5);
    },
    [],
  );

  useEffect(() => {
    async function fetchQuestionsAndAlternatives(): Promise<void> {
      const response = await api.get('/questions');

      const questionsResponse = response.data;

      const firstQuestionText = questionsResponse[questionNumber].question;
      const firstQuestionAlternatives =
        questionsResponse[questionNumber].answers;

      const shuffledAlternatives = shuffleArray(firstQuestionAlternatives);

      setQuestions(questionsResponse);
      setQuestionText(firstQuestionText);
      setAlternatives(shuffledAlternatives);
    }
    fetchQuestionsAndAlternatives();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const verifyCorrectAnswer = useCallback(
    (e) => {
      const alternativeTargetText = e.target.textContent;

      const matchedAlternative = alternatives.find(
        (alternative) => alternative.answer === alternativeTargetText,
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
    if (questions[questionNumber + 1] === undefined) {
      history.push('/congratulations');
    } else {
      const shuffledAlternatives = shuffleArray(
        questions[questionNumber + 1].answers,
      );

      setCorrectQuestion(false);
      setQuestionText(questions[questionNumber + 1].question);
      setAlternatives(shuffledAlternatives);
    }
  }, [questions, questionNumber, history, shuffleArray]);

  return (
    <Container>
      <Modal type="error" modalOn={modal}>
        Você errou! Tente novamente.
      </Modal>
      <QuestionTitle>
        {questionNumber + 1}. {questionText}
      </QuestionTitle>

      <AlternativesContainer>
        {alternatives.map((alternative) => {
          return (
            <QuestionAlternative
              key={alternative.id}
              onClick={verifyCorrectAnswer}
            >
              <span>{alternative.answer}</span>
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
            <button
              type="button"
              onClick={() => {
                setQuestionNumber(questionNumber + 1);
                handleNextQuestion();
              }}
            >
              Avançar
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default Questions;
