import { useState } from "react";
import { BiPlus, BiEditAlt, BiTrash, BiUser } from "react-icons/bi";
import ClubEditor from "./ClubEditor";
import * as S from "./style";

interface Club {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  leader: {
    name: string;
    grade: number;
    class: number;
    number: number;
  };
  status: "active" | "inactive";
}

const AdminClubs = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);

  const dummyClubs: Club[] = [
    {
      id: "1",
      name: "B1ND",
      description: "스마트 스쿨을 꿈꾸는 소프트웨어 개발 동아리",
      memberCount: 15,
      leader: {
        name: "김철수",
        grade: 2,
        class: 1,
        number: 1,
      },
      status: "active",
    },
    {
      id: "2",
      name: "CNS",
      description: "네트워크 보안 전문 동아리",
      memberCount: 12,
      leader: {
        name: "이영희",
        grade: 2,
        class: 2,
        number: 3,
      },
      status: "active",
    },
    {
      id: "3",
      name: "DMS",
      description: "기숙사 관리 시스템 개발 동아리",
      memberCount: 10,
      leader: {
        name: "박지민",
        grade: 2,
        class: 3,
        number: 2,
      },
      status: "active",
    },
  ];

  const handleEdit = (club: Club) => {
    setSelectedClub(club);
    setIsEditorOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      // TODO: API 호출
      console.log("Delete club:", id);
    }
  };

  const handleCreate = () => {
    setSelectedClub(null);
    setIsEditorOpen(true);
  };

  const closeEditor = () => {
    setIsEditorOpen(false);
    setSelectedClub(null);
  };

  return (
    <S.Container>
      <S.Header>
        <S.TitleArea>
          <S.Title>동아리 관리</S.Title>
          <S.Description>
            동아리 정보를 관리하고 신규 동아리를 등록할 수 있습니다.
          </S.Description>
        </S.TitleArea>
        <S.CreateButton onClick={handleCreate}>
          <BiPlus size={20} />새 동아리
        </S.CreateButton>
      </S.Header>

      <S.ClubGrid>
        {dummyClubs.map((club) => (
          <S.ClubCard key={club.id}>
            <S.ClubHeader>
              <S.ClubName>{club.name}</S.ClubName>
              <S.ClubActions>
                <S.ActionButton onClick={() => handleEdit(club)}>
                  <BiEditAlt size={18} />
                </S.ActionButton>
                <S.ActionButton
                  onClick={() => handleDelete(club.id)}
                  variant="danger"
                >
                  <BiTrash size={18} />
                </S.ActionButton>
              </S.ClubActions>
            </S.ClubHeader>

            <S.ClubDescription>{club.description}</S.ClubDescription>

            <S.ClubInfo>
              <S.InfoItem>
                <BiUser />
                <span>{club.memberCount}명</span>
              </S.InfoItem>
              <S.InfoItem>
                <span>부장: {club.leader.name}</span>
                <span>
                  ({club.leader.grade}-{club.leader.class}-
                  {String(club.leader.number).padStart(2, "0")})
                </span>
              </S.InfoItem>
            </S.ClubInfo>

            <S.ClubFooter>
              <S.StatusBadge status={club.status}>
                {club.status === "active" ? "활동중" : "비활동"}
              </S.StatusBadge>
              <S.ViewDetailsButton>상세 보기</S.ViewDetailsButton>
            </S.ClubFooter>
          </S.ClubCard>
        ))}
      </S.ClubGrid>

      {isEditorOpen && <ClubEditor club={selectedClub} onClose={closeEditor} />}
    </S.Container>
  );
};

export default AdminClubs;
