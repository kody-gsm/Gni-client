import { styled } from "styled-components";

const Navigations = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 10;
  width: calc(100vw - 18px);
  height:80px;
  border-bottom:1px solid black;
  display: flex;
  justify-content:space-around;
`
const Between = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;
  width: 60vw;
  height: 100%;
  text-align: center;
  a{
    text-decoration: none;
    color: #00250D;
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
      height: 30px;
      width: 30px;
      border: solid 1px #27462F;
      border-left: none;
      border-radius: 0 10px 10px 0;
    }
  }
`
const Logo = styled.div`
  width: 100px;
  margin-right: 15vw;
  border: 1px solid black;
`
const Right = styled.div`
  width: 230px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button{
    padding: 5px 25px;
    cursor: pointer;
    color:#00250D;
    background-color: white;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 10px 3px lightgray;
    &:active{
      background-color: lightgray;
      color: white;
    }
  }
`
export { Navigations, Right, Between, HR, Logo, form };