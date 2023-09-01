import styled, { createGlobalStyle } from "styled-components";
import ForgotPaintSrc from '../../assets/ForgotPW.png'
import PWViewSrc from "../../assets/PasswordView.png";
import PWNotViewSrc from "../../assets/PasswordNotView.png";

export const ForgotPWBackground = createGlobalStyle`
#root,
html,
body {
    width: 100%;
    height: 100%;
    background-color: #27462F;
    overflow: hidden;
}
`;

export const ForgotSection = styled.div`
  display: flex;
  width: 150vh;
  height: 80vh;
  margin: 0 auto;
  margin-top: 10vh;
  background-color: white;
  border-radius: 50px;
`;

export const ForgotPwScreenSection = styled.div`
  display: inline-block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 80vh;
`;

export const ForgotPWFormSection = styled.div`
  display: inline-block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 80vh;
`;

export const DivideLine = styled.div`
  margin-top: 10vh;
  height: 60vh;
  width: 1.2px;
  background-color: #003713;
`;

export const ForgotTitle = styled.h2`
  font-family: "Inter";
  font-size: 6.5vh;
  font-weight: 700;
  color: #00541d;
`;

export const SubTitle = styled.span`
  margin-top: 2vh;
  text-align: center;
  font-size: 1.8vh;
  color: #ababab;
`;

export const ForgotPaint = styled.div`
  width: 40vh;
  height: 27vh;
  margin-top: 5.5vh;
  margin-left: 6.3vh;
  background-image: url(${ForgotPaintSrc});
  background-repeat: no-repeat;
  object-fit: contain;
  background-size: cover;
  border: none;
  outline: none;
`;

export const EmailInput = styled.input`
  box-sizing: border-box;
  width: 70%;
  height: 8vh;

  background: #ffffff;
  border: 1px solid #005623;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  padding: 25px;
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
  margin-bottom: 4vh;
  padding: 15px;

  display: flex;
  align-items: center;
`;

export const PasswordInput = styled.input`
  box-sizing: border-box;
  padding-left: 1.3vh;
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


export const ReLogin = styled.a`
  margin-top: 3vh;
  font-size: 2vh;
  text-decoration: none;
  color: #c0bdbd;

  &:hover {
    color: #1e1e1e;
  }
`;

export const ReLoginLine = styled.div`
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

export const EmailVerifyingButton = styled.button`
  position: absolute;
  margin-top: -240px;
  margin-left: 300px;
  font-size: 5px;
  cursor: pointer;
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  padding: 2px 10px;
  &:active{
    background-color: #dcdcdc;
  }
`