import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-secondary);
`;

export const Card = styled.div`
  width: 350px;
  height: 300px;

  background-color: var(--color-white);

  padding: 20px;
`;

export const Form = styled.form`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    padding: 12px;

    background-color: var(--color-white);
    border: 1px solid var(--color-grey);

    color: var(--color-black);

    margin-bottom: 15px;
  }

  button {
    width: 100%;
    padding: 12px;

    color: var(--color-white);
    background-color: var(--color-btn-success);

    &:hover {
      background-color: var(--color-btn-success-hover);
    }

    margin-bottom: 15px;
  }

  > div {
    display: flex;
    align-items: center;

    span {
      margin-right: 8px;
    }

    > a {
      color: #25BDCE;

      &:hover {
        color: #87E7F1;
      }
    }
  }
`;