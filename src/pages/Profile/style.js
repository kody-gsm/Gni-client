import { styled } from "styled-components";

export const Profile = styled.div`
  margin-top: 90px;
  background-color: #27462F;
  height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const innerbox = styled.div`
  background-color: white;
  width: 890px;
  height: 390px;
  outline: 4px solid #d9d9d9;
  border-radius: 30px;
  display: flex;
  align-items: center;
`

export const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 300px;
  border-right: 1px solid black;
`
export const Img = styled.div`
  margin: auto;
  margin-bottom: 35px;
  width: 140px;
  height: 140px;
  border-radius: 1000px;
  box-shadow: 0 0 8px 3px #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    padding-top: 30px;
    width: 45%;
    object-fit: scale-down;
  }
`

export const NameDiv = styled.div`
  width: 50px;
  box-shadow: 0 0 8px 3px #e9e9e9;
  padding: 7px 20px;
  border-radius: 4px;
  margin: auto;
`

export const buttons = styled.div`
  margin-left: 4.6vw;
  width: 100px;
  margin-top: -9px;
  p{
    font-size: 10px;
    width: 240px;
    text-decoration-line: underline;
    position:absolute;
    bottom: calc(50vh - 180px);
    text-align: center;
    text-underline-position: under;
    color: #00250D;
    cursor: pointer;
    &:active{
      color: red;
    }
  }
`

export const StyledInputsForm = styled.form`
  text-align: center;
  margin-left: -4.6vw;
  width: 270px;
  margin-top: 20px;
  margin-left: 60px;
  img{
    object-fit:scale-down;
    width: 23px;
    position: absolute;
    margin-top: 14px;
    margin-left: 230px;
    cursor: pointer;
  }
`

export function StyledInputs({ children, ...rest }) {
  return <StyledInputsForm {...rest}>{children}</StyledInputsForm>
}

const StyledInputStyle = styled.input`
  padding: 20px;
  border-radius: 200px;
  width: 230px;
  height: 2px;
  font-size: 12px;
  border: 1px solid #005623;
  margin-bottom: 30px;
  box-shadow: 4px 4px 3px 0 #d2d2d2;
  font-size: 10px;
  &::placeholder{
    color: gray;
  }
  &:focus{
    outline: none;
  }
`

const StyledSubmitButtonStyle = styled.button`
  margin: auto;
  background-color: #476A50;
  color: white;
  width: 90px;
  height: 30px;
  font-size: 10px;
  border-radius: 5px;
  cursor: pointer;
`

export function StyledSubmitButton({ children, ...rest }) {
  return <StyledSubmitButtonStyle {...rest}>{children}</StyledSubmitButtonStyle>
}

export const NotModified = styled.p`
  color: #FF0000;
  font-size: 11px;
  margin-top: -16px;
  margin-left: 20px;
  margin-bottom: 5px;
  text-align: left;
`

const Styledbtn = styled.button`
  cursor: pointer;
  background-color: white;
  border-radius: 7px;
  box-shadow: 0 0 10px 3px #e2e2e2;
  width: 260px;
  height: 45px;
  border: 2px solid #d9d9d9;
  & + &{
    margin-top: 30px;
  }
  &:hover{
    background-color: #d9d9d9;
  }
  &:active{
    background-color:#476A50;
    color: white;
  }
`

export function Styledbutton({ children, ...rest }) {
  return <Styledbtn {...rest}>{children}</Styledbtn>
}

export function StyledInput({ children, ...rest }) {
  return <StyledInputStyle {...rest}>{children}</StyledInputStyle>
}

export const checkingPeople = styled.div`
  position: absolute;
  top: calc(50vh + 100px);
  right: calc(50vw - 420px);
  img{
    width: 168px;
    object-fit: scale-down;
  }
`

export const alertBox = styled.div`
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.25;  
`

export const alertMessage = styled.div`
  @keyframes moveanimation {
    0%{
      margin-top: -800px;
    }
  }
  position: absolute;
  margin: auto;
  margin-top: -240px;
  z-index: 101;
  width: 522px;
  height: 230px;
  border-radius: 20px;
  background-color: white;
  text-align: center;
  opacity: 1;
  animation-name: moveanimation;
  animation-duration: ease;
  animation-duration: 0.5s;
  img{
    object-fit: scale-down;
    width: 75px;
    margin-top: 25px;
    margin-bottom: 15px;
  }
`

export const alertMessageH1 = styled.div`
  font-weight: bolder;
  color:#00541D;
  text-align: center;
  font-size: 18px;
`
export const alertMessageAnswer = styled.div`
  margin-top: 20px;
`
export const AlertMessageAnswerButtonStyle = styled.button`
  box-shadow: 0 0 10px 3px #e2e2e2;
  border: none;
  cursor: pointer;
  background-color: white;
  width: 70px;
  height: 25px;
  border-radius: 3px;
  &+&{
    margin-left: 25px;
  }
  &:hover{
    background-color: #e2e2e2;
  }
  &:active{
    background-color: #eaeaea;
    border: 1px solid #e2e2e2;
  }
`

export function alertMessageAnswerButton({ children, ...rest }) {
  return <AlertMessageAnswerButtonStyle {...rest}>{children}</AlertMessageAnswerButtonStyle>;
}