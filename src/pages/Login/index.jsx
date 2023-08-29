import React, { useRef, useState } from "react";
import * as S from "./style";
import axios from "axios";
import { createPortal } from "react-dom";
import ErrorModal from "../../components/ErrorModal";

function Login(props) {
  const [input, setInput] = useState({
    id: "",
    password: "",
  });
  const [view, setView] = useState(true);
  const [modal, setModal] = useState({
    error: false,
    success: false,
  });
  const [inputError, setInputError] = useState(false);

  const url = "https://port-0-gni-server-k19y2kljzsh19o.sel4.cloudtype.app";

  const clickSetView = () => {
    setView(!view);
  };

  const onLogin = async (e) => {
    e.preventDefault();
    await axios
      .post(`${url}/common/login/`, {
        email: input.id,
        password: input.password,
      })
      .then((e) => {
        const data = e.data.token;
        const loginTime = new Date().getTime();
        localStorage.setItem(
          "tokens",
          JSON.stringify({
            accessToken: data.access, refreshToken: data.refresh
          })
        );

        localStorage.setItem("logintime", loginTime);
        window.location.href = "../";
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          setModal({
            ...modal,
            error: true,
          });
        } else {
          console.error(error);
        }
      });
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
            placeholder="이메일을 입력해주세요"
            style={{ borderColor: inputError ? "red" : null }}
            onChange={(e) => {
              setInput({ ...input, id: e.target.value });
            }}
          />
          <S.PasswordInputDiv>
            <S.PasswordInput
              name="pwinput"
              type={view ? "password" : "text"}
              placeholder="비밀번호를 입력해주세요"
              style={{ borderColor: inputError ? "red" : null }}
              onChange={(e) => {
                setInput({ ...input, password: e.target.value });
              }}
            />
            {view ? (
              <S.PasswordNotView onClick={clickSetView} />
            ) : (
              <S.PasswordView onClick={clickSetView} />
            )}
          </S.PasswordInputDiv>
          <S.ForgotPassword href="./forgotpw">
            비밀번호를 잊어버리셨나요?
          </S.ForgotPassword>
          <S.ForgotPasswordLine />
          <S.LoginButton onClick={onLogin}>LOGIN</S.LoginButton>
        </S.LoginFormSection>
      </S.LoginSection>
      {modal.error &&
        createPortal(
          <ErrorModal
            title={"로그인 실패"}
            content={"이메일과 비밀번호를 다시 확인해주세요!"}
            setModal={() => {
              setModal({ ...modal, error: false });
            }}
          />,
          document.body
        )}
    </>
  );
}

export default Login;
