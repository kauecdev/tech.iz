import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import IAlternative from '../../../utils/IAlternative';

import { Li } from './styles';

interface IAlternativeProps {
  alternative: IAlternative;
  removeAlternative: (id: string) => void;
}

const Alternative: React.FC<IAlternativeProps> = ({
  alternative,
  removeAlternative,
}) => {
  return (
    <Li key={alternative.id}>
      <div>
        <strong>Alternativa: </strong>
        <span>{alternative.answer}</span>
      </div>

      <div>
        <strong>Alternativa correta: </strong>
        <span>{alternative.correct ? 'Sim' : 'Não'}</span>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          removeAlternative(alternative.id);
        }}
      >
        <FiTrash2 size={20} />
      </button>
    </Li>
  );
};

export default Alternative;
