import styled from 'styled-components';

export const Li = styled.li`
  list-style: none;
  color: #222222;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 10px;

  & + li {
    margin-bottom: 10px;
  }

  div:first-of-type {
    min-width: 50%;
    width: 50%;
  }

  div {
    padding-right: 20px;

    display: flex;
    flex-direction: column;
  }

  button {
    border: 0;
  }
`;
