import { useState } from "react";
import { BiPlus, BiEditAlt, BiTrash } from "react-icons/bi";
import NoticeEditor from "./NoticeEditor";
import * as S from "./style";

interface Notice {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  isImportant: boolean;
}

const AdminNotice = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  const dummyNotices: Notice[] = [
    {
      id: "1",
      title: "[필독] 2024년도 동아리 지원 안내",
      content: "2024년도 동아리 지원과 관련된 주요 일정 및 안내사항입니다...",
      createdAt: "2024-03-01",
      isImportant: true,
    },
    {
      id: "2",
      title: "동아리 면접 일정 안내",
      content: "각 동아리별 면접 일정이 확정되었습니다...",
      createdAt: "2024-03-05",
      isImportant: false,
    },
  ];

  const handleEdit = (notice: Notice) => {
    setSelectedNotice(notice);
    setIsEditorOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      // TODO: API 호출
      console.log("Delete notice:", id);
    }
  };

  const handleCreate = () => {
    setSelectedNotice(null);
    setIsEditorOpen(true);
  };

  const closeEditor = () => {
    setIsEditorOpen(false);
    setSelectedNotice(null);
  };

  return (
    <S.Container>
      <S.Header>
        <S.TitleArea>
          <S.Title>공지사항 관리</S.Title>
          <S.Description>
            동아리 관련 공지사항을 작성하고 관리할 수 있습니다.
          </S.Description>
        </S.TitleArea>
        <S.CreateButton onClick={handleCreate}>
          <BiPlus size={20} />새 공지사항
        </S.CreateButton>
      </S.Header>

      <S.NoticeList>
        {dummyNotices.map((notice) => (
          <S.NoticeItem key={notice.id}>
            <S.NoticeContent>
              <S.NoticeHeader>
                {notice.isImportant && (
                  <S.ImportantBadge>필독</S.ImportantBadge>
                )}
                <S.NoticeTitle>{notice.title}</S.NoticeTitle>
              </S.NoticeHeader>
              <S.NoticeText>{notice.content}</S.NoticeText>
              <S.NoticeDate>{notice.createdAt}</S.NoticeDate>
            </S.NoticeContent>
            <S.NoticeActions>
              <S.ActionButton onClick={() => handleEdit(notice)}>
                <BiEditAlt size={20} />
              </S.ActionButton>
              <S.ActionButton
                onClick={() => handleDelete(notice.id)}
                variant="danger"
              >
                <BiTrash size={20} />
              </S.ActionButton>
            </S.NoticeActions>
          </S.NoticeItem>
        ))}
      </S.NoticeList>

      {isEditorOpen && (
        <NoticeEditor notice={selectedNotice} onClose={closeEditor} />
      )}
    </S.Container>
  );
};

export default AdminNotice;
