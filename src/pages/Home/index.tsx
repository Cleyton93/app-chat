import React from 'react';

import { Container, PeaceIcon } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <div>
        <PeaceIcon />
        <h1>Bem vindo ao Chat do Cleyton!</h1>
      </div>
    </Container>
  );
};

export default Home;