import styled from 'styled-components';

import { MdDelete } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.div`
  display: flex;

  margin-bottom: 20px;
`;

export const Avatar = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 15px;

  border-radius: 50%;

  flex-shrink: 0;

  background-color: #CCCCCC;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: var(--border-radius);

  min-width: 200px;

  padding: 20px;

  background-color: var(--color-primary);

  span, time {
    color: #000000;
  }

  transition: .5s ease-in-out;

  > .content-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 5px;

    button {
      opacity: 0;
    }
  }

  > .info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 18px;
    font-weight: bold;

    margin-bottom: 10px;
  } 

  .message {
    font-size: 18px;
  }


  &:hover {
    button {
      opacity: 1;
    }
  }
`;

export const RemoveIcon = styled(MdDelete)`
  width: 25px;
  height: 25px;

  fill: #D32124;
`;