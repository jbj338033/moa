import { BiTime, BiUser, BiMessageDetail } from "react-icons/bi";
import * as S from "./style";

interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  comments: number;
  isImportant: boolean;
}

const DUMMY_NOTICES: Notice[] = [
  {
    id: "1",
    title: "[필독] 2024년도 동아리 지원 안내",
    content:
      "2024년도 동아리 지원과 관련된 주요 일정 및 안내사항입니다. 모든 지원자는 반드시 숙지하시기 바랍니다. 지원 기간은 3월 15일부터 3월 31일까지입니다.",
    date: "2024-03-01",
    author: "학생회",
    comments: 5,
    isImportant: true,
  },
  {
    id: "2",
    title: "동아리 면접 일정 안내",
    content:
      "각 동아리별 면접 일정이 확정되었습니다. 지원자들은 본인의 면접 시간을 반드시 확인해주시기 바랍니다. 면접 시간은 마이페이지에서 확인 가능합니다.",
    date: "2024-03-05",
    author: "학생회",
    comments: 3,
    isImportant: false,
  },
  {
    id: "3",
    title: "동아리 활동 계획서 제출 안내",
    content:
      "2024년도 1학기 동아리 활동 계획서를 제출해주시기 바랍니다. 제출 기한은 3월 20일까지이며, 양식은 공지사항 하단에서 다운로드 가능합니다.",
    date: "2024-03-10",
    author: "교무실",
    comments: 2,
    isImportant: false,
  },
  {
    id: "4",
    title: "동아리실 사용 규칙 안내",
    content:
      "새 학기를 맞아 동아리실 사용 규칙이 개정되었습니다. 모든 동아리 회원들은 변경된 규칙을 확인하고 준수해주시기 바랍니다.",
    date: "2024-03-12",
    author: "학생회",
    comments: 1,
    isImportant: true,
  },
];

const Notice = () => {
  const handleNoticeClick = (id: string) => {
    console.log(`Notice ${id} clicked`);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <S.Title>공지사항</S.Title>
          <S.Description>
            동아리 활동과 관련된 중요한 공지사항을 확인하실 수 있습니다. 필독
            공지사항은 반드시 확인해주시기 바랍니다.
          </S.Description>
        </S.HeaderContent>
      </S.Header>

      <S.ContentSection>
        <S.NoticeList>
          {DUMMY_NOTICES.map((notice) => (
            <S.NoticeItem
              key={notice.id}
              onClick={() => handleNoticeClick(notice.id)}
            >
              <S.NoticeHeader>
                <S.TitleWrapper>
                  {notice.isImportant && (
                    <S.ImportantBadge>필독</S.ImportantBadge>
                  )}
                  <S.NoticeTitle>{notice.title}</S.NoticeTitle>
                </S.TitleWrapper>
                <S.NoticeDate>{formatDate(notice.date)}</S.NoticeDate>
              </S.NoticeHeader>
              <S.NoticePreview>{notice.content}</S.NoticePreview>
              <S.NoticeMeta>
                <S.MetaItem>
                  <BiUser />
                  {notice.author}
                </S.MetaItem>
                <S.MetaItem>
                  <BiTime />
                  {formatDate(notice.date)}
                </S.MetaItem>
                <S.MetaItem>
                  <BiMessageDetail />
                  댓글 {notice.comments}개
                </S.MetaItem>
              </S.NoticeMeta>
            </S.NoticeItem>
          ))}
        </S.NoticeList>
      </S.ContentSection>
    </S.Container>
  );
};

export default Notice;
