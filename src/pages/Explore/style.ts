import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  font-family: "Pretendard Variable", -apple-system, BlinkMacSystemFont,
    system-ui, Roboto, sans-serif;
`;

export const Header = styled.header`
  padding: 7rem 2rem 3rem;
  background: #fafafa;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-image: radial-gradient(
        circle at 20% 20%,
        rgba(59, 130, 246, 0.03) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 80%,
        rgba(99, 102, 241, 0.03) 0%,
        transparent 50%
      );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 2.5rem;
  }
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #111827;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`;

export const Description = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  color: #4b5563;
  max-width: 600px;
  line-height: 1.7;
`;

export const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const FilterSection = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const SearchBox = styled.div`
  flex: 1;
  max-width: 480px;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 3rem;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  color: #111827;
  transition: all 0.2s ease;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #111827;
    box-shadow: 0 0 0 1px #111827;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  display: flex;
  align-items: center;
`;

export const FilterGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Select = styled.select`
  padding: 0.875rem 2.5rem 0.875rem 1rem;
  appearance: none;
  background: #ffffff
    url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%236B7280' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")
    calc(100% - 1rem) center no-repeat;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  color: #111827;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 140px;

  &:focus {
    outline: none;
    border-color: #111827;
    box-shadow: 0 0 0 1px #111827;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ClubGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
`;

export const ClubCard = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    border-color: #111827;
    transform: translateY(-4px);
  }
`;

export const ClubImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background: #f3f4f6;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${ClubCard}:hover & img {
    transform: scale(1.05);
  }
`;

export const ClubContent = styled.div`
  padding: 1.5rem;
`;

export const ClubTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
`;

export const ClubDescription = styled.p`
  font-size: 0.938rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 1rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const ClubTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Tag = styled.span`
  padding: 0.25rem 0.75rem;
  background: #f3f4f6;
  color: #4b5563;
  border-radius: 6px;
  font-size: 0.813rem;
  font-weight: 500;
  transition: all 0.2s ease;

  ${ClubCard}:hover & {
    background: #111827;
    color: white;
  }
`;

export const ClubMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.875rem;

  svg {
    width: 16px;
    height: 16px;
  }
`;
