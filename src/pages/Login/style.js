import styled, { createGlobalStyle } from "styled-components";
import LoginPaintSrc from "../../assets/LoginPaint.jpg";
import PWViewSrc from "../../assets/PasswordView.png";
import PWNotViewSrc from "../../assets/PasswordNotView.png";

export const LoginBackground = createGlobalStyle`
#root,
html,
body {
    width: 100%;
    height: 100%;
    background-color: #27462F;
    overflow: hidden;
}
`;

export const LoginSection = styled.div`
  display: flex;
  width: 150vh;
  height: 80vh;
  margin: 0 auto;
  margin-top: 10vh;
  background-color: white;
  border-radius: 50px;
`;

export const LoginScreenSection = styled.div`
  display: inline-block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 80vh;
`;

export const LoginFormSection = styled.div`
  display: inline-block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 80vh;
`;

export const LoginTitle = styled.h2`
  font-family: "Inter";
  font-size: 8vh;
  font-weight: 700;
  color: #00541d;
`;

export const LoginSubTitle = styled.span`
  margin-top: 2vh;
  text-align: center;
  font-size: 1.8vh;
  color: #ababab;
`;

export const LoginPaint = styled.div`
  width: 40vh;
  height: 27vh;
  margin-top: 3vh;
  background-image: url(${LoginPaintSrc});
  background-repeat: no-repeat;
  object-fit: contain;
  background-size: cover;
  border: none;
  outline: none;
`;

export const DivideLine = styled.div`
  margin-top: 10vh;
  height: 60vh;
  width: 1.2px;
  background-color: #003713;
`;

export const IdInput = styled.input`
  box-sizing: border-box;
  width: 70%;
  height: 8vh;

  background: #ffffff;
  border: 1px solid #005623;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  padding: 15px;
  font-size: 2vh;
  margin-bottom: 4vh;

  &:focus {
    outline: none;
  }
`;

export const PasswordInputDiv = styled.div`
  box-sizing: border-box;
  width: 70%;
  height: 8vh;

  background: #ffffff;
  border: 1px solid #005623;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  padding: 15px;

  display: flex;
  align-items: center;
`;

export const PasswordInput = styled.input`
  box-sizing: border-box;
  width: 90%;
  height: 7vh;
  border-radius: 30px;
  border: none;
  font-size: 2vh;

  &:focus {
    border: none;
    outline: none;
  }
`;

export const PasswordNotView = styled.div`
  width: 3.5vh;
  height: 3vh;

  background-image: url(${PWNotViewSrc});
  background-repeat: no-repeat;
  object-fit: contain;
  background-size: cover;
  border: none;
  outline: none;
`;

export const PasswordView = styled.div`
  width: 3.9vh;
  height: 3vh;

  background-image: url(${PWViewSrc});
  background-repeat: no-repeat;
  object-fit: contain;
  background-size: cover;
  border: none;
  outline: none;
`;


export const ForgotPassword = styled.a`
  margin-top: 5vh;
  font-size: 2vh;
  text-decoration: none;
  color: #c0bdbd;

  &:hover {
    color: #1e1e1e;
  }
`;

export const ForgotPasswordLine = styled.div`
  background-color: #003713;
  width: 23vh;
  height: 1px;
  margin-top: 1vh;
`;

export const LoginButton = styled.div`
  width: 20vh;
  height: 6vh;
  margin-top: 4vh;
  background: #27462f;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  color: white;
  font-size: 2vh;
  text-align: center;
  line-height: 6vh;
`;
