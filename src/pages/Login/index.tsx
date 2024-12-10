import React from "react";
import { RiLoginBoxLine } from "react-icons/ri";
import * as S from "./style";

const Login: React.FC = () => {
  const handleDodamLogin = () => {
    window.location.href = "https://dauth.b1nd.com/auth";
  };

  return (
    <S.Container>
      <S.LoginContainer>
        <S.LogoArea>
          <S.Logo>moa</S.Logo>
          <S.Description>DGSW 동아리 플랫폼</S.Description>
        </S.LogoArea>

        <S.LoginButton onClick={handleDodamLogin}>
          <RiLoginBoxLine />
          도담도담으로 시작하기
        </S.LoginButton>
      </S.LoginContainer>
    </S.Container>
  );
};

export default Login;
