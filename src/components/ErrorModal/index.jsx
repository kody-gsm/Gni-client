import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

function SuccessModal({ title, content, setModal, pageLink }) {
  const navigate = useNavigate();
  return (
    <>
      <S.Main>
        <S.ModalContainer
          onClick={() => {
            setModal(false);
            if(pageLink != ''){
              navigate(pageLink);
            }
          }}
        >
          <S.CheckImg />
          <S.Title>{title}</S.Title>
          <S.Content>{content}</S.Content>
        </S.ModalContainer>
      </S.Main>
    </>
  );
}

export default SuccessModal;
