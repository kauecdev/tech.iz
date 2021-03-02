import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Title,
  Subtitle,
  AnimationContainerText,
  AnimationContainerButton,
} from './styles';

import logoImg from '../../assets/tech_iz-logo.png';

const Home: React.FC = () => {
  return (
    <Container>
      <AnimationContainerText>
        <Title>Seja Bem-vindo ao</Title>

        <img src={logoImg} alt="Tech.iz" width={500} />

        <Subtitle>
          Jogo de perguntas e respostas sobre o mundo da tecnologia
        </Subtitle>
      </AnimationContainerText>

      <AnimationContainerButton>
        <Link to="/questions">Iniciar Jogo</Link>
      </AnimationContainerButton>
    </Container>
  );
};

export default Home;
