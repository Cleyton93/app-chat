import React,  { useCallback } from 'react';

import { Container, LogoutIcon } from './styles';

const Navbar: React.FC = () => {
  const handleLogout = useCallback(() => {
    window.localStorage.removeItem('15BgHYT');
    window.localStorage.removeItem('3gbGbgx');
    window.localStorage.removeItem('JugtDRk');

    window.location.href = process.env.REACT_APP_APP_URL;
  }, []);

  return (
    <Container>
      <button title="Sair" onClick={handleLogout}>
        <LogoutIcon />
      </button>
    </Container>
  );
};

export default Navbar;