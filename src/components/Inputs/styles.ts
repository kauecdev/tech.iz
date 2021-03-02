import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  input {
    width: 100%;
    border: 0;
    padding: 14px;
    border-radius: 6px;
    margin-right: 20px;

    font-size: 18px;
  }

  & + div {
    margin-top: 20px;
  }

  input[type='text'] {
    margin-right: 20px;
  }

  input[type='radio'] {
    all: unset;
    width: 30px;
    height: 30px;
    border-radius: 50%;

    background: #fff;
    border: 8px solid #c7c4c4;
  }

  input[type='radio']:checked {
    background: #ff6409;
    border-color: #1cb4db;
  }
`;
