// src/components/AdminHeader/style.ts

import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  z-index: 50;

  @media (min-width: 768px) {
    height: 72px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 1rem;
  max-width: 1920px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: #6b7280;
  cursor: pointer;

  &:hover {
    background: #f3f4f6;
    color: #111827;
  }
`;

export const ThemeButton = styled(MenuButton)``;

export const Logo = styled(Link)`
  font-size: 1.125rem;
  font-weight: 800;
  color: #111827;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const LogoHighlight = styled.span`
  color: #6366f1;
  font-weight: 700;
  margin-left: 0.5rem;
  padding: 0.25rem 0.5rem;
  background: #eef2ff;
  border-radius: 4px;
  font-size: 0.875rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const AdminInfo = styled.div`
  display: none;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const AdminAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #f3f4f6;
`;

export const AdminDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AdminName = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
`;

export const AdminRole = styled.span`
  font-size: 0.75rem;
  color: #6b7280;
`;
