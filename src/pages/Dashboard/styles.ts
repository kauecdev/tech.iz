import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 30px 80px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    margin-bottom: 20px;
  }

  h1 {
    margin-bottom: 40px;
  }

  > div {
    background: #e7e4e4;
    width: 60%;

    display: flex;
    flex-direction: column;

    border-radius: 20px;

    padding-bottom: 30px;

    form {
      display: flex;
      flex-direction: column;

      padding: 40px;

      fieldset {
        border: 0;
        margin-bottom: 30px;

        legend {
          color: #222222;
          font-weight: 700;
          font-size: 30px;

          margin-bottom: 20px;
        }

        input {
          width: 100%;
          border: 0;
          padding: 14px;
          border-radius: 6px;
          margin-right: 20px;

          font-size: 18px;
        }
      }

      fieldset.alternatives {
        header {
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          align-items: center;

          margin-bottom: 20px;

          legend {
            flex: 1;
            margin: 0;
          }

          button {
            border: 0;
            padding: 0;

            font-weight: 700;
            font-size: 18px;

            background: transparent;
          }
        }

        div {
          width: 100%;
          display: flex;

          input[type='text'] {
            margin-right: 20px;
          }

          div {
            width: 60px;

            input[type='checkbox'] {
              all: unset;
              width: 30px;
              height: 30px;
              border-radius: 50%;

              background: #fff;
              border: 8px solid #c7c4c4;
            }

            input[type='checkbox']:checked {
              background: #ff6409;
              border-color: #1cb4db;
            }
          }
        }
      }

      > button {
        border: 0;
        border-radius: 8px;
        background: #ff6409;
        color: #fff;

        padding: 10px 20px;
        max-width: 160px;

        align-self: center;
        font-size: 20px;
      }
    }

    ul {
      max-width: 80%;
      align-self: center;
    }
  }
`;
