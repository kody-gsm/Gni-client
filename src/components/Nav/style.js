import { styled } from "styled-components";

const Navigations = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 100;
  width: 100vw;
  height: 90px;
  border-bottom:1px solid black;
  display: flex;
  justify-content:center;
`
const Between = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;
  width: 60vw;
  height: 100%;
  font-size: 18px;
  text-align: center;
  a{
    text-decoration: none;
    color: #00250D;
    &:hover{
      color: #006d26;
    }
  }
  .stay{
    color:#6E907A;
    font-weight: 500;
  }
  .insteadInputNButton{
    height: 1px;
    width: 200px;
  }
`
const HR = styled.div`
  height: 30px;
  border-left: 1px solid black;
`
const form = styled.div`
  form{
    display: flex;
    input{
      width: 280px;
      height: 30px;
      padding-left: 10px;
      border-radius: 10px 0 0 10px;
      border: solid 1px #27462F;
    }
    img{
      cursor: pointer;
      height: 32px;
      width: 30px;
      border: solid 1px #27462F;
      border-left: none;
      border-radius: 0 10px 10px 0;
    }
  }
`
const Logo = styled.div`
  cursor: pointer;
  width: 100px;
  margin-left: 100px;
  margin-right: 15vw;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    margin-top: -10px;
    width: 100px;
    object-fit: scale-down;
  }
`
const Right = styled.div`
  width: 230px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 30px;
  button{
    padding: 5px 25px;
    cursor: pointer;
    color:#00250D;
    background-color: white;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 10px 3px lightgray;
    &:hover{
      background-color: #27462F99;
      color: white;
    }
    &:active{
      background-color: lightgray;
      color: white;
    }
  }
`
export const Alert = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.2);
  @keyframes textboxAnimation {
    0%{
      margin-top: -500px;
    }
    100%{
      margin-top: 0;
    }
  }
  .textbox{
    background-color: white;
    width: 30vw;
    height: 30vh;
    text-align: center;
    animation-name: textboxAnimation;
    animation-duration:ease;
    animation-duration: 0.7s;
    border-radius: 20px;
    img{
      margin: 15px;
      margin-top: 30px;
      width: 50px;
      object-fit: scale-down;
    }
    h3{
      color: #00541D;
      font-size: 16px;
      font-weight: bold;
    }
    p{
      margin-top: 10px;
      color: #ABABAB;
      font-size: 5px;
      line-height: 1.5;
    }
    div{
      padding-top:60px;
      color: #6E907A;
      font-size: 5px;
    }
  }
`

export { Navigations, Right, Between, HR, Logo, form };