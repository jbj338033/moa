import { BiMenu, BiMoon, BiSun } from "react-icons/bi";
import * as S from "./style";

interface AdminHeaderProps {
  onMenuClick: () => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

const AdminHeader = ({
  onMenuClick,
  isDarkMode,
  onThemeToggle,
}: AdminHeaderProps) => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HeaderLeft>
          <S.MenuButton onClick={onMenuClick}>
            <BiMenu size={24} />
          </S.MenuButton>
          <S.Logo to="/admin">
            moa
            <S.LogoHighlight>ADMIN</S.LogoHighlight>
          </S.Logo>
        </S.HeaderLeft>

        <S.HeaderRight>
          <S.ThemeButton onClick={onThemeToggle}>
            {isDarkMode ? <BiSun size={24} /> : <BiMoon size={24} />}
          </S.ThemeButton>
          <S.AdminInfo>
            <S.AdminAvatar />
            <S.AdminDetail>
              <S.AdminName>관리자</S.AdminName>
              <S.AdminRole>시스템 관리자</S.AdminRole>
            </S.AdminDetail>
          </S.AdminInfo>
        </S.HeaderRight>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default AdminHeader;
