import { styled } from "styled-components";

export const CommentList = styled.div`
  width: 30vw;
  height: 60vh;
  background-color: rgba(39, 70, 47, 0.6);
  border: 4px solid white;
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const inner = styled.form`
  text-align: center;
  width: 90%;
  height: 85%;
  border-radius: 7px;
  background-color: white;
  input{
    width: 20vw;
    height: 50px;
  }
`

export const contents = styled.div`
  height: 38vh;
  margin-bottom: 30px;
  overflow-y: scroll;
  overflow-x: hidden;
`