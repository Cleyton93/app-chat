import React, { useState } from 'react';

import { Container, Content } from './styles';

import Navbar from '../Navbar';
import LeftMenu from '../LeftMenu';
import ChatMenu from '../ChatMenu';

const Base = (Component: React.FC) => {
  const WrapperComponent: React.FC = (props) => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);

    return (
      <Container>
        <Navbar />
        <LeftMenu setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />

        <Content toggleMenu={toggleMenu}>
          <ChatMenu toggleMenu={toggleMenu} />
          <div className="main">
            <Component {...props} />
          </div>
        </Content>
      </Container>
    );
  };

  return WrapperComponent;
}


export default Base;