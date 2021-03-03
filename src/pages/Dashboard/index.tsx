import React, { FormEvent, useState, useCallback } from 'react';
import { v4 as uuid } from 'uuid';

import IAlternative from './Alternative/IAlternative';

import logoImg from '../../assets/tech_iz-logo.png';

import { Container } from './styles';
import Alternative from './Alternative';

const Dashboard: React.FC = () => {
  const [question, setQuestion] = useState('');

  const [alternativeText, setAlternativeText] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  const [alternatives, setAlternatives] = useState<IAlternative[]>([]);

  const addNewAlternativeInput = useCallback(() => {
    const correctAlternative = alternatives.find(
      (alternative) => alternative.isCorrect === true,
    );

    if (alternativeText && alternatives.length < 5) {
      if (!correctAlternative) {
        const alternative: IAlternative = {
          id: uuid(),
          alternativeText,
          isCorrect,
        };

        setAlternatives([...alternatives, alternative]);
      } else if (!isCorrect) {
        const alternative: IAlternative = {
          id: uuid(),
          alternativeText,
          isCorrect,
        };

        setAlternatives([...alternatives, alternative]);
      }
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
    (e: FormEvent) => {
      e.preventDefault();

      console.log(alternatives);
    },
    [alternatives],
  );

  return (
    <Container>
      <img src={logoImg} alt="Tech.iz" width={200} />

      <h1>Adicione novas perguntas!</h1>

      <div>
        <form onSubmit={handleCreateQuestion}>
          <fieldset>
            <legend>Pergunta:</legend>
            <input
              type="text"
              placeholder="Digite aqui a pergunta..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
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
              <input
                name="alternative"
                type="text"
                placeholder="Digite aqui a alternativa..."
                value={alternativeText}
                onChange={(e) => setAlternativeText(e.target.value)}
              />

              <div
                onClick={() =>
                  isCorrect ? setIsCorrect(false) : setIsCorrect(true)
                }
              >
                <input
                  type="checkbox"
                  name="isCorrect"
                  id="isCorrect"
                  defaultChecked={isCorrect === true}
                />
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
