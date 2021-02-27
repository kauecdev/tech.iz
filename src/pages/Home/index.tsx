import React from 'react';

import {
  Container,
  Title,
  Subtitle,
  AnimationContainerText,
  AnimationContainerButton,
} from './styles';

import Button from '../../components/Button';

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
        <Button>Iniciar Jogo</Button>
      </AnimationContainerButton>
    </Container>
  );
};

export default Home;
