import { createGlobalStyle, styled } from "styled-components";
import SignupSrc from "../../assets/SignupPaint.png";
import PWViewSrc from "../../assets/PasswordView.png";
import PWNotViewSrc from "../../assets/PasswordNotView.png";

export const SignupBackground = createGlobalStyle`
#root,
html,
body {
    width: 100%;
    height: 100%;
    background-color: #27462F;
    overflow: hidden;
}
`;

export const SignupSection = styled.div`
  display: flex;
  width: 150vh;
  height: 80vh;
  margin: 0 auto;
  margin-top: 10vh;
  background-color: white;
  border-radius: 50px;
`;

export const SingupScreenSection = styled.div`
  display: inline-block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 80vh;
`;

export const SignupFormSection = styled.div`
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

export const Title = styled.h2`
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

export const SignupEsset = styled.div`
  width: 30vh;
  height: 35vh;
  margin-top: 5.1vh;
  margin-left: 4.5;
  background-image: url(${SignupSrc});
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
  margin-bottom: 3vh;

  &:focus {
    outline: none;
  }
`;

export const NameInput = styled.input`
  box-sizing: border-box;
  width: 70%;
  height: 8vh;

  background: #ffffff;
  border: 1px solid #005623;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  padding: 25px;
  font-size: 2vh;
  margin-top: 3.5;
  margin-bottom: 3vh;

  &:focus {
    outline: none;
  }
`;

export const ShcoolNumInput = styled.input`
  box-sizing: border-box;
  width: 70%;
  height: 8vh;

  background: #ffffff;
  border: 1px solid #005623;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  padding: 25px;
  font-size: 2vh;
  margin-top: 3.5;
  margin-bottom: 3vh;

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
  margin-bottom: 3vh;
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

export const LoginButton = styled.button`
  width: 20vh;
  height: 6vh;
  margin-top: 2.5vh;
  background: #27462f;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  color: white;
  font-size: 2vh;
  text-align: center;
  line-height: 6vh;
`;
