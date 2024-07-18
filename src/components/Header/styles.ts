import styled from 'styled-components'
import { Container } from '@/styles/utils'

export const StyledHeader = styled.header`
  margin: 1.75rem 0 3.125rem 0;
`;

export const NavBar = styled.nav`
  ${Container};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 2.5rem;
  align-items: center;
`;

export const MenuItem = styled.li`
  font-weight: 700;
  a {
    text-decoration: none;
    color: #000;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
