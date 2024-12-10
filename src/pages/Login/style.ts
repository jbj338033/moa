import styled from "@emotion/styled";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  font-family: "Pretendard Variable", -apple-system, BlinkMacSystemFont,
    system-ui, Roboto, sans-serif;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 0% 0%, #f1f5f9 0%, transparent 50%),
      radial-gradient(circle at 100% 100%, #f8fafc 0%, transparent 50%);
    opacity: 0.8;
  }
`;

export const LoginContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 360px;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

export const LogoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

export const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.03em;
`;

export const Description = styled.p`
  color: #475569;
  font-size: 1rem;
  font-weight: 500;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #0f172a;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: all 0.15s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: translateX(-100%);
  }

  &:hover {
    background: #1e293b;
    transform: translateY(-2px);

    &::after {
      transform: translateX(100%);
      transition: transform 0.75s ease;
    }
  }

  svg {
    font-size: 1.25rem;
  }
`;
