import React from 'react';

import { Container, LogoutIcon } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <button title="Sair">
        <LogoutIcon />
      </button>
    </Container>
  );
};

export default Navbar;