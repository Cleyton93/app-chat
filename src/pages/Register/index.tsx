import React, { useState, useCallback } from 'react';
import { connect }  from 'react-redux';
import { Navigate } from 'react-router-dom';

import { Container, Card, Form } from './styles';

import { handleRegister } from '../../redux/reducers/authenticate/action-creators';

interface Props {
  handleRegister: (data: any) => void;
  error: false | string;
  isLogged: null | boolean;
};

const Register: React.FC<Props> = ({ error, handleRegister, isLogged }) => {
  const [empty, setEmpty] = useState({
    name: false,
    email: false,
    pass: false,
  });

  const [fileName, setFileName] = useState<string>(
    'Selecionar uma imagem para o perfil'
  );
  
  const handleSubmit = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    
    const target = e.target as typeof e.target & {
      name: { value: string },
      email: { value: string },
      pass: { value: string },
      avatar: { files: any },
    } & HTMLFormElement;

    const { name, email, pass } = target;

    if (!name.value || !email.value || !pass.value) {
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

      if (!pass.value) {
        setEmpty((state) => { return { ...state, pass: true } });
      } else {
        setEmpty((state) => { return { ...state, pass: false } });
      }
      
      return;
    };

    const formData = new FormData(target);

    handleRegister(formData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeAvatar = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const { files } = e.currentTarget;

      if (files) setFileName(files[0].name);
    },
    []
  );

  if (isLogged) return <Navigate to="/" />;

  return (
    <Container>
      <Card>
        <Form onSubmit={handleSubmit} enctype="mutipart/form-data">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className={empty.name ? 'empty' : ''}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className={empty.email ? 'empty' : ''}
          />
          <input
            type="password"
            name="pass"
            placeholder="Senha"
            className={empty.pass ? 'empty' : ''}
          />
          
          <div className="send-image-avatar">
            <label htmlFor="avatar">{fileName}</label>
            <input
              type="file"
              name="avatar"
              id="avatar"
              onChange={handleChangeAvatar}
            />
          </div>

          <button type="submit">Confirmar</button>
        </Form>
      </Card>
    </Container>
  );
};

const mapStateToProps = (
    {
      authenticate: 
      { 
        error, isLogged
      } 
    }:
    {
      authenticate: {
        error: false | string; isLogged: null | boolean;
      }
    }
  ) => ({
  error,
  isLogged,
});

const mapDispatchToProps = (dispatch: (action: any) => void) => ({
  handleRegister: (data: any) => {
    dispatch(handleRegister(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);