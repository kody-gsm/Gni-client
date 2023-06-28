import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

function NotFound(props) {
  const navigate = useNavigate();

  const MyBackButton = () => {
    navigate("/");
  };

  return (
    <>
      <S.Background />
      <S.ContentArea>
        <S.ErrorMEssageArea>
          <S.Message404>404</S.Message404>
          <S.ErrorMessage>error</S.ErrorMessage>
          <S.ErrorPage>page</S.ErrorPage>
        </S.ErrorMEssageArea>
        <S.ErrorContent>
          죄송합니다. 현재페이지를 찾을 수 없습니다.
        </S.ErrorContent>
        <S.SubErrorContent>
          존재하지 않은 주소를 입력하셨거나. <br />
          요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
        </S.SubErrorContent>
        <S.LastPageButton onClick={MyBackButton}>
          메인 페이지로 돌아가기
        </S.LastPageButton>
        <S.Illustration />
      </S.ContentArea>
    </>
  );
}

export default NotFound;
