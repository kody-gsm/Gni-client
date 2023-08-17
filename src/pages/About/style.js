import { createGlobalStyle, styled } from "styled-components";
import LogoPath from "../../assets/logo.png";
import ContentBoxImgPath from "../../assets/MoreInfoImg1.png";
import SearchBoxImgPath from "../../assets/SearchBoxImg.png";
import CheckingPeoplePath from "../../assets/checkingPeople.png";

export const Background = createGlobalStyle`
#root,
html,
body {
    width: 100%;
    height: 100%;
    background-color: #27462F;
}

`;

export const Container = styled.div`
  margin-top: 90px;
  position: relative;
`;

export const LogoBox = styled.div`
  position: relative;

  margin: 32vh auto 0vh;
  background-color: white;
  width: 45vh;
  height: 17vh;
  border-radius: 20px;
  border: 2px #d9d9d9 solid;
  z-index: 2;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05);
`;

export const Logo = styled.div`
  width: 19vh;
  height: 15vh;
  margin: 0 auto;
  background-image: url(${LogoPath});
  background-repeat: no-repeat;
  object-fit: contain;
  background-size: cover;
  border: none;
  outline: none;
`;

export const AboutBox = styled.div`
  position: absolute; /* 추가 */
  top: calc(100% - 3vh); /* 수정 */
  left: 0;
  width: 100%;
  height: 40vh;
  margin-top: 0px;
  background-color: white;
  z-index: 1;
`;

export const AboutText = styled.p`
  margin-top: 7.3vh;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2vw;
  line-height: 3.5vh;
  text-align: center;

  color: #ababab;
`;

export const AboutFunctionMoreText = styled.p`
  margin-top: 15vh;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
  text-align: center;

  color: #27462f;
`;

export const ContentBoxImg = styled.div`
  margin: 40vh auto;
  width: 90%;
  height: 69vh;
  background-image: url(${ContentBoxImgPath});
  background-repeat: no-repeat;
  object-fit: contain;
  background-size: cover;
  border: none;
  outline: none;
`;

export const SearchImg = styled.div`
  margin: 40vh auto;
  width: 70%;
  height: 85vh;
  background-image: url(${SearchBoxImgPath});
  background-repeat: no-repeat;
  object-fit: contain;
  background-size: cover;
  border: none;
  outline: none;
`;

export const ManualBox = styled.div`
  position: absolute;
  background-color: white;
  width: 38vw;
  height: 10vh;
  border-radius: 20px;
  margin-bottom: -200px;
  margin-left: 53vw;
  border: 3px solid #d9d9d9;
  z-index: 2;
  margin-top: -50px;
`;

export const ManualIntroduce = styled.span`
  display: flex;
  font-size: 1.29vw;
  justify-content: center;
  align-items: center;
  line-height: 10vh;
  color: #003713;
`;

export const RecruitmentBox = styled.div`
  position: relative;
  margin: auto;
  margin-top: 180px;
  margin-bottom: 10vh;
  background-color: white;
  border-radius: 50px;
  border: 5px solid #d9d9d9;
  width: 1350px;
  height: 550px;
  display: flex;
  align-items: baseline;
  z-index: 1;
`;

export const InnerRecruitmentBox = styled.div`
  width: 90%;
  margin-top: 50px;
`;

export const HeadRecruitmentBox = styled.div`
  margin-left: 180px;
  display: flex;
`;

export const Name = styled.div``;

export const InnerName = styled.div`
  display: flex;
  align-items: baseline;
`;

export const UserName = styled.h1`
  font-size: 30px;
`;

export const MoreMent = styled.span`
  margin-top: 30px;
  margin-left: 10px;
  font-size: 20px;
  color: #27462f;
`;

export const CheckingPeople = styled.div`
  position: absolute;
  top: 50px;
  left: 1050px;
  width: 20vh;
  height: 15vh;
  margin: 0 auto;
  background-image: url(${CheckingPeoplePath});
  background-repeat: no-repeat;
  object-fit: contain;
  background-size: cover;
  border: none;
  outline: none;
`;

export const UnderLine = styled.hr`
  margin-left: 60px;
  margin-top: 20px;
  margin-bottom: 60px;
  width: 55%;
`;

export const Introduce = styled.span`
  font-size: 13px;
  margin-left: 60px;
  margin-bottom: 30px;
  color: #ababab;
`;

export const Contents = styled.div`
  margin: auto;
  display: flex;
  align-items: end;
  text-align: center;
  width: 107%;
`;

export const InnerContents = styled.div`
  height: 300px;
  overflow-x: scroll;
  display: flex;
  margin-bottom: -40px;
  &::-webkit-scrollbar {
    height: 55px;
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e7e7e7;
    border-radius: 100px;
    border: 25px solid white;
  }
`;

export const GotoService = styled.p`
  margin-right: 20px;
  margin-bottom: 3vh;
  text-align: right;
  color: #ababab;
  font-size: 1.2vw;
`;
