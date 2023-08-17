import React, { useState } from "react";
import * as S from "./style";
import axios from "axios";
import { redirect } from "react-router-dom";

function Signup(props) {
  const [input, setInput] = useState({
    name: "",
    studentNumber: "",
    email: "",
    password: "",
    comfirmPassword: "",
  });
  const [view, setView] = useState(true);
  const [review, setReView] = useState(true);
  const clickSetView = () => {
    setView(!view);
  };

  const clickSetReView = () => {
    setReView(!review);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(input.pw);
    if (input.pw !== input.confirmPw) {
      window.alert("비밀번호가 일치하지않습니다. 다시 확인 부탁드립니다.");
      return;
    }

    await axios
      .post(
        `https://port-0-gni-server-k19y2kljzsh19o.sel4.cloudtype.app/common/signup/`,
        {
          email: input.email,
          password: input.password,
          name: input.name,
          student_number: input.studentNumber,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
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
              type={view ? "password" : "text"}
              placeholder="비밀번호를 입력해주세요"
              onChange={(e) => {
                setInput({
                  ...input,
                  password: e.target.value,
                });
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
              onChange={(e) => {
                setInput({
                  ...input,
                  comfirmPassword: e.targt.value,
                });
              }}
            />
            {review ? (
              <S.PasswordNotView onClick={clickSetReView} />
            ) : (
              <S.PasswordView onClick={clickSetReView} />
            )}
          </S.PasswordInputDiv>
          <S.LoginButton onClick={onSubmit}>Sign up</S.LoginButton>
        </S.SignupFormSection>
      </S.SignupSection>
    </>
  );
}

export default Signup;
