import React, { useState } from "react";
import * as S from "./style";

function ForgotPW(props) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [repw , setRepw] = useState("");
  const [pwFocus, setPwFocus] = useState(false);
  const [view, setView] = useState(true);
  const [rePwFocus, setRePwFocus] = useState(false);
  const [review, setReView] = useState(true);

  const clickSetView = () => {
    setView(!view);
  };

  const clickSetReView = () => {
    setReView(!review);
  };

  return (
    <>
      <S.ForgotPWBackground />
      <S.ForgotSection>
        <S.ForgotPwScreenSection>
          <S.ForgotTitle>Forgotpassword</S.ForgotTitle>
          <S.SubTitle>
            비밀번호를 잊어버리셨나요?
            <br />
            비밀번호를 함께 찾으러 가볼까요?
          </S.SubTitle>
          <S.ForgotPaint />
        </S.ForgotPwScreenSection>
        <S.DivideLine />
        <S.ForgotPWFormSection>
          <S.EmailInput
            type="text"
            placeholder="이메일을 입력해주세요"
            defaultValue={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <S.PasswordInputDiv>
            <S.PasswordInput
              name="pwinput"
              type={view ? "password" : "text"}
              placeholder="비밀번호를 입력해주세요"
              defaultValue={pw}
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

          <S.PasswordInputDiv>
            <S.PasswordInput
              name="pwinput"
              type={review ? "password" : "text"}
              placeholder="비밀번호를 다시 입력해주세요"
              defaultValue={repw}
              onChange={(e) => {
                setRepw(e.target.value);
              }}
              onFocus={() => {
                setRePwFocus(true);
              }}
              onBlur={() => {
                setTimeout(() => {
                  setRePwFocus(false);
                }, 200);
              }}
            />
            {rePwFocus ? (
              review ? (
                <S.PasswordNotView onClick={clickSetReView} />
              ) : (
                <S.PasswordView onClick={clickSetReView} />
              )
            ) : null}
          </S.PasswordInputDiv>
          
          <S.ReLogin href="/login">다시 로그인하러 가볼까요?</S.ReLogin>
          <S.ReLoginLine />
          <S.LoginButton>LOGIN</S.LoginButton>
        </S.ForgotPWFormSection>
      </S.ForgotSection>
    </>
  );
}

export default ForgotPW;
