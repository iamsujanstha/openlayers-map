import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  width: 70px;
  height: 100vh;
  background-color: var(--color-grey-0);
  box-shadow: 1px 0 7px rgba(0, 0, 0, 0.1); 
  z-index: 10;
`;

export const IconNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 16px;
  background-color: white;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  border: none;
  border-radius: var(--border-radius-md);
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-brand-secondary);
    color: var(--color-grey-0);

    .nav-icon,
    .nav-icon path {
      fill: var(--color-grey-0);
    }
  }

  &.active {
    background-color: var(--color-brand-primary);
    color: var(--color-grey-0);

    .nav-icon,
    .nav-icon path {
      fill: var(--color-grey-0);
    }
  }
`;
