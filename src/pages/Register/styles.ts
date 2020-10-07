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
  height: min-content;

  background-color: var(--color-white);

  padding: 20px;
`;

interface IForm {
  enctype: string;
};

export const Form = styled.form<IForm>`
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

    &.empty {
      border: 1px solid var(--color-red);
    }
  }

  .send-image-avatar {
    width: 100%;
    margin-bottom: 15px;

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px;
      background-color: var(--color-secondary);
      color: var(--color-white);

      cursor: pointer;
    }

    input {
      display: none;
    }
  }

  button {
    width: 100%;
    padding: 12px;

    color: var(--color-white);
    background-color: var(--color-btn-success);

    &:hover {
      background-color: var(--color-btn-success-hover);
    }
  }
`;