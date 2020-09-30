import styled from 'styled-components';

import { FaSignOutAlt } from 'react-icons/fa';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;

  padding: 20px;

  position: fixed;
  top: 0;
  left: 60px;
  right: 0;

  background-color: var(--color-primary);

  border-bottom: 2px solid #CCC;
`;

export const LogoutIcon = styled(FaSignOutAlt)`
  width: 30px;
  height: 30px;

  fill: var(--color-secondary);

  &:hover {
    fill: #D32124;
  }
`;