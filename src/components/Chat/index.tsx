import React from 'react';
import { v4 as uuid } from 'uuid';

import { IMessages } from '../../@types';

import { Container, Message, Content, Avatar, RemoveIcon } from './styles';

interface Props {
  newMessages: IMessages[];
};

const Chat: React.FC<Props> = ({ newMessages }) => {
  return (
    <Container>
      {Array.from(Array(15)).map((_) => (
        <Message key={uuid()}>
          <Avatar />

          <Content>
            <div className="content-header">
              <button>
                <RemoveIcon />
              </button>
            </div>
            <div className="info">
              <span>Enviado por: <strong>Fulano</strong></span>
              <time>12 do 8 de 2030</time>
            </div>
            <div className="message">
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only 
                five centuries, but also the leap into electronic typesetting, 
                remaining.
              </span>
            </div>
          </Content>
        </Message>
      ))}
    </Container>
  );
};

export default Chat;