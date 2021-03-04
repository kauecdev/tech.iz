import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    height: 100%;
    background: #1CB4DB;
    color: #FFFFFF;
  }

  body, input, button {
    font-family: 'Signika', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
