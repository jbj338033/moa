import { RiLoginBoxLine } from "react-icons/ri";
import * as S from "./style";

interface NavLinkItem {
  path: string;
  label: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { path: "/explore", label: "동아리 둘러보기" },
  { path: "/apply", label: "지원하기" },
  { path: "/notice", label: "공지사항" },
];

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.LeftSection>
          <S.Logo to="/">moa</S.Logo>
          <S.Nav>
            {NAV_LINKS.map(({ path, label }) => (
              <S.NavItem key={path} to={path}>
                {label}
              </S.NavItem>
            ))}
          </S.Nav>
        </S.LeftSection>

        <S.LoginButton to="/login">
          <RiLoginBoxLine />
          로그인
        </S.LoginButton>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
