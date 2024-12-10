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

export const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const ProfileSection = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 2rem;
  height: fit-content;
`;

export const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #f3f4f6;
  margin: 0 auto 1.5rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileInfo = styled.div`
  text-align: center;
`;

export const Name = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
`;

export const StudentId = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
`;

export const ProfileMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.938rem;
  color: #4b5563;

  svg {
    color: #6b7280;
  }
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Section = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const ClubInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 8px;
`;

export const ClubLogo = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: #f3f4f6;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ClubDetails = styled.div`
  flex: 1;
`;

export const ClubName = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;
`;

export const ClubRole = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const Status = styled.span<{
  status: "waiting" | "accepted" | "rejected";
}>`
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.813rem;
  font-weight: 500;

  ${({ status }) => {
    switch (status) {
      case "waiting":
        return `
          background: #FEF3C7;
          color: #92400E;
        `;
      case "accepted":
        return `
          background: #D1FAE5;
          color: #065F46;
        `;
      case "rejected":
        return `
          background: #FEE2E2;
          color: #991B1B;
        `;
      default:
        return "";
    }
  }}
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  color: #6b7280;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  padding: 0.75rem;
  text-align: left;
  font-weight: 500;
  color: #6b7280;
  border-bottom: 1px solid #e5e7eb;
`;

export const Td = styled.td`
  padding: 0.75rem;
  color: #111827;
  border-bottom: 1px solid #e5e7eb;
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.625rem;
  background: #f3f4f6;
  color: #374151;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
`;
