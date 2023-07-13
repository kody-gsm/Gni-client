import React, { useState } from "react";
import * as S from "./style";

function Signup(props) {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [repw, setRepw] = useState("");
  const [view, setView] = useState(true);
  const [review, setReView] = useState(true);

  const clickSetView = () => {
    setView(!view);
  };

  const clickSetReView = () => {
    setReView(!review);
  };

  return (
    <>
      <S.SignupBackground />
      <S.SignupSection>
        <S.SingupScreenSection>
          <S.Title>Sign up</S.Title>
          <S.SubTitle>GNI에 가입해서 친구들의 소식을 보러 갈까요?</S.SubTitle>
          <S.SignupEsset />
        </S.SingupScreenSection>
        <S.DivideLine />
        <S.SignupFormSection>
          <S.ShcoolNumInput
            type="text"
            placeholder="학번을 입력해주세요"
            defaultValue={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
            
          />
          <S.EmailInput
            type="text"
            placeholder="이메일을 입력해주세요"
            defaultValue={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />{" "}
          <S.PasswordInputDiv>
            <S.PasswordInput
              name="pwinput"
              type={view ? "password" : "text"}
              placeholder="비밀번호를 입력해주세요"
              defaultValue={pw}
              onChange={(e) => {
                setPw(e.target.value);
              }}
            />
            {view ? (
              <S.PasswordNotView onClick={clickSetView} />
            ) : (
              <S.PasswordView onClick={clickSetView} />
            )}
          </S.PasswordInputDiv>
          <S.PasswordInputDiv>
            <S.PasswordInput
              name="pwinput"
              type={review ? "password" : "text"}
              placeholder="비밀번호를 다시 입력해주세요"
              defaultValue={repw}
              onChange={(e) => {
                setRepw(e.target.value);
              }}
            />
            {review ? (
              <S.PasswordNotView onClick={clickSetReView} />
            ) : (
              <S.PasswordView onClick={clickSetReView} />
            )}
          </S.PasswordInputDiv>
          <S.LoginButton>LOGIN</S.LoginButton>
        </S.SignupFormSection>
      </S.SignupSection>
    </>
  );
}

export default Signup;
