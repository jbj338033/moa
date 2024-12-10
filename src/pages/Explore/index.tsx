import { useState, useMemo } from "react";
import { BiSearch, BiUser, BiTime } from "react-icons/bi";
import * as S from "./style";

interface Club {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  memberCount: number;
  activityTime: string;
  image: string;
}

const DUMMY_CLUBS: Club[] = [
  {
    id: "1",
    name: "B1nd",
    description: "학교 '도담도담'을 개발하는 동아리입니다.",
    category: "개발",
    tags: ["Web", "Server", "Android", "iOS"],
    memberCount: 20,
    activityTime: "매일",
    image: "/images/b1nd.png",
  },
  {
    id: "2",
    name: "CNS",
    description:
      "대구소프트웨어마이스터고등학교 입학 지원 시스템 '아이다'를 개발하는 동아리입니다.",
    category: "개발",
    tags: ["Web", "Server"],
    memberCount: 15,
    activityTime: "매일",
    image: "/images/cns.png",
  },
  {
    id: "3",
    name: "DMS",
    description: "기숙사 관리 시스템 '디미고인'을 개발하는 동아리입니다.",
    category: "개발",
    tags: ["Web", "Server", "Android", "iOS"],
    memberCount: 18,
    activityTime: "매일",
    image: "/images/dms.png",
  },
  {
    id: "4",
    name: "AppDev",
    description: "모바일 애플리케이션을 개발하는 동아리입니다.",
    category: "개발",
    tags: ["Android", "iOS", "Flutter", "React Native"],
    memberCount: 12,
    activityTime: "매주 화/목",
    image: "/images/appdev.png",
  },
];

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const filteredClubs = useMemo(() => {
    return DUMMY_CLUBS.filter((club) => {
      const matchesSearch =
        club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        club.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        club.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesCategory =
        categoryFilter === "all" || club.category === categoryFilter;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "members") return b.memberCount - a.memberCount;
      return 0;
    });
  }, [searchTerm, categoryFilter, sortBy]);

  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <S.Title>동아리 둘러보기</S.Title>
          <S.Description>
            DGSW의 다양한 동아리들을 살펴보고 여러분에게 맞는 동아리를
            찾아보세요.
          </S.Description>
        </S.HeaderContent>
      </S.Header>

      <S.ContentSection>
        <S.FilterSection>
          <S.SearchBox>
            <S.SearchIcon>
              <BiSearch size={20} />
            </S.SearchIcon>
            <S.SearchInput
              type="text"
              placeholder="동아리 이름, 설명, 태그로 검색"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </S.SearchBox>

          <S.FilterGroup>
            <S.Select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="all">전체 카테고리</option>
              <option value="개발">개발</option>
              <option value="디자인">디자인</option>
              <option value="AI">AI</option>
              <option value="인프라">인프라</option>
            </S.Select>

            <S.Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">이름순</option>
              <option value="members">인원순</option>
            </S.Select>
          </S.FilterGroup>
        </S.FilterSection>

        <S.ClubGrid>
          {filteredClubs.map((club) => (
            <S.ClubCard key={club.id}>
              <S.ClubImage>
                <img src={club.image} alt={`${club.name} 대표 이미지`} />
              </S.ClubImage>
              <S.ClubContent>
                <S.ClubTitle>{club.name}</S.ClubTitle>
                <S.ClubDescription>{club.description}</S.ClubDescription>
                <S.ClubTags>
                  {club.tags.map((tag, index) => (
                    <S.Tag key={`${club.id}-${tag}-${index}`}>{tag}</S.Tag>
                  ))}
                </S.ClubTags>
                <S.ClubMeta>
                  <S.MetaItem>
                    <BiUser />
                    {club.memberCount}명
                  </S.MetaItem>
                  <S.MetaItem>
                    <BiTime />
                    {club.activityTime}
                  </S.MetaItem>
                </S.ClubMeta>
              </S.ClubContent>
            </S.ClubCard>
          ))}
        </S.ClubGrid>
      </S.ContentSection>
    </S.Container>
  );
};

export default Explore;
