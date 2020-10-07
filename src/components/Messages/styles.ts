import styled from 'styled-components';

import { MdDelete } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding-bottom: 90px; 
`;

export const Message = styled.div`
  width: 100%;
  display: flex;

  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 15px;

  border-radius: 50%;

  flex-shrink: 0;
`;

interface IContent {
  myMsg: boolean;
};

export const Content = styled.div<IContent>`
  width: 100%;
  display: flex;
  flex-direction: column;

  border-radius: var(--border-radius);

  min-width: 200px;

  padding: 20px;

  background-color: ${
    ({ myMsg }) => myMsg ? 'var(--color-secondary)' : 
      'var(--color-primary)'
    };

  span, time, strong {
    color: ${
    ({ myMsg }) => myMsg ? 'var(--color-white)' : 
      'var(--color-black)'
    };
  }

  transition: .5s ease-in-out;

  > .content-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;

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

export const SendMessage = styled.form`
  height: 80px;
  width: calc(100% - 60px);

  display: flex;
  align-items: center;

  position: fixed;
  left: 60px;
  bottom: 0;


  background-color: var(--color-grey);

  padding: 20px;

  input {
     background-color: var(--color-white);
     color: var(--color-black);
     border-radius: 4px 0 0 4px;
     padding: 12px;

     width: 100%;
     height: 40px;
  }

  button {
    background-color: green;
    color: var(--color-white);
    border-radius: 0 4px 4px 0;
    padding: 12px;

    width: 80px;
    height: 40px;
  }
`;