import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Icon,
  HomeIcon,
  HamburguerMenuIcon,
  AccountIcon,
  ChatIcon,
  SettingsIcon,
} from './styles';

interface Props {
  toggleMenu: boolean;
  setToggleMenu: (value: boolean) => void;
};

const LeftMenu: React.FC<Props> = ({ toggleMenu, setToggleMenu }) => {
  const handleToggleMenu = useCallback(() => {
    setToggleMenu(!toggleMenu);
  }, [setToggleMenu, toggleMenu]);

  return (
    <Container>
      <div>
        <Icon title="Menu">
          <button onClick={handleToggleMenu}>
            <HamburguerMenuIcon />
          </button>
        </Icon>

        <Icon title="Início">
          <Link to="/">
            <HomeIcon />
          </Link>
        </Icon>

        <Icon title="Chat">
          <Link to="/chat">
            <ChatIcon />
          </Link>

          <span>Chat</span>
        </Icon>

        <Icon title="Perfil">
          <Link to="/perfil">
            <AccountIcon />
          </Link>

          <span>Perfil</span>
        </Icon>
      </div>

      <div title="Configurações">
        <Icon>
          <Link to="/configuracoes">
            <SettingsIcon />
          </Link>
        </Icon>
      </div>
    </Container>
  );
};

export default LeftMenu;