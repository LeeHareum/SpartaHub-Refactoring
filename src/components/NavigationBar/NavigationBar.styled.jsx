import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 20px 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  list-style-type: none;
  margin: 0 15px;
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  color: #000000;
  text-decoration: none;
  font-size: 18px;
  gap: 20px;
`;

export const IconNavLink = styled.div`
  display: flex;
  justify-content: center;
  color: #000000;
  text-decoration: none;
  font-size: 18px;
  gap: 20px;
`;

export const LogoImg = styled.img`
  height: 35px;
`;

export const LoginIcon = styled.img`
  height: 35px;
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #e8344e;
  text-decoration: none;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #fd5972;
  }
`;
