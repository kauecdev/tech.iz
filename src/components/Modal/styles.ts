import styled, { css } from 'styled-components';

interface ContainerProps {
  type: string;
}

export const Container = styled.div<ContainerProps>`
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

    ${(props) =>
      props.type === 'success'
        ? css`
            background-color: #02c934;
          `
        : css`
            background-color: #c53030;
          `}

    svg {
      margin-bottom: 20px;
    }
  }

  .modalOn {
    display: flex !important;
  }
`;
