import React, { useState } from "react";
import * as S from "./style";
import axios from "axios";

function WritePost({ name, setModal }) {
  const [title, setTitle] = useState();
  const [text, setText] = useState();

  return (
    <>
      <S.Main>
        <S.ModalContainer>
          <S.InnerContainer>
            <S.Head>
              <S.Profile>
                <S.ProfileImg />
                <S.Name> {name} </S.Name>
                <S.ProfileLine />
                <S.TitleInput
                  placeholder="주제를 적어주세요"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </S.Profile>
            </S.Head>
            <S.HeadLine />
            <S.TextAreaContainer>
              <S.TextArea
                placeholder="주제에 대한 내용을 적어주세요"
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
            </S.TextAreaContainer>
            <S.PostButton onClick={() => { setModal(false)}} >게시글 올리기</S.PostButton>
          </S.InnerContainer>
        </S.ModalContainer>
      </S.Main>
    </>
  );
}

export default WritePost;
