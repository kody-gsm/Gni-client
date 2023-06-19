import React, { useRef, useState } from "react";
import * as S from "./style";

function Login(props) {
  const pwRef = useRef("");
  const idRef = useRef("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwFocus, setPwFocus] = useState(true);
  const [view, setView] = useState(true);

  const clickSetView = () => {
    setView(!view);
  };

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
            placeholder="학번을 입력해주세요"
            defaultValue={id}
            ref={idRef}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <S.PasswordInputDiv>
            <S.PasswordInput
              name="pwinput"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              defaultValue={pw}
              ref={pwRef}
              onChange={(e) => {
                setPw(e.target.value);
              }}
              onFocus={() => {
                setPwFocus(true);
              }}
              onBlur={() => {
                setTimeout(() => {
                  setPwFocus(false);
                }, 200);
              }}
            />
            {pwFocus ? (
              view ? (
                <S.PasswordNotView onClick={clickSetView} />
              ) : (
                <S.PasswordView onClick={clickSetView} />
              )
            ) : null}
          </S.PasswordInputDiv>
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
