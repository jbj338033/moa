import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #6b7280;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StatCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const StatIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #f3f4f6;
  border-radius: 8px;
  color: #6366f1;
`;

export const StatContent = styled.div`
  flex: 1;
`;

export const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  line-height: 1;
  margin-bottom: 0.5rem;
`;

export const StatTitle = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
`;

export const StatDescription = styled.div`
  font-size: 0.75rem;
  color: #9ca3af;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Section = styled.section`
  background: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  overflow: hidden;
`;

export const SectionTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  padding: 1.25rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const NoticeList = styled.div`
  padding: 1rem;
`;

export const NoticeItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #f3f4f6;

  &:last-of-type {
    border-bottom: none;
  }
`;

export const NoticeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const ImportantBadge = styled.span`
  background: #ef4444;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
`;

export const NoticeTitle = styled.h3`
  font-size: 0.938rem;
  font-weight: 500;
  color: #111827;
`;

export const NoticeDate = styled.span`
  font-size: 0.813rem;
  color: #6b7280;
`;

export const ApplicantList = styled.div`
  padding: 1rem;
`;

export const ApplicantItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-of-type {
    border-bottom: none;
  }
`;

export const ApplicantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ApplicantName = styled.span`
  font-size: 0.938rem;
  font-weight: 500;
  color: #111827;
`;

export const ApplicantClub = styled.span`
  font-size: 0.813rem;
  color: #6b7280;
`;

export const ApplicantMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
`;

export const ApplicantDate = styled.span`
  font-size: 0.813rem;
  color: #6b7280;
`;

interface StatusBadgeProps {
  status: string;
}

export const StatusBadge = styled.span<StatusBadgeProps>`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background: #fef3c7;
  color: #92400e;
`;

export const ViewAllButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background: transparent;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  color: #6b7280;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f9fafb;
    color: #111827;
  }
`;
