import { BiCodeBlock, BiPalette, BiChip, BiServer } from "react-icons/bi";
import * as S from "./style";

const categories = [
  {
    id: "development",
    icon: <BiCodeBlock size={24} />,
    title: "소프트웨어 개발",
    description:
      "웹, 모바일, 데스크톱 등 다양한 플랫폼의 애플리케이션을 개발하며 실무 역량을 키웁니다.",
    tag: "개발 동아리",
    image: "/images/software.jpg",
  },
  {
    id: "design",
    icon: <BiPalette size={24} />,
    title: "디자인 • UI/UX",
    description:
      "사용자 중심의 디자인 원칙을 배우고 실무에서 사용되는 다양한 디자인 도구를 다룹니다.",
    tag: "디자인 동아리",
    image: "/images/uiux.jpg",
  },
  {
    id: "ai",
    icon: <BiChip size={24} />,
    title: "AI • 알고리즘",
    description:
      "인공지능, 머신러닝, 알고리즘 등을 학습하고 실제 프로젝트에 적용하는 경험을 쌓습니다.",
    tag: "AI 동아리",
    image: "/images/algorithm.png",
  },
  {
    id: "infra",
    icon: <BiServer size={24} />,
    title: "시스템 • 네트워크",
    description:
      "서버 관리, 네트워크 보안, 클라우드 등 IT 인프라 전반에 대한 실무 지식을 습득합니다.",
    tag: "인프라 동아리",
    image: "/images/infra.png",
  },
];

const Home = () => {
  return (
    <S.Container>
      <S.MainSection>
        <S.MainContent>
          <S.MainTextContent>
            <S.MainTitle>
              새로운 도전,
              <br />
              <span>특별한 경험</span>의<br />
              시작
            </S.MainTitle>
            <S.MainDescription>
              DGSW의 다양한 동아리들과 함께 여러분의 꿈을 펼쳐보세요. 관심
              분야의 전문성을 키우고, 함께 성장할 동료들과 잊지 못할 추억을
              만들어갈 수 있습니다.
            </S.MainDescription>
            <S.ButtonGroup>
              <S.PrimaryButton to="/login">시작하기</S.PrimaryButton>
              <S.SecondaryButton to="/explore">둘러보기</S.SecondaryButton>
            </S.ButtonGroup>
          </S.MainTextContent>
          <S.MainImageSection>
            <S.MainImage
              src="/images/students.jpg"
              alt="DGSW 학생들의 활동 모습"
            />
          </S.MainImageSection>
        </S.MainContent>
      </S.MainSection>

      <S.CategorySection>
        <S.CategoryContainer>
          <S.SectionHeader>
            <S.SectionTitle>나에게 맞는 동아리 찾기</S.SectionTitle>
            <S.SectionDescription>
              다양한 분야의 동아리들이 여러분을 기다리고 있습니다. 관심 있는
              분야의 동아리에서 깊이 있는 활동을 경험해보세요.
            </S.SectionDescription>
          </S.SectionHeader>

          <S.CategoryGrid>
            {categories.map((category) => (
              <S.CategoryCard to={`/category/${category.id}`} key={category.id}>
                <S.CategoryImageWrapper>
                  <S.CategoryImage
                    src={category.image}
                    alt={`${category.title} 카테고리 이미지`}
                  />
                </S.CategoryImageWrapper>
                <S.CategoryContent>
                  <S.CategoryIcon>{category.icon}</S.CategoryIcon>
                  <S.CategoryTitle>{category.title}</S.CategoryTitle>
                  <S.CategoryDescription>
                    {category.description}
                  </S.CategoryDescription>
                  <S.CategoryTag>{category.tag}</S.CategoryTag>
                </S.CategoryContent>
              </S.CategoryCard>
            ))}
          </S.CategoryGrid>
        </S.CategoryContainer>
      </S.CategorySection>
    </S.Container>
  );
};

export default Home;
