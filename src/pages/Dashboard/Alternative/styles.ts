import styled from 'styled-components';

export const Li = styled.li`
  list-style: none;
  color: #222222;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 10px;

  & + li {
    margin-bottom: 10px;
  }

  div:first-of-type {
    width: 50%;
  }

  div {
    padding: 0 20px;

    display: flex;
    flex-direction: column;
  }

  button {
    border: 0;
  }
`;
