import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;


  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;

    input {
      background-color: var(--color-white);
      border: 1px solid var(--color-grey);
      color: var(--color-black);

      padding: 12px;

      width: 100%;
      border-radius: var(--border-radius);

      margin-bottom: 15px;
    }

    .send-image-avatar {
      input {
        display: none;
      }

      label {
        position: relative;

        img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          margin-bottom: 20px;
        }


        &::before {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-white);
          content: '';
          font-weight: 450;
          width: 120px;
          height: 120px;
          position: absolute;
          border-radius: 50%;
          background-color: transparent;
          transition: 0.3s all ease-in-out;

        }

        cursor: pointer;

        &:hover {
          &::before {
            content: 'Mudar imagem';
            background-color: rgba(0 , 0, 0, 0.7);
          }
        }
      }
    }


    button {
      width: 100%;
      padding: 12px;
      border-radius: var(--border-radius);
      background-color: var(--color-btn-success);
      color: var(--color-white);
      font-size: 20px;

      &:hover {
        background-color: var(--color-btn-success-hover);
      }
    }
  }
`;

export const Modal = styled.div`
  z-index: 11;

  background-color: var(--color-secondary);

  h3 {
    color: var(--color-white);
  }

  border-radius: var(--border-radius);

  padding: 20px;
`;

export const ShadowBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
`;

