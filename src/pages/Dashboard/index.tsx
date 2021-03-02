import React, { FormEvent, useState } from 'react';

import logoImg from '../../assets/tech_iz-logo.png';

import { Container } from './styles';

import Inputs from '../../components/Inputs';

interface Alternatives {
  alternative: string;
  isCorrect: boolean;
}

const Dashboard: React.FC = () => {
  const [question, setQuestion] = useState('');

  const [alternatives, setAlternatives] = useState<Alternatives[]>([
    {
      alternative: '',
      isCorrect: false,
    },
  ]);

  function addNewAlternativeInput(): void {
    setAlternatives([...alternatives, { alternative: '', isCorrect: false }]);
  }

  function setAlternativeItemValue(
    position: number,
    field: string,
    value: string,
  ): void {
    const updatedAlternatives = alternatives.map((alternative, index) => {
      if (index === position) {
        return { ...alternative, [field]: value };
      }

      return alternative;
    });

    setAlternatives(updatedAlternatives);
  }

  function handleCreateAlternative(e: FormEvent): void {
    e.preventDefault();

    console.log(alternatives);
  }

  return (
    <Container>
      <img src={logoImg} alt="Tech.iz" width={200} />

      <h1>Adicione novas perguntas!</h1>

      <form onSubmit={handleCreateAlternative}>
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

          {alternatives.map((alternative, index) => {
            return (
              <Inputs
                name="alternative"
                id="alternative"
                type="text"
                placeholder="Digite aqui a alternativa..."
                value={alternative.alternative}
                onChange={(e) =>
                  setAlternativeItemValue(index, 'alternative', e.target.value)
                }
              />
            );
          })}
        </fieldset>

        <button type="submit">Salvar</button>
      </form>
    </Container>
  );
};

export default Dashboard;
