import { useLocation, useNavigate } from "react-router-dom";
import { BiHomeAlt, BiNotification, BiGroup, BiLogOut } from "react-icons/bi";
import * as S from "./style";

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminSidebar = ({ isOpen, onClose }: AdminSidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      label: "홈",
      path: "/admin",
      icon: <BiHomeAlt size={24} />,
    },
    {
      label: "공지사항 관리",
      path: "/admin/notice",
      icon: <BiNotification size={24} />,
    },
    {
      label: "동아리 관리",
      path: "/admin/clubs",
      icon: <BiGroup size={24} />,
    },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  const handleLogout = async () => {
    try {
      // TODO: 로그아웃 API 호출
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      <S.Sidebar isOpen={isOpen}>
        <S.Nav>
          {navItems.map((item) => (
            <S.NavItem
              key={item.path}
              isActive={location.pathname === item.path}
              onClick={() => handleNavigation(item.path)}
            >
              {item.icon}
              <S.NavLabel>{item.label}</S.NavLabel>
            </S.NavItem>
          ))}
        </S.Nav>

        <S.LogoutButton onClick={handleLogout} isActive>
          <BiLogOut size={24} />
          <span>로그아웃</span>
        </S.LogoutButton>
      </S.Sidebar>

      <S.Overlay isVisible={isOpen} onClick={onClose} />
    </>
  );
};

export default AdminSidebar;
