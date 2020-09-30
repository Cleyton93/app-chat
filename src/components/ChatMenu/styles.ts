import styled, { css } from 'styled-components';
import { FaCircle } from 'react-icons/fa';
import { MdMessage, MdBlock } from 'react-icons/md';

interface ContainerProps {
  toggleMenu: boolean;
};

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 60px;
  left: 60px;
  bottom: 0;


  width: ${({ toggleMenu }) => toggleMenu ? '300px' : '0px'};
  height: calc(100% - 60px);

  > ul {
    display: ${({ toggleMenu }) => toggleMenu ? 'flex' : 'none'};
  }

  background-color: var(--color-primary);
`;

export const Content = styled.ul`
  display: flex;
  flex-direction: column;

  > li {
    padding: 30px;

    display: flex;
    align-items: center;
    width: 100%;
    height: 25px;

    cursor: pointer;

    &:hover {
      background-color: var(--color-primary-hover);
    }

    > span {
      font-weight: bold;
      color: var(--color-secondary);
    }
  }
`;

const iconsCSS = css`
  width: 20px;
  height: 20px;

  margin-right: 10px;
`;

export const MessageIcon = styled(MdMessage)`
  ${iconsCSS}
  fill: var(--color-message-icon);
`;

export const OnlineIcon = styled(FaCircle)`
  ${iconsCSS}
  fill: var(--color-online-icon);
`;

export const OfflineIcon = styled(FaCircle)`
  ${iconsCSS}
  fill: var(--color-offline-icon);
`;

export const BlockIcon = styled(MdBlock)`
  ${iconsCSS}
  fill: var(--color-block-icon);
`;