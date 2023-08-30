import Nav from "../../components/Nav/Nav";
import Boxcontent from "../../components/Boxcontent/boxcontent";
import * as S from "./style";

export default function About() {
  return (
    <>
      <Nav />
      <S.Background />
      <S.Container>
        <S.LogoBox>
          <S.Logo />
        </S.LogoBox>
        <S.AboutBox>
          <S.AboutText>
            GNI는 학교 내의 커뮤니티 사이트입니다. <br />
            프로젝트의 인원을 모집하여같이 프로젝트를 하며 경험을 쌓을 수도
            있고,
            <br />
            자신만의 게시글을 올려 친구들과 함께 소통을 할 수도 있습니다.
            <br />
            같이 댓글과 좋아요를 남기며 친구들과 함께 더 가까워질 수 있어요 !
            <br />
          </S.AboutText>
          <S.AboutFunctionMoreText>
            그럼 이제 GNI에 어떤 기능이 있는지 함께 보러 가볼까요 ?
          </S.AboutFunctionMoreText>

          <S.ContentBoxImg />

          <S.SearchImg />

          <S.ManualBox>
            <S.ManualIntroduce>
              사용자의 전공에 맞춰서 맞춤모집 게시글을 추천해드려요!
            </S.ManualIntroduce>
          </S.ManualBox>

          <S.RecruitmentBox>
            <S.InnerRecruitmentBox>
              <S.HeadRecruitmentBox>
                <S.Name>
                  <S.InnerName>
                    <S.UserName>{"GNI"}</S.UserName>
                    <span>님의</span>
                  </S.InnerName>
                  <hr />
                </S.Name>
                <S.MoreMent>전공에 맞는 커뮤니티 게시글이에요</S.MoreMent>
              </S.HeadRecruitmentBox>
              <S.CheckingPeople />
              <S.UnderLine />
              <S.Introduce>
                스크롤해서 커뮤니티 게시글들을 한 번 봐보세요!
              </S.Introduce>
              <S.Contents>
                <S.InnerContents>
                  {
                    <>
                      <Boxcontent
                        name={"GNI"}
                        title={"프론트 구해요"}
                        answers={999}
                        likes={999}
                        checking={false}
                      />
                      <Boxcontent
                        name={"손혜린"}
                        title={"프론트 & 백 구해요"}
                        answers={999}
                        likes={999}
                        checking={false}
                      />
                      <Boxcontent
                        name={"변도진"}
                        title={"장고 하는 오영기 구해요"}
                        answers={999}
                        likes={999}
                        checking={false}
                      />
                      <Boxcontent
                        name={"김강현"}
                        title={"디자이너 찾아요!"}
                        answers={999}
                        likes={999}
                        checking={false}
                      />
                    </>
                  }
                </S.InnerContents>
              </S.Contents>
            </S.InnerRecruitmentBox>
          </S.RecruitmentBox>
          <S.GotoService>이제 GINI를 만나러 가볼까요 ?</S.GotoService>
        </S.AboutBox>
      </S.Container>
    </>
  );
}
