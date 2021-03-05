import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 40px 20px 0 20px;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  footer {
    position: absolute;
    bottom: 20px;

    text-align: center;
  }
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  font-weight: 500;
`;

export const Subtitle = styled.h2`
  margin-top: 10px;
  font-weight: 400;
`;

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimationContainerText = styled.div`
  margin-top: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  animation: ${appearFromTop} 1s;
`;

export const AnimationContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  animation: ${appearFromBottom} 1s;

  a {
    margin-top: 80px;

    padding: 20px 60px;

    font-size: 30px;
    font-weight: 700;
    color: #ffffff;
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #ff6409;

    border: 0;
    border-radius: 20px;

    transition: transform 0.2s;

    &:hover {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
      transform: scale(105%);
    }
  }
`;
