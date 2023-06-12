import React, { useState } from "react";
import * as S from "./style";
import PWView from "../../assets/PasswordView.png";
import PWNotView from "../../assets/PasswordNotView.png";

function Login(props) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <>
      <S.LoginBackground />
      <S.LoginSection>
        <S.LoginScreenSection>
          <S.LoginTitle>LOGIN</S.LoginTitle>
          <S.LoginSubTitle>
            다시 오셨네요! 반가워요
            <br />
            어떤 새로운 소식들이 올라왔는지 GNI로 함께 가볼까요?
          </S.LoginSubTitle>
          <S.LoginPaint />
        </S.LoginScreenSection>
        <S.DivideLine />
        <S.LoginFormSection>
          <S.IdInput
            type="text"
            placeholder="아이디를 입력해주세요"
            defaultValue={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <S.PasswordInput
            type="password"
            placeholder="비밀번호를 입력해주세요"
            defaultValue={pw}
            onChange={(e) => {
              setPw(e.target.value);
            }}
          />
          <S.ForgotPassword href="./forgotpw">
            비밀번호를 잊어버리셨나요?
          </S.ForgotPassword>
          <S.ForgotPasswordLine />
          <S.LoginButton>LOGIN</S.LoginButton>
        </S.LoginFormSection>
      </S.LoginSection>
    </>
  );
}

export default Login;
