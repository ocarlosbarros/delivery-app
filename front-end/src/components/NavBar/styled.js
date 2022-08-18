import styled from 'styled-components';
import theme from '../../constants/theme';

export const NavWrapper = styled.nav`
  
`;

export const Header = styled.header`
  font-family: 'Inter';
  width: 100%;
  text-align: center;
  font-size: 80px;
  font-weight: 200;
  letter-spacing: 1rem;
  border: 2px inset #000;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NavItem = styled.li`
  width: 100%;
  list-style-type: none;
  font-size: 24px;
  color: #000;
  font-family: 'Inter';
  padding: 1rem;
  line-height: 29px;
  border-left: 2px solid #000;
  border-bottom: 2px solid #000;
  text-align: center;
  background-color: #fff;
  z-index: 2;
  padding-left: 60px;

  ::after {
      content: '';
      background-color: ${(props) => (props.selected ? theme.green : 'transparent')};
      display: inline-block;
      position: relative;
      top: 0;
      width: 60px;
      height: 12.5px;
      z-index: -1;
      transform: translate(-40px, 6px);
    }

  :last-child {
    border-right: 2px solid #000;
    background-color: #000;
    color: #fff;
  }
`;
