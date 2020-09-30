import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

interface ContentProps {
  toggleMenu: boolean;
};

export const Content = styled.div<ContentProps>`
  display: flex;

  padding-top: 60px;
  margin-left: ${({ toggleMenu }) => toggleMenu ? '360px' : '60px'};

  width:  ${
    ({ toggleMenu }) => toggleMenu ? 'calc(100% - 360px)' : 'calc(100% - 60px)'
  };
  height: calc(100% - 60px);

  .main {
    padding: 20px;
    width: 100%;
    height: 100%;
  }
`;