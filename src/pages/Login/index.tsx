import React, { useCallback } from 'react';
import { connect }  from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import { Container, Card, Form } from './styles';

import { handleLogin } from '../../redux/reducers/authenticate/action-creators';

import { IAuthenticate, IMapAuthenticate } from '../../@types/states';

interface Props {
  handleLogin: (email: string, pass: string) => void;
};

const Login: React.FC<Props & IAuthenticate> = ({
  userData, error, handleLogin
}) => {
  console.log(userData);

  const handleSubmit = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();

    const { email, pass } = e.target as typeof e.target & {
      email: { value: string },
      pass: { value: string },
    };

    if (!email.value || !pass.value) return;

    handleLogin(email.value, pass.value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (userData) return <Navigate to="/" />;

  return (
    <Container>
      <Card>
        <Form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="E-mail" />
          <input type="password" name="pass" placeholder="Senha" />

          <button type="submit">ENTRAR</button>

          <div>
            <span>Ainda não está registrado?</span>
            <Link to="/register">Criar conta</Link>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

const mapStateToProps = (
    { authenticate: { userData, error } }: IMapAuthenticate
  ) => ({
  userData,
  error,
});

const mapDispatchToProps = (dispatch: (action: any) => void) => ({
  handleLogin: (email: string, pass: string) => {
    dispatch(handleLogin(email, pass));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);