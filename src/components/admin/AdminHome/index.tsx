import React from "react";
import { BiGroup, BiNotification, BiTime, BiCheckCircle } from "react-icons/bi";
import * as S from "./style";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
}

const StatCard = ({ title, value, icon, description }: StatCardProps) => (
  <S.StatCard>
    <S.StatIcon>{icon}</S.StatIcon>
    <S.StatContent>
      <S.StatValue>{value}</S.StatValue>
      <S.StatTitle>{title}</S.StatTitle>
      {description && <S.StatDescription>{description}</S.StatDescription>}
    </S.StatContent>
  </S.StatCard>
);

const AdminHome = () => {
  const stats = [
    {
      title: "총 동아리 수",
      value: "12",
      icon: <BiGroup size={24} />,
      description: "활동 중인 동아리",
    },
    {
      title: "신규 지원자",
      value: "28",
      icon: <BiTime size={24} />,
      description: "승인 대기 중",
    },
    {
      title: "이번 달 공지사항",
      value: "15",
      icon: <BiNotification size={24} />,
      description: "최근 30일",
    },
    {
      title: "승인된 지원서",
      value: "45",
      icon: <BiCheckCircle size={24} />,
      description: "2024년 총계",
    },
  ];

  const recentNotices = [
    {
      id: 1,
      title: "[필독] 2024년도 동아리 지원 안내",
      date: "2024-03-01",
      isImportant: true,
    },
    {
      id: 2,
      title: "동아리 면접 일정 안내",
      date: "2024-03-05",
      isImportant: false,
    },
    {
      id: 3,
      title: "동아리 활동 계획서 제출 안내",
      date: "2024-03-10",
      isImportant: false,
    },
  ];

  const recentApplicants = [
    {
      id: 1,
      name: "김철수",
      club: "B1ND",
      appliedAt: "2024-03-15 14:30",
      status: "pending",
    },
    {
      id: 2,
      name: "이영희",
      club: "CNS",
      appliedAt: "2024-03-15 15:20",
      status: "pending",
    },
    {
      id: 3,
      name: "박지민",
      club: "DMS",
      appliedAt: "2024-03-15 16:10",
      status: "pending",
    },
  ];

  return (
    <S.Container>
      <S.Header>
        <S.Title>관리자 대시보드</S.Title>
        <S.Description>동아리 관리 현황을 한눈에 확인하세요.</S.Description>
      </S.Header>

      <S.StatsGrid>
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </S.StatsGrid>

      <S.ContentGrid>
        <S.Section>
          <S.SectionTitle>최근 공지사항</S.SectionTitle>
          <S.NoticeList>
            {recentNotices.map((notice) => (
              <S.NoticeItem key={notice.id}>
                <S.NoticeHeader>
                  {notice.isImportant && (
                    <S.ImportantBadge>필독</S.ImportantBadge>
                  )}
                  <S.NoticeTitle>{notice.title}</S.NoticeTitle>
                </S.NoticeHeader>
                <S.NoticeDate>{notice.date}</S.NoticeDate>
              </S.NoticeItem>
            ))}
            <S.ViewAllButton>모든 공지사항 보기</S.ViewAllButton>
          </S.NoticeList>
        </S.Section>

        <S.Section>
          <S.SectionTitle>최근 지원자</S.SectionTitle>
          <S.ApplicantList>
            {recentApplicants.map((applicant) => (
              <S.ApplicantItem key={applicant.id}>
                <S.ApplicantInfo>
                  <S.ApplicantName>{applicant.name}</S.ApplicantName>
                  <S.ApplicantClub>{applicant.club}</S.ApplicantClub>
                </S.ApplicantInfo>
                <S.ApplicantMeta>
                  <S.ApplicantDate>{applicant.appliedAt}</S.ApplicantDate>
                  <S.StatusBadge status={applicant.status}>
                    승인 대기
                  </S.StatusBadge>
                </S.ApplicantMeta>
              </S.ApplicantItem>
            ))}
            <S.ViewAllButton>모든 지원자 보기</S.ViewAllButton>
          </S.ApplicantList>
        </S.Section>
      </S.ContentGrid>
    </S.Container>
  );
};

export default AdminHome;
