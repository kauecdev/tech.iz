import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.6);

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
    font-size: 24px;

    width: 300px;
    padding: 40px;
    border-radius: 20px;
    background-color: #02c934;

    svg {
      margin-bottom: 20px;
    }
  }

  .modalOn {
    display: flex !important;
  }
`;
