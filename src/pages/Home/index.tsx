import React from 'react';

import { Container, PeaceIcon } from './styles';

interface Props {
  name: string;
};

const Home: React.FC<Props> = ({ name }) => {
  return (
    <Container>
      <div>
        <PeaceIcon />
        <h1>Olá {name}! Seja bem-vindo ao Chat</h1>
      </div>
    </Container>
  );
};

export default Home;