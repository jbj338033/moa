import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminSidebar from "../../components/admin/AdminSidebar";
import * as S from "./style";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <S.Layout isDark={isDarkMode}>
      <AdminHeader
        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode(!isDarkMode)}
      />

      <AdminSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <S.Container>
        <S.Main>
          <Outlet />
        </S.Main>
      </S.Container>
    </S.Layout>
  );
};

export default AdminLayout;
