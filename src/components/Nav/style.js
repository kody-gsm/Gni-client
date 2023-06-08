import { styled } from "styled-components";

const Navigations = styled.div`
  width:100vw;
  height:80px;
  border-bottom:1px solid black;
  display: flex;
  justify-content:space-around ;
`
const Between = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;
  width: 60vw;
  height: 100%;
  text-align: center;
`
const Block = styled.div`
  display: flex;
`
const HR = styled.div`
  height: 30px;
  border-left: 1px solid black;
`
const form = styled.div`
  input{
    width: 300px;
    height: 30px;
  }
  button{
    height: 30px;
    width: 30px;
  }
`
const Logo = styled.div`
  width: 100px;
  margin-right: 150px;
  border: 1px solid black;
`
const Right = styled.div`
  width: 200px;
  border: 1px solid black;
`
export { Navigations, Right, Between, Block, HR, Logo, form };