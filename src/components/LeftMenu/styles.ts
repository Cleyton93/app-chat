import styled, { css } from 'styled-components';
import {
  MdMenu,
  MdHome,
  MdAccountCircle,
  MdGroup,
  MdPerson,
  MdSettings,
} from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  bottom: 0;

  background-color: var(--color-secondary);

  width: 60px;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 60px;

  padding: 10px 0;

  transition: .3s ease-in-out;

  &:not(:first-child) {
    > span {
      color: var(--color-primary);
      font-size: 14px;
    }

    &:hover {
      cursor: pointer;
      background-color: var(--color-secondary-hover);

      > a {
        svg {
          fill: var(--color-left-menu-icons-hover);
        }
      } 

      > span {
        fill: var(--color-left-menu-icons-hover);
      }
    }
  }
`;

const iconsCSS = css`
  width: 40px;
  height: 40px;

  fill: var(--color-primary);
`;

export const HamburguerMenuIcon = styled(MdMenu)`
  ${iconsCSS}
`;

export const HomeIcon = styled(MdHome)`
  ${iconsCSS}
`;

export const AccountIcon = styled(MdAccountCircle)`
  ${iconsCSS}
`;

export const GroupIcon = styled(MdGroup)`
  ${iconsCSS}
`;

export const PrivateIcon = styled(MdPerson)`
  ${iconsCSS}
`;

export const SettingsIcon = styled(MdSettings)`
  ${iconsCSS}
`;