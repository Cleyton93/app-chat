import styled from 'styled-components';
import { FaRegHandPeace } from 'react-icons/fa';

export const Container = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display:  flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    h1 {
      color: var(--color-secondary);
    }
  }
`;

export const PeaceIcon = styled(FaRegHandPeace)`
  width: 80px;
  height: 80px;

  fill: var(--color-secondary);

  margin-right: 15px;
`;