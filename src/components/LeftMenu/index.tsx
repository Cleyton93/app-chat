import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Icon,
  HomeIcon,
  HamburguerMenuIcon,
  AccountIcon,
  GroupIcon,
  PrivateIcon,
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

        <Icon title="Grupo">
          <Link to="/grupo">
            <GroupIcon />
          </Link>

          <span>Grupo</span>
        </Icon>

        <Icon title="Privado">
          <Link to="/">
            <PrivateIcon />
          </Link>

          <span>Privado</span>
        </Icon>

        <Icon title="Perfil">
          <Link to="/">
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