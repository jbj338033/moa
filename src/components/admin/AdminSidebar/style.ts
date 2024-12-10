import styled from "@emotion/styled";

interface SidebarProps {
  isOpen: boolean;
}

interface NavItemProps {
  isActive: boolean;
}

interface OverlayProps {
  isVisible: boolean;
}

export const Sidebar = styled.aside<SidebarProps>`
  position: fixed;
  top: 64px;
  left: 0;
  width: 240px;
  height: calc(100vh - 64px);
  background: white;
  border-right: 1px solid #e5e7eb;
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease;
  z-index: 40;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0;

  @media (min-width: 768px) {
    top: 72px;
    height: calc(100vh - 72px);
    transform: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;
`;

export const NavItem = styled.button<NavItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  background: ${({ isActive }) => (isActive ? "#f3f4f6" : "transparent")};
  color: ${({ isActive }) => (isActive ? "#111827" : "#6b7280")};
  font-size: 0.938rem;
  font-weight: ${({ isActive }) => (isActive ? "500" : "normal")};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f3f4f6;
    color: #111827;
  }
`;

export const NavLabel = styled.span`
  flex: 1;
  text-align: left;
`;

export const LogoutButton = styled(NavItem)`
  margin: 0 1rem;
  color: #ef4444;
  background: transparent;

  &:hover {
    background: #fef2f2;
    color: #ef4444;
  }
`;

export const Overlay = styled.div<OverlayProps>`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 30;

  @media (min-width: 768px) {
    display: none;
  }
`;
