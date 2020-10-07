import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client';

import { getMessages } from '../../redux/reducers/messages/action-creators';

import { IAuthenticate } from '../../@types/states';
import { IMessages } from '../../@types';

import { Container } from './styles';

import Messages from '../../components/Messages';

const socket = socketIOClient(process.env.REACT_APP_API_URL);

interface Props {
  messages: IMessages[];
  getMessages: (token: string) => void;
};

const Chat: React.FC<Props & IAuthenticate> = (
  {
    userData,
    messages: messagesList,
    getMessages,
  }
) => {
  const [messages, setMessages] = useState<IMessages[]>([]);

  useEffect(() => {
    if (userData) {
      getMessages(userData.token);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  useEffect(() => {
    setMessages(messagesList);
  }, [messagesList]);

  useEffect((): any => {
    socket.on('messages', (messages: IMessages[]) => {
      setMessages(messages);
    });

    return () => socket.removeListener('messages');
  }, [messages]);

  const handleSendMessage = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & { message: { value: string } };

    if (target.message.value && userData) {
      socket.emit('sendMessage', {
        user: { ...userData, _id: userData.id },
        message: target.message.value
      });
  
      target.message.value = '';
  
      return () => socket.removeListener('sendMessage');
    }
  }, [userData]);

  const handleRemoveMessage = useCallback((id, messageIdUser) => {
    if (userData) {
      if (id && messageIdUser && messageIdUser === userData.id) {
        socket.emit('removeMessage', id);
      }
    }
  }, [userData]);

  return (
    <Container>
      <Messages
        idUser={userData ? userData.id : ''}
        messages={messages}
        onSubmit={handleSendMessage}
        handleRemoveMessage={handleRemoveMessage}
      />
    </Container>
  );
};

const mapStateToProps = ({ messages }: { messages: IMessages[]}) => ({
  messages,
});

const mapDispatchToProps = (dispatch: (action: any) => void) => ({
  getMessages: (token: string) => dispatch(getMessages(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);