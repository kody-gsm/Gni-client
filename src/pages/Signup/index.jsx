import React, { useState } from "react";
import * as S from "./style";
import axios from "axios";
import { createPortal } from "react-dom";
import SuccessModal from "../../components/SuccessModal";

function Signup() {
  const [input, setInput] = useState({
    name: "",
    studentNumber: "",
    email: "",
    password: "",
    comfirmPassword: "",
  });
  const [confirmPw, setConfirmPw] = useState({
    view: true,
    review: true,
  });
  const [modal, setModal] = useState(false);
  const [emailDuplication, setEmailDuplication] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (input.pw !== input.confirmPw) {
      window.alert("비밀번호가 일치하지않습니다. 다시 확인 부탁드립니다.");
      return;
    }

    try {
      await axios.post(
        "https://port-0-gni-server-k19y2kljzsh19o.sel4.cloudtype.app/common/signup/",
        {
          email: input.email,
          password: input.password,
          name: input.name,
          student_number: input.studentNumber,
        }
      );
      // 성공적으로 요청을 보냈을 때
      setModal(true); // 모달 열기
    } catch (error) {
      if (
        error.response.data.error === "이미 회원가입 된 유저입니다." &&
        error.response.status === 400
      ) {
        console.log(input);
        window.alert("이미 가입된 이메일 입니다. 다시 확인해주세요.");
        setEmailDuplication(!emailDuplication);
        console.log(error);
      } else if (
        error.response.data.error === "Inappropriate_email" &&
        error.response.status === 400
      ) {
        window.alert(
          "이메일 형식이 맞지 않습니다. 학교이메일로 가입을 진행해주시기 바랍니다."
        );
      } else if (
        error.response.data.error === "Inappropriate_password" &&
        error.response.status === 400
      ) {
        window.alert(
          "비밀번호가 형식에 맞지않습니다. 8자 이상으로 한글과 숫자로 구성해주시기 바랍니다."
        );
      } else {
        console.error(error);
      }
    }
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
          <S.NameInput
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={(e) => {
              setInput({
                ...input,
                name: e.target.value,
              });
            }}
          />
          <S.ShcoolNumInput
            type="text"
            placeholder="학번을 입력해주세요"
            maxLength={4}
            onChange={(e) => {
              setInput({
                ...input,
                studentNumber: e.target.value,
              });
            }}
          />
          <S.EmailInput
            type="text"
            placeholder="이메일을 입력해주세요"
            style={{ borderColor: emailDuplication ? "red" : null }}
            onClick={() => {
              setEmailDuplication(false);
            }}
            onChange={(e) => {
              setInput({
                ...input,
                email: e.target.value,
              });
            }}
          />{" "}
          <S.PasswordInputDiv>
            <S.PasswordInput
              name="pwinput"
              type={confirmPw.view ? "password" : "text"}
              placeholder="비밀번호를 입력해주세요"
              onChange={(e) => {
                setInput({
                  ...input,
                  password: e.target.value,
                });
              }}
            />
            {confirmPw.view ? (
              <S.PasswordNotView
                onClick={() => {
                  setConfirmPw({ ...input, view: !confirmPw.view });
                }}
              />
            ) : (
              <S.PasswordView
                onClick={() => {
                  setConfirmPw({ ...input, view: !confirmPw.view });
                }}
              />
            )}
          </S.PasswordInputDiv>
          <S.PasswordInputDiv>
            <S.PasswordInput
              name="pwinput"
              type={confirmPw.review ? "password" : "text"}
              placeholder="비밀번호를 다시 입력해주세요"
              onChange={(e) => {
                setInput({
                  ...input,
                  comfirmPassword: e.target.value,
                });
              }}
            />
            {confirmPw.review ? (
              <S.PasswordNotView
                onClick={() => {
                  setConfirmPw({ ...input, review: !confirmPw.review });
                }}
              />
            ) : (
              <S.PasswordView
                onClick={() => {
                  setConfirmPw({ ...input, review: !confirmPw.review });
                }}
              />
            )}
          </S.PasswordInputDiv>
          <S.LoginButton
            onClick={(e) => {
              onSubmit(e);
            }}
          >
            Sign up
          </S.LoginButton>
        </S.SignupFormSection>
      </S.SignupSection>
      {modal &&
        createPortal(
          <SuccessModal
            title={"이메일을 확인해주세요"}
            content={
              "이메일로 인증메일이 발송되었습니다. 확인후 로그인을 해주세요!"
            }
            setModal={setModal}
            pageLink={"/login"}
          />,
          document.body
        )}
    </>
  );
}

export default Signup;
