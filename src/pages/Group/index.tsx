import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

import { IMessages } from '../../@types';

import { Container } from './styles';

import Chat from '../../components/Chat';

const ENDPOINT = 'http://localhost:5000';

const Group: React.FC = () => {
  const [newMessages, setMessages] = useState<IMessages[]>([]);
  
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.emit('user', 'Fulano');

    socket.on('group', (message: IMessages) => {
      setMessages(newMessages.concat(message));
    });

    return () => socket.disconnect();
  }, [newMessages]);

  return (
    <Container>
      <Chat newMessages={newMessages} />
    </Container>
  );
};

export default Group;