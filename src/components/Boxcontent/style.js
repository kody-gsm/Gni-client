import { styled } from "styled-components";

export const boxcontent = styled.div`
  width: 300px;
  height: 220px;
  border: 20px solid #27462F99;
  border-radius: 10px;
  .header{
    margin-top: 15px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: left;
    .profile{
      display: flex;
      align-items: center;
      .profileimg{
        width: 30px;
        height: 30px;
        border: 1px solid gray;
        border-radius: 30px;
        margin-right: 5px;
      }
    }
    .hr{
      margin: 0 10px;
      border-left: 1px solid black;
      height: 25px;
    }
  }
  .roothr{
    margin:10px auto;
    border-top: 1px solid black;
    width: 90%;
  }
  .contents{
    margin: 20px auto;
    height: 100px;
    width: 80%;
    box-shadow: 0 0 10px 5px lightgray;
    border-radius: 10px;
    padding: 10px;
  }
`