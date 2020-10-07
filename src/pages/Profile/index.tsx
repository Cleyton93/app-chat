import React, { useState, useCallback, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { handleUpdate } from '../../redux/reducers/authenticate/action-creators';

import { Container, Modal, ShadowBox } from './styles';

interface Props {
  userData: null | {
    id: string;
    name: string;
    email: string;
    token: string;
    avatar: string;
  };
  handleUpdate: (data: any, token: string) => void; 
};

const Profile: React.FC<Props> = ({ userData, handleUpdate }) => {
  const [empty, setEmpty] = useState({
    name: false,
    email: false,
  });

  const [fileName, setFileName] = useState<string>('');

  const avatarImg = useRef<HTMLImageElement>(null);

  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    if (userData) {
      setFileName(userData.avatar);
    }
  }, [userData]);

  const handleSubmitUpdate = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    
    const target = e.target as typeof e.target & {
      name: { value: string },
      email: { value: string },
      pass: { value: string },
      avatar: { files: any },
    } & HTMLFormElement;

    const { name, email } = target;

    if (!name.value || !email.value) {
      if (!name.value) {
        setEmpty((state) => { return { ...state, name: true } });
      } else {
        setEmpty((state) => { return { ...state, name: false } });
      }

      if (!email.value) {
        setEmpty((state) => { return { ...state, email: true } });
      } else {
        setEmpty((state) => { return { ...state, email: false } });
      }
      
      return;
    };

    const formData = new FormData(target);

    if (userData) {
      handleUpdate(formData, userData.token);
      openModal()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  const handleChangeAvatar = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const { files } = e.currentTarget;

      if (files) {
        const reader = new FileReader();

        reader.onload = () => {
          const avatar = avatarImg.current;

          if (avatar) {
            avatar.src = String(reader.result);
          }
        }

        reader.readAsDataURL(files[0]);
      }
    },
    []
  );

  const openModal = useCallback(() => {
    setModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setModal(false);
  }, []);

  return (
    <Container>
      {
        modal &&
        <ShadowBox onClick={closeModal}>
          <Modal>
            <h3>Atualizado com sucesso!</h3>
          </Modal>
        </ShadowBox>
      }

      <form onSubmit={handleSubmitUpdate}>
        <div className="send-image-avatar">
          <label htmlFor="avatar">
            <img
              src={`${process.env.REACT_APP_API_URL}images/${fileName}`}
              ref={avatarImg}
              alt="imagem do perfil"
            />
          </label>
          <input
            type="file"
            name="avatar"
            id="avatar"
            onChange={handleChangeAvatar}
          />
        </div>

        <input
          type="text"
          name="name"
          placeholder="Nome"
          className={empty.name ? 'empty' : ''}
          defaultValue={userData ? userData.name : ''}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className={empty.email ? 'empty' : ''}
          defaultValue={userData ? userData.email : ''}
        />
        <input
          type="password"
          name="pass"
          placeholder="Senha"
        />
        
        <button type="submit">Atualizar</button>
      </form>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: (action: any) => void) => ({
  handleUpdate: (data: any, token: string) => {
    dispatch(handleUpdate(data, token));
  }
}); 

export default connect(null, mapDispatchToProps)(Profile);