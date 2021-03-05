import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
    transform: scale(10%);
  }
  to {
    opacity: 1;
    transform: scale(100%);
  }
`;

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 80px;
  position: relative;

  img {
    width: 30%;

    animation: ${appear} 1s;
  }

  h1 {
    font-size: 80px;
  }

  h1,
  h2 {
    animation: ${appear} 1s;
  }

  a {
    position: absolute;
    bottom: 40px;

    display: flex;
    align-items: center;

    max-width: 300px;

    text-decoration: none;
    font-size: 20px;

    color: #ffffff;

    animation: ${appearFromBottom} 1s;

    svg {
      margin-right: 16px;
    }
  }
`;
