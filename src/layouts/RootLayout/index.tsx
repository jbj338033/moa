import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import * as S from "./style";

const RootLayout = () => {
  return (
    <S.Layout>
      <Header />
      <S.Main>
        <Outlet />
      </S.Main>
    </S.Layout>
  );
};

export default RootLayout;
