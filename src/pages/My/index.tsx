import { BiEnvelope, BiPhone, BiBusSchool } from "react-icons/bi";
import * as S from "./style";

interface Application {
  id: string;
  clubName: string;
  clubLogo: string;
  appliedAt: string;
  status: "waiting" | "accepted" | "rejected";
}

const DUMMY_APPLICATIONS: Application[] = [
  {
    id: "1",
    clubName: "B1ND",
    clubLogo: "/images/b1nd.png",
    appliedAt: "2024-03-15",
    status: "waiting",
  },
  {
    id: "2",
    clubName: "CNS",
    clubLogo: "/images/cns.png",
    appliedAt: "2024-03-14",
    status: "accepted",
  },
];

const My = () => {
  const user = {
    name: "홍길동",
    studentId: "2024",
    grade: 1,
    class: 1,
    number: 1,
    email: "student@dsm.hs.kr",
    phone: "010-1234-5678",
    profileImage: "/images/profile.jpg",
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getStatusText = (status: Application["status"]) => {
    switch (status) {
      case "waiting":
        return "검토중";
      case "accepted":
        return "승인됨";
      case "rejected":
        return "거절됨";
      default:
        return "";
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <S.Title>마이페이지</S.Title>
        </S.HeaderContent>
      </S.Header>

      <S.ContentSection>
        <S.Grid>
          <S.ProfileSection>
            <S.ProfileImage>
              <img src={user.profileImage} alt="프로필 이미지" />
            </S.ProfileImage>
            <S.ProfileInfo>
              <S.Name>{user.name}</S.Name>
              <S.StudentId>{user.studentId}</S.StudentId>
            </S.ProfileInfo>
            <S.ProfileMeta>
              <S.MetaItem>
                <BiBusSchool />
                {user.grade}학년 {user.class}반 {user.number}번
              </S.MetaItem>
              <S.MetaItem>
                <BiEnvelope />
                {user.email}
              </S.MetaItem>
              <S.MetaItem>
                <BiPhone />
                {user.phone}
              </S.MetaItem>
            </S.ProfileMeta>
          </S.ProfileSection>

          <S.ContentArea>
            <S.Section>
              <S.SectionTitle>지원 현황</S.SectionTitle>
              {DUMMY_APPLICATIONS.length > 0 ? (
                DUMMY_APPLICATIONS.map((application) => (
                  <S.ClubInfo key={application.id}>
                    <S.ClubLogo>
                      <img
                        src={application.clubLogo}
                        alt={application.clubName}
                      />
                    </S.ClubLogo>
                    <S.ClubDetails>
                      <S.ClubName>{application.clubName}</S.ClubName>
                      <S.ClubRole>
                        지원일: {formatDate(application.appliedAt)}
                      </S.ClubRole>
                    </S.ClubDetails>
                    <S.Status status={application.status}>
                      {getStatusText(application.status)}
                    </S.Status>
                  </S.ClubInfo>
                ))
              ) : (
                <S.EmptyState>아직 지원한 동아리가 없습니다.</S.EmptyState>
              )}
            </S.Section>

            <S.Section>
              <S.SectionTitle>활동 내역</S.SectionTitle>
              <S.Table>
                <thead>
                  <tr>
                    <S.Th>일자</S.Th>
                    <S.Th>동아리</S.Th>
                    <S.Th>활동 내용</S.Th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <S.Td>{formatDate("2024-03-15")}</S.Td>
                    <S.Td>B1ND</S.Td>
                    <S.Td>프로젝트 회의 참석</S.Td>
                  </tr>
                  <tr>
                    <S.Td>{formatDate("2024-03-14")}</S.Td>
                    <S.Td>B1ND</S.Td>
                    <S.Td>UI 디자인 작업</S.Td>
                  </tr>
                </tbody>
              </S.Table>
            </S.Section>
          </S.ContentArea>
        </S.Grid>
      </S.ContentSection>
    </S.Container>
  );
};

export default My;
