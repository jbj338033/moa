import styled from "@emotion/styled";

interface ThemeProps {
  isDark?: boolean;
}

export const Layout = styled.div<ThemeProps>`
  min-height: 100vh;
  background-color: ${({ isDark }) => (isDark ? "#111827" : "#f9fafb")};
  color: ${({ isDark }) => (isDark ? "#f9fafb" : "#111827")};
`;

export const Container = styled.div`
  padding-top: 64px;
  min-height: 100vh;
  position: relative;

  @media (min-width: 768px) {
    padding-top: 72px;
    margin-left: 240px;
  }
`;

export const Main = styled.main`
  min-height: calc(100vh - 64px);
  padding: 1.5rem;

  @media (min-width: 768px) {
    min-height: calc(100vh - 72px);
    padding: 2rem;
  }
`;
