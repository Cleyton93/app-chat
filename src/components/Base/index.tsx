import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { Container, Content } from './styles';

import Navbar from '../Navbar';
import LeftMenu from '../LeftMenu';
import ChatMenu from '../ChatMenu';

interface Props {
  component: React.ReactNode;
  isLogged: boolean;
}

const Base: React.FC<Props> = ({ component, isLogged }) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  if (!isLogged) return <Navigate to="/login" />

  return (
    <Container>
      <Navbar />
      <LeftMenu setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />

      <Content toggleMenu={toggleMenu}>
        <ChatMenu toggleMenu={toggleMenu} />
        <div className="main">
          {component}
        </div>
      </Content>
    </Container>
  );
};

const mapStateToProps = (
  { authenticate: { isLogged } }: { authenticate: { isLogged: boolean } }
) => ({
  isLogged,
});

export default connect(mapStateToProps)(Base);