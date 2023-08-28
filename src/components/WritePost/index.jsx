import React from "react";
import * as S from "./style";

function WritePost({ setCreateModal, name, setModal, func, text, setText, title, setTitle, isdisabled }) {
  return (
    <>
      <S.Main>
        <S.ModalContainer>
          <S.InnerContainer>
            <S.Head>
              <S.ClosePost onClick={e => setCreateModal(false)}>X</S.ClosePost>
              <S.Profile>
                <S.ProfileImg />
                <S.Name> {name} </S.Name>
                <S.ProfileLine />
                <S.TitleInput
                  placeholder="주제를 적어주세요"
                  disabled={isdisabled}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                />
              </S.Profile>
            </S.Head>
            <S.HeadLine />
            <S.TextAreaContainer>
              <S.TextArea
                placeholder="주제에 대한 내용을 적어주세요"
                disabled={isdisabled}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                value={text}
              />
            </S.TextAreaContainer>
            <S.PostButton onClick={() => {
              func();
              setModal(false);
            }} >게시글 올리기</S.PostButton>
          </S.InnerContainer>
        </S.ModalContainer>
      </S.Main>
    </>
  );
}

export default WritePost;
