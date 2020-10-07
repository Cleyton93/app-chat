import React from 'react';
import { v4 as uuid } from 'uuid';
import moment from 'moment';

import { IMessages } from '../../@types';

import {
  Container,
  Message,
  Content,
  Avatar,
  RemoveIcon,
  SendMessage,
} from './styles';

interface Props {
  idUser: string;
  onSubmit: (e: React.SyntheticEvent) => void;
  messages: IMessages[];
  handleRemoveMessage: (id: string, token: string) => void;
};

const Messages: React.FC<Props> = (
  { 
    idUser,
    messages,
    onSubmit,
    handleRemoveMessage,
  }
) => {

  return (
    <Container>
      {messages.map((data) => (
        <Message key={uuid()}>
          <Avatar
            src={`${process.env.REACT_APP_API_URL}images/${data.user.avatar}`}
          />

          <Content myMsg={idUser === data.user._id}>
            <div className="content-header">
              { 
                idUser === data.user._id &&
                <button
                  onClick={() => handleRemoveMessage(data._id, data.user._id)}
                >
                  <RemoveIcon />
                </button>
              }
            </div>
            <div className="info">
              <span>Enviado por: <strong>{data.user.name}</strong></span>
              <time>{moment(data.createdAt).format('DD/MM/YYYY H:mm:ss')}</time>
            </div>
            <div className="message">
              <span>
               {data.message}
              </span>
            </div>
          </Content>
        </Message>
      ))}

      <SendMessage onSubmit={onSubmit}>
        <input type="text" name="message" />
        <button type="submit">enviar</button>
      </SendMessage>
    </Container>
  );
};

export default Messages;