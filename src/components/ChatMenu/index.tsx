import React from 'react';

import {
  Container,
  Content,
  MessageIcon,
  OnlineIcon,
  OfflineIcon,
  BlockIcon,
} from './styles';

interface Props {
  toggleMenu: boolean;
};

const ChatMenu: React.FC<Props> = ({ toggleMenu }) => {
  return (
    <Container toggleMenu={toggleMenu}>
      <Content>
        <li title="Mensagens">
          <MessageIcon />
          <span>Mensagens</span>
        </li>
        <li title="Usuários Online">
          <OnlineIcon />
          <span>Usuários Online</span>
        </li>
        <li title="Usuários Offline">
          <OfflineIcon />
          <span>Usuários Offline</span>
        </li>
        <li title="Usuários Silenciados">
          <BlockIcon />
          <span>Usuários silenciados</span>
        </li>
      </Content>
    </Container>
  );
};

export default ChatMenu;