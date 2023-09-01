import React, { useState } from "react";
import * as S from "./style";
import axios from "axios";

function ForgotPW(props) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [repw, setRepw] = useState("");
  const [view, setView] = useState(true);
  const [review, setReView] = useState(true);
  const [emailVerified, setEmailVerified] = useState(0); //이메일 인증 하기 버튼 0 이메일 인증 확인 버튼 1 이메일 인증 확인됨 2
  const url = process.env.REACT_APP_BACKEND_URL;

  const clickSetView = () => {
    setView(!view);
  };

  const clickSetReView = () => {
    setReView(!review);
  };

  const verifyingEmail = async e => {
    if (email !== '') {
      await axios.post(`${url}/common/password/`, { email: email, headers: { 'Authorization': '' } })
        .then(e => {
          alert("이메일을 확인해주세요");
          setEmailVerified(1);
        }).catch(e => {
          alert("이메일을 확인해주세요")
        })
    } else {
      alert("이메일을 제대로 입력해주세요");
    }
  }

  const checkVerified = async e => {
    if (email !== '') {
      await axios.get(`${url}/common/password/?email=${email}`)
        .then(e => {
          if (e) {
            alert("이메일 인증이 완료되었습니다.");
            setEmailVerified(2);
          }
        }).catch(e => {
          alert("이메일을 확인해주세요")
        })
    }
  }

  const changePw = async e => {
    await axios.patch(`${url}/common/password?email=${email}`, { password: pw })
      .then(e => {
        alert("성공적으로 변경되었습니다.");
        window.location.href = '/login';
      }).catch(e => {
        console.log(e);
      })
  }


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
          {emailVerified === 0 ?
            <S.EmailVerifyingButton onClick={verifyingEmail}>이메일 인증하기</S.EmailVerifyingButton> :
            emailVerified === 1 ?
              <S.EmailVerifyingButton onClick={checkVerified}>인증 확인하기</S.EmailVerifyingButton> :
              <S.EmailVerifyingButton>인증 확인됨</S.EmailVerifyingButton>}
          <S.EmailInput
            type="text"
            placeholder="이메일을 입력해주세요"
            defaultValue={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            disabled={emailVerified !== 0}
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
              disabled={emailVerified !== 2}
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
              disabled={emailVerified !== 2}
            />
            {review ? (
              <S.PasswordNotView onClick={clickSetReView} />
            ) : (
              <S.PasswordView onClick={clickSetReView} />
            )}
          </S.PasswordInputDiv>

          <S.ReLogin href="/login">다시 로그인하러 가볼까요?</S.ReLogin>
          <S.ReLoginLine />
          <S.LoginButton onClick={changePw}>비밀번호 바꾸기</S.LoginButton>
        </S.ForgotPWFormSection>
      </S.ForgotSection>
    </>
  );
}

export default ForgotPW;
