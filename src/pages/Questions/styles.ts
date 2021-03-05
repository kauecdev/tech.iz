import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div.bottom-links {
    width: 100%;
    padding: 0 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;

      max-width: 300px;

      text-decoration: none;
      font-size: 20px;

      color: #ffffff;

      svg {
        margin-right: 16px;
      }
    }

    span {
      font-size: 20px;
      background: #02c934;
      padding: 10px 20px;
      border-radius: 10px;
    }

    button {
      padding: 10px 20px;

      font-size: 20px;
      font-weight: 500;
      color: #ffffff;

      display: flex;
      align-items: center;
      justify-content: center;

      background: #ff6409;

      border: 0;
      border-radius: 10px;
    }
  }
`;

export const QuestionTitle = styled.span`
  font-weight: 600;
  font-size: 28px;
  color: #ffffff;
`;

export const AlternativesContainer = styled.div`
  width: 100%;
  padding: 20px 40px;
`;

export const QuestionAlternative = styled.div`
  padding: 16px 12px;
  background: #ffffff;
  margin: 16px 0;
  border: 4px solid #1cb4db;
  border-radius: 8px;

  transition: border 0.2s;

  cursor: pointer;

  & + div {
    margin-bottom: 16px;
  }

  &:hover {
    border: 4px solid #ff6409;
  }

  span {
    font-size: 20px;
    color: #333333;
  }
`;
