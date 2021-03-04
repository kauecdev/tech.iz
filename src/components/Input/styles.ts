import styled from 'styled-components';

import Tooltip from '../Tooltip';

export const Container = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 6px;

  padding: 0 12px;

  display: flex;
  align-items: center;

  input {
    flex: 1;
    border: 0;
    padding: 14px 0;
    margin-right: 20px;

    font-size: 18px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 0;

  svg {
    margin-right: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
