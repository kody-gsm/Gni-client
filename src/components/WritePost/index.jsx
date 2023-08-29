import React from "react";
import * as S from "./style";
import CommentList from "../CommentList";

function WritePost({ setModal, func, postInfo, setPost, isdisabled }) {
  return (
    <>
      <S.Main>
        <S.ModalContainer>
          <S.InnerContainer>
            <S.Head>
              <S.ClosePost onClick={e => setModal(false)}>X</S.ClosePost>
              <S.Profile>
                <S.ProfileImg />
                <S.Name> {postInfo.name} </S.Name>
                <S.ProfileLine />
                <S.TitleInput
                  placeholder="주제를 적어주세요"
                  disabled={isdisabled}
                  onChange={(e) => {
                    setPost(a => ({ ...a, title: e.target.value }));
                  }}
                  value={postInfo?.title}
                />
              </S.Profile>
            </S.Head>
            <S.HeadLine />
            <S.TextAreaContainer>
              <S.TextArea
                placeholder="주제에 대한 내용을 적어주세요"
                disabled={isdisabled}
                onChange={(e) => {
                  setPost(a => ({
                    ...a, text: e.target.value
                  }))
                }}
                value={postInfo?.text}
              />
            </S.TextAreaContainer>
            {!isdisabled && <S.PostButton onClick={() => {
              func(); //게시물 올리거나 수정하는 함수(이름이 애매함)
              setModal(false);
            }} >게시글 올리기</S.PostButton>}
          </S.InnerContainer>
        </S.ModalContainer>
        <CommentList commentsList={postInfo.comments} id={postInfo?.id} />
      </S.Main>
    </>
  );
}

export default WritePost;
