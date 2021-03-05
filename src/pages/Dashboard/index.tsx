import React, { FormEvent, useState, useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import * as Yup from 'yup';

import { FiHelpCircle } from 'react-icons/fi';
import api from '../../services/api';

import IAlternative from '../../utils/IAlternative';

import logoImg from '../../assets/tech_iz-logo.png';

import Modal from '../../components/Modal';

import { Container, Help } from './styles';

import Alternative from './Alternative';
import Input from '../../components/Input';

interface IQuestion {
  code: number;
  question: string;
  answers: [];
}

const Dashboard: React.FC = () => {
  const [modal, setModal] = useState(false);

  const [questionText, setQuestionText] = useState('');

  const [alternativeText, setAlternativeText] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const [alternatives, setAlternatives] = useState<IAlternative[]>([]);

  const addNewAlternativeInput = useCallback(() => {
    const correctAlternative = alternatives.find(
      (alternative) => alternative.correct === true,
    );

    if (alternativeText && alternatives.length < 5) {
      if (!correctAlternative) {
        const alternative: IAlternative = {
          id: uuid(),
          answer: alternativeText,
          correct: isCorrect,
        };

        setAlternativeText('');
        setIsCorrect(false);
        setError(false);
        setAlternatives([...alternatives, alternative]);
      } else if (!isCorrect) {
        const alternative: IAlternative = {
          id: uuid(),
          answer: alternativeText,
          correct: isCorrect,
        };

        setAlternativeText('');
        setIsCorrect(false);
        setError(false);
        setAlternatives([...alternatives, alternative]);
      }
    } else {
      setError(true);
      setIsCorrect(false);
      setErrorText('O texto é necessário');
    }
  }, [alternatives, alternativeText, isCorrect]);

  const removeAlternative = useCallback(
    (id: string) => {
      const index = alternatives.findIndex(
        (alternative) => alternative.id === id,
      );

      if (index >= 0) {
        const list = alternatives;

        list.splice(index, 1);

        setAlternatives([...list]);
      }
    },
    [alternatives, setAlternatives],
  );

  const handleCreateQuestion = useCallback(
    async (e: FormEvent) => {
      try {
        e.preventDefault();

        const schema = Yup.object().shape({
          questionText: Yup.string().required('O texto é necessário.'),
        });

        await schema.validate(
          {
            questionText,
          },
          {
            abortEarly: false,
          },
        );

        await api.post('/questions', { question: questionText });

        const questions = await api.get('/questions');

        const questionId = questions.data.find(
          (question: IQuestion) => question.question === questionText,
        );

        alternatives.map(async (alternative) => {
          const data = {
            answer: alternative.answer,
            correct: alternative.correct,
          };

          api.post(`/questions/${questionId.code}`, data);
        });

        setQuestionText('');
        setAlternatives([]);
        setError(false);
        setModal(true);

        setTimeout(() => {
          setModal(false);
        }, 2500);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          setError(true);
          setErrorText(err.errors[0]);
        }
      }
    },
    [questionText, alternatives],
  );

  return (
    <Container>
      <Modal type="success" modalOn={modal}>
        Pergunta e respostas salvas com sucesso!
      </Modal>
      <img src={logoImg} alt="Tech.iz" width={200} />

      <h1>Adicione novas perguntas!</h1>

      <div className="container-form">
        <form onSubmit={handleCreateQuestion}>
          <fieldset>
            <legend>Pergunta:</legend>
            <Input
              error={error}
              name="question"
              type="text"
              errorText={errorText}
              placeholder="Digite aqui a pergunta..."
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
            />
          </fieldset>

          <fieldset className="alternatives">
            <header>
              <legend>Alternativas:</legend>
              <button type="button" onClick={addNewAlternativeInput}>
                Nova alternativa +
              </button>
            </header>

            <div>
              <Input
                error={error}
                name="alternative"
                errorText={errorText}
                type="text"
                placeholder="Digite aqui a alternativa..."
                value={alternativeText}
                onChange={(e) => setAlternativeText(e.target.value)}
              />

              <div
                className="checkbox"
                onClick={() =>
                  isCorrect ? setIsCorrect(false) : setIsCorrect(true)
                }
              >
                <input
                  type="checkbox"
                  name="isCorrect"
                  id="isCorrect"
                  checked={isCorrect === true}
                />

                <Help title="Marque caso seja a alternativa correta">
                  <FiHelpCircle color="#222222" size={20} />
                </Help>
              </div>
            </div>
          </fieldset>

          <button type="submit">Enviar</button>
        </form>

        <ul>
          {alternatives[0] &&
            alternatives.map((alternative) => (
              <Alternative
                alternative={alternative}
                removeAlternative={removeAlternative}
              />
            ))}
        </ul>
      </div>
    </Container>
  );
};

export default Dashboard;
