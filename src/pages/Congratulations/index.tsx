import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import starsImg from '../../assets/stars.png';

import { Container } from './styles';

const Congratulations: React.FC = () => {
  return (
    <Container>
      <img src={starsImg} alt="stars" />
      <h1>Parabéns!</h1>
      <h2>Você acertou todas as questões</h2>

      <Link to="/">
        <FiArrowLeft size={20} />
        Voltar para página inicial
      </Link>
    </Container>
  );
};

export default Congratulations;
