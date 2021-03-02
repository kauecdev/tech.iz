import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 40px;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    font-size: 20px;

    color: #ffffff;

    svg {
      margin-right: 16px;
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
  border-radius: 8px;

  cursor: pointer;

  & + div {
    margin-bottom: 16px;
  }

  span {
    font-size: 20px;
    color: #333333;
  }
`;
