import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #f1f5f9;
  z-index: 1000;
`;

export const HeaderContainer = styled.div`
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const Logo = styled(Link)`
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  text-decoration: none;
  letter-spacing: -0.02em;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled(NavLink)`
  font-size: 0.938rem;
  font-weight: 500;
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #111827;
  }

  &.active {
    font-weight: 600;
    color: #111827;
  }
`;

export const LoginButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background: #18181b;
  color: #fff;
  font-size: 0.938rem;
  font-weight: 500;
  border-radius: 6px;
  transition: background 0.2s ease;
  text-decoration: none;

  &:hover {
    background: #27272a;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;
