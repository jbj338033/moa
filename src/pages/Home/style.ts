import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  width: 100%;
  background: #ffffff;
  font-family: "Pretendard Variable", -apple-system, BlinkMacSystemFont,
    system-ui, Roboto, sans-serif;
  overflow-x: hidden;
`;

export const MainSection = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 6rem 2.5rem 5rem;
  display: flex;
  align-items: center;
  background: #fafafa;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-image: radial-gradient(
        circle at 20% 10%,
        rgba(59, 130, 246, 0.03) 0%,
        transparent 40%
      ),
      radial-gradient(
        circle at 80% 90%,
        rgba(99, 102, 241, 0.03) 0%,
        transparent 40%
      );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 5rem 1.5rem 3rem;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const MainTextContent = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const MainTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  color: #111827;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;

  span {
    display: inline-block;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0.1em;
      height: 0.3em;
      background: rgba(59, 130, 246, 0.2);
      z-index: -1;
      transform: skew(-10deg) rotate(-1deg);
    }
  }
`;

export const MainDescription = styled.p`
  font-size: clamp(1.125rem, 1.5vw, 1.25rem);
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 540px;

  @media (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.125rem;
  text-decoration: none;
  transition: all 0.25s ease;
  white-space: nowrap;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const PrimaryButton = styled(Button)`
  background: #111827;
  color: white;

  &:hover {
    background: #1f2937;
    transform: translateY(-2px);
  }
`;

export const SecondaryButton = styled(Button)`
  background: white;
  color: #111827;
  border: 1px solid #e5e7eb;

  &:hover {
    background: #f9fafb;
    transform: translateY(-2px);
  }
`;

export const MainImageSection = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out 0.2s forwards;

  &::before {
    content: "";
    position: absolute;
    top: -5%;
    right: -5%;
    width: 60%;
    height: 60%;
    background: rgba(59, 130, 246, 0.05);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    z-index: -1;
  }

  @media (max-width: 1024px) {
    max-width: 560px;
    margin: 0 auto;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

export const CategorySection = styled.section`
  padding: 6rem 2.5rem;
  background: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(0, 0, 0, 0.1),
      transparent
    );
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

export const CategoryContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  text-align: center;
  max-width: 720px;
  margin: 0 auto 4rem;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 3vw, 3rem);
  font-weight: 800;
  color: #111827;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`;

export const SectionDescription = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  line-height: 1.7;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const CategoryCard = styled(Link)`
  text-decoration: none;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.25s ease;
  border: 1px solid #e5e7eb;

  &:hover {
    transform: translateY(-4px);
    border-color: #111827;
  }
`;

export const CategoryImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 60%,
      rgba(0, 0, 0, 0.05)
    );
  }
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${CategoryCard}:hover & {
    transform: scale(1.03);
  }
`;

export const CategoryContent = styled.div`
  padding: 1.5rem;
`;

export const CategoryIcon = styled.div`
  width: 42px;
  height: 42px;
  background: #f3f4f6;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111827;
  margin-bottom: 1rem;
  transition: all 0.25s ease;

  ${CategoryCard}:hover & {
    background: #111827;
    color: white;
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
`;

export const CategoryDescription = styled.p`
  font-size: 0.938rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const CategoryTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0.875rem;
  background: #f3f4f6;
  color: #111827;
  border-radius: 6px;
  font-size: 0.813rem;
  font-weight: 500;
  transition: all 0.25s ease;

  ${CategoryCard}:hover & {
    background: #111827;
    color: white;
  }
`;
