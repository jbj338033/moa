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

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 2.5rem;
  }
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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
    padding: 2rem 1rem;
  }
`;

export const NoticeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NoticeItem = styled.div`
  padding: 1.5rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (max-width: 480px) {
    padding: 1.25rem;
  }

  &:hover {
    border-color: #111827;
    transform: translateY(-2px);
  }
`;

export const NoticeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 0.75rem;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

export const NoticeTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  line-height: 1.4;
`;

export const NoticeDate = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
  white-space: nowrap;
  flex-shrink: 0;
`;

export const NoticePreview = styled.p`
  font-size: 0.938rem;
  color: #4b5563;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

export const NoticeMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;

  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;

export const MetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.813rem;
  color: #6b7280;
  flex-shrink: 0;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  background: #f3f4f6;
  color: #4b5563;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  width: fit-content;
`;

export const ImportantBadge = styled(Badge)`
  background: #fef2f2;
  color: #ef4444;
`;
